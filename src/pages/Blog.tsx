import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock blog posts data - In a real app, this would come from the admin dashboard
  const mockPosts = [
    {
      id: 1,
      title: 'Understanding Your Rights as a Tenant in Nigeria',
      excerpt: 'Learn about tenant rights, landlord obligations, and how to handle rental disputes effectively under Nigerian law.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2024-01-15',
      slug: 'tenant-rights-nigeria',
      category: 'Real Estate Law',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Starting a Business in Nigeria: Legal Requirements',
      excerpt: 'A comprehensive guide to the legal steps required to start your business in Nigeria, from registration to compliance.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2024-01-10',
      slug: 'starting-business-nigeria',
      category: 'Corporate Law',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Employment Law Updates: What Employers Need to Know',
      excerpt: 'Recent changes in Nigerian employment law and their implications for both employers and employees.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2024-01-05',
      slug: 'employment-law-updates',
      category: 'Employment Law',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Family Law Basics: Marriage and Divorce in Nigeria',
      excerpt: 'Understanding the legal aspects of marriage and divorce proceedings under Nigerian customary and statutory law.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2024-01-01',
      slug: 'marriage-divorce-nigeria',
      category: 'Family Law',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Intellectual Property Protection for Nigerian Businesses',
      excerpt: 'How to protect your business ideas, trademarks, and creative works under Nigerian intellectual property law.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2023-12-28',
      slug: 'ip-protection-nigeria',
      category: 'Intellectual Property',
      readTime: '9 min read',
      featured: true
    },
    {
      id: 6,
      title: 'Criminal Law Procedure: Know Your Rights During Arrest',
      excerpt: 'Essential information about your rights when arrested and the criminal justice process in Nigeria.',
      content: 'Full blog post content would go here...',
      author: 'Barrister Adebayo Ogundimu',
      date: '2023-12-25',
      slug: 'arrest-rights-nigeria',
      category: 'Criminal Law',
      readTime: '4 min read',
      featured: false
    }
  ];

  const categories = [
    'Corporate Law',
    'Real Estate Law',
    'Employment Law',
    'Family Law',
    'Intellectual Property',
    'Criminal Law'
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      setLoading(true);
      setTimeout(() => {
        setPosts(mockPosts);
        setLoading(false);
      }, 800);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || searchTerm || selectedCategory !== 'all');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg section-padding text-primary-foreground">
        <div className='after-bg'></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-display mb-6">
              The Law and <span className="text-gradient-gold">You</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Practical legal insights and advice to help you navigate everyday legal matters 
              in Nigeria with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10 w-full sm:w-64"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input pl-10 pr-8 w-full sm:w-48 appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchTerm && selectedCategory === 'all' && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-subheading mb-2">Featured Post</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <article className="card-elegant hover-lift bg-gradient-to-br from-primary/5 to-gold/5 border-gold/20">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gold text-gold-foreground">
                    Featured
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                    {featuredPost.category}
                  </span>
                </div>
                
                <h3 className="text-heading mb-4">
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>
                
                <p className="text-body mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-caption text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="btn-gold text-sm"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {regularPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <article key={post.id} className="card-elegant hover-lift animate-fade-in">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                          {post.category}
                        </span>
                        <span className="text-caption text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-3">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-gold transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-caption text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-primary hover:text-gold transition-colors inline-flex items-center text-sm"
                        >
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Posts Found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-heading mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest legal insights and updates 
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder-white/70"
            />
            <button className="btn-gold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;