import React, { useState, useEffect, useMemo } from 'react';
import { newsApiSources } from '@/config/newsApiConfig';
import { ExternalLink, Calendar, Globe, Search, Filter, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

function NewsDescription({ summary }: { summary: string }) {
  const [expanded, setExpanded] = React.useState(false);
  const words = summary.split(' ');
  const isClamped = words.length >= 10;
  const displayText = expanded || !isClamped ? summary : words.slice(0, 10).join(' ') + '...';
  return (
    <span className={expanded ? 'transition-all duration-300' : 'line-clamp-3 transition-all duration-300'}>
      {expanded ? summary : displayText}
      {isClamped && (
        <button
          className="text-gold/80 underline text-xs ml-1"
          onClick={() => setExpanded(v => !v)}
        >
          {expanded ? 'See Less' : 'See More'}
        </button>
      )}
    </span>
  );
}

const Articles = () => {
  const articlesGridRef = React.useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      if (articlesGridRef.current) {
        articlesGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [lastUpdated, setLastUpdated] = useState(null);
  const maxPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // To expand mock articles data (at least 30)
  const mockArticles = useMemo(() => {
    const baseArticles = [
      {
        id: 1,
        title: 'Supreme Court Delivers Landmark Judgment on Electoral Disputes',
        summary: 'The Supreme Court has set new precedents for handling electoral disputes in Nigeria, emphasizing the importance of evidence and due process gtg gft ggvf gvty gvyfty gvgvg ghfgch gchfgcgh gfchgb nghchg vhgvhg hjv vjhgv vjhv bbvhvjh hvghv bvghv bvhgv bvghvbn vghv.',
        source: 'Nigerian Law Reports',
        date: '2024-01-20',
        link: '#',
        category: 'Constitutional Law'
      },
      {
        id: 2,
        title: 'New Regulations for Cryptocurrency Trading in Nigeria',
        summary: 'The Securities and Exchange Commission introduces comprehensive guidelines for cryptocurrency operations and trading platforms.',
        source: 'Legal Nigeria',
        date: '2024-01-18',
        link: '#',
        category: 'Financial Law'
      },
      {
        id: 3,
        title: 'Updates to Corporate Governance Guidelines',
        summary: 'Recent amendments to corporate governance rules affect public companies and their reporting requirements.',
        source: 'Nigerian Law Guru',
        date: '2024-01-16',
        link: '#',
        category: 'Corporate Law'
      },
      {
        id: 4,
        title: 'Employment Rights: New Minimum Wage Implementation',
        summary: 'Analysis of the new minimum wage law and its implications for employers and employees across Nigeria.',
        source: 'LegalNaija',
        date: '2024-01-15',
        link: '#',
        category: 'Employment Law'
      },
      {
        id: 5,
        title: 'Real Estate Law: Land Use Act Amendments',
        summary: 'Proposed amendments to the Land Use Act and their potential impact on property ownership and transactions.',
        source: 'Property Law Nigeria',
        date: '2024-01-14',
        link: '#',
        category: 'Real Estate Law'
      },
      {
        id: 6,
        title: 'Criminal Justice Reform: New Sentencing Guidelines',
        summary: 'The Federal High Court introduces new sentencing guidelines aimed at ensuring consistent and fair criminal justice outcomes.',
        source: 'Criminal Law Nigeria',
        date: '2024-01-12',
        link: '#',
        category: 'Criminal Law'
      },
      {
        id: 7,
        title: 'Intellectual Property Rights in the Digital Age',
        summary: 'How Nigerian IP laws are adapting to address challenges in the digital economy and online content creation.',
        source: 'IP Law Nigeria',
        date: '2024-01-10',
        link: '#',
        category: 'Intellectual Property'
      },
      {
        id: 8,
        title: 'Tax Law Updates: New VAT Regulations',
        summary: 'Federal Inland Revenue Service announces new VAT regulations affecting digital services and e-commerce.',
        source: 'Tax Law Nigeria',
        date: '2024-01-08',
        link: '#',
        category: 'Tax Law'
      }
    ];
    
    // Generate 22 more articles for demo
    const moreArticles = Array.from({ length: 22 }, (_, i) => ({
      id: 9 + i,
      title: `Legal Update Article #${9 + i}`,
      summary: `Summary for legal update article #${9 + i}. This is a demo article for pagination and UI testing purposes.`,
      source: 'Demo Source',
      date: `2024-01-${(7 - (i % 7)).toString().padStart(2, '0')}`,
      link: '#',
      category: 'General Law'
    }));
    return [...baseArticles, ...moreArticles];
  }, []);

  // Combine mock sources and API sources for display
  const sources = [
    ...newsApiSources.filter(s => s.visible).map(s => s.name),
    'Nigerian Law Reports',
    'Legal Nigeria',
    'Nigerian Law Guru',
    'LegalNaija',
    'Property Law Nigeria',
    'Criminal Law Nigeria',
    'IP Law Nigeria',
    'Tax Law Nigeria'
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      // Calculate date 1 week ago
      const today = new Date();
      const lastWeek = new Date(today);
      lastWeek.setDate(today.getDate() - 7);
      const weekAgoStr = lastWeek.toISOString().split('T')[0];
      // Try each source in order
      for (const source of newsApiSources) {
        if (source.apiKey) {
          try {
            let url = '';
            if (source.name === 'NewsAPI.org') {
              url = `${source.url}?country=${source.country}&category=${source.category}&from=${weekAgoStr}&pageSize=30&apiKey=${source.apiKey}`;
            } else if (source.name === 'GNews') {
              url = `${source.url}?country=${source.country}&category=${source.category}&from=${weekAgoStr}&max=30&token=${source.apiKey}`;
            }
            const res = await fetch(url);
            const data = await res.json();
            console.log('NewsAPI response:', data); // Debug: log API response
            
            // // Normalize articles for display
            let fetchedArticles = [];
            if (source.name === 'NewsAPI.org' && data.articles) {
              fetchedArticles = data.articles.map((a, i) => ({
                id: i,
                title: a.title,
                summary: a.description,
                source: source.name,
                date: a.publishedAt ? a.publishedAt.split('T')[0] : '',
                link: a.url,
                category: a.source?.name || 'General'
              }));
            } else if (source.name === 'GNews' && data.articles) {
              fetchedArticles = data.articles.map((a, i) => ({
                id: i,
                title: a.title,
                summary: a.description,
                source: source.name,
                date: a.publishedAt ? a.publishedAt.split('T')[0] : '',
                link: a.url,
                category: a.source?.name || 'General'
              }));
            }
            // Ensure at least 30 articles
            if (fetchedArticles.length < 30) {
              fetchedArticles = [...fetchedArticles, ...mockArticles.slice(0, 30 - fetchedArticles.length)];
            }
            setArticles(fetchedArticles);
            setLastUpdated(new Date());
            setLoading(false);
            return;
          } catch (err) {
            console.error('API fetch error:', err); // Debug: log fetch error
            // Try next source
            continue;
          }
        }
      }
      // If no API key, use mock data (at least 30)
      setArticles(mockArticles);
      setLastUpdated(new Date());
      setLoading(false);
    };
    fetchArticles();
  }, [mockArticles]);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = selectedSource === 'all' || article.source === selectedSource;
    return matchesSearch && matchesSource;
  });

  // Pagination logic
  const totalArticles = filteredArticles.length;
  const totalPages = Math.min(Math.ceil(totalArticles / articlesPerPage), maxPages);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const refreshArticles = () => {
    setLoading(true);
    setCurrentPage(1);
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  return (
  <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg section-padding text-primary-foreground">
        <div className='after-bg'></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <motion.h1 className="text-display mb-6"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >
              Legal News & <span className="text-gradient-gold">Articles</span>
            </motion.h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed with the latest legal developments, court decisions, and regulatory 
              updates from across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-10 w-full sm:w-64"
                />
              </div>

              {/* Source Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="form-input pl-10 pr-8 w-full sm:w-48 appearance-none"
                >
                  <option value="all">All Sources</option>
                  {sources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Refresh Button */}
            <div className="flex items-center space-x-4">
              {lastUpdated && (
                <span className="text-caption">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </span>
              )}
              <button
                onClick={refreshArticles}
                disabled={loading}
                className="btn-outline flex items-center space-x-2 py-3 px-4"
              >
                <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-16">
        <div className="container-custom flex items-center flex-col">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] md:w-full">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card-elegant animate-pulse">
                  <div className="h-4 bg-gray-medium rounded mb-4"></div>
                  <div className="h-6 bg-gray-medium rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-3 bg-gray-medium rounded"></div>
                    <div className="h-3 bg-gray-medium rounded w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="h-3 bg-gray-medium rounded w-20"></div>
                    <div className="h-3 bg-gray-medium rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredArticles.length > 0 ? (
                <>
                  <div ref={articlesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] md:w-full" style={{scrollMarginTop: "5.5rem"}} >
                    {paginatedArticles.map((article, index) => (
                      <article key={article.id} className="card-elegant hover-lift animate-fade-in">
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gold/10 text-gold border border-gold/20">
                            {article.category}
                          </span>
                          <div className="flex items-center text-caption text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 text-sm"><NewsDescription summary={article.summary} />
</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-caption text-muted-foreground">
                            <Globe className="h-3 w-3 mr-1" />
                            <span className="truncate">{article.source}</span>
                          </div>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-gold transition-colors inline-flex items-center text-sm"
                          >
                            Read Full Article
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                  {/* Pagination Controls */}
                  <div className="flex justify-center mt-8 gap-2">
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700"
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      Prev
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-gold text-white' : 'bg-gray-100 text-gray-700'}`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-1 rounded bg-gray-200 text-gray-700"
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <Globe className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or filter options.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* RSS Sources Information */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-heading mb-4">Our News Sources</h2>
            <p className="text-body max-w-2xl mx-auto">
              We aggregate legal news from trusted Nigerian law publications and websites 
              to keep you informed about the latest developments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sources.map((source, index) => (
              <div key={index} className="text-center">
                <div className="card-elegant hover-glow">
                  <Globe className="h-8 w-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium">{source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-caption text-muted-foreground">
              Articles are automatically updated every 12 hours. External links lead to original sources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;