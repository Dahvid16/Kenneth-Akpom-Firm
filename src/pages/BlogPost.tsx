import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - In a real app, this would be fetched based on the slug
  const post = {
    id: 1,
    title: 'Understanding Your Rights as a Tenant in Nigeria',
    content: `
      <p>As a tenant in Nigeria, it's crucial to understand your rights and responsibilities under the law. This comprehensive guide will help you navigate the complex landscape of Nigerian tenancy law and protect your interests as a renter.</p>

      <h2>Legal Framework</h2>
      <p>Nigerian tenancy law is governed by various statutes and common law principles, including:</p>
      <ul>
        <li>The Recovery of Premises Act</li>
        <li>Rent Control and Recovery of Residential Premises Law (State Laws)</li>
        <li>Common law principles of landlord-tenant relationships</li>
      </ul>

      <h2>Your Rights as a Tenant</h2>
      
      <h3>1. Right to Peaceful Enjoyment</h3>
      <p>Every tenant has the fundamental right to peaceful enjoyment of the rented property. This means your landlord cannot:</p>
      <ul>
        <li>Enter your property without proper notice (usually 24 hours)</li>
        <li>Harass or intimidate you</li>
        <li>Interfere with your use of common areas</li>
        <li>Cut off utilities as a means of eviction</li>
      </ul>

      <h3>2. Right to Habitable Conditions</h3>
      <p>Your landlord is obligated to maintain the property in a habitable condition, which includes:</p>
      <ul>
        <li>Ensuring basic utilities (water, electricity) are functional</li>
        <li>Maintaining structural integrity of the building</li>
        <li>Addressing health and safety hazards promptly</li>
        <li>Providing adequate security measures</li>
      </ul>

      <h3>3. Protection from Illegal Eviction</h3>
      <p>Under Nigerian law, landlords cannot evict tenants without following proper legal procedures:</p>
      <ul>
        <li>Proper notice must be given (usually 1-6 months depending on tenancy type)</li>
        <li>Valid grounds for eviction must exist</li>
        <li>Court orders may be required for contested evictions</li>
        <li>Self-help evictions are illegal</li>
      </ul>

      <h2>Common Tenancy Issues and Solutions</h2>

      <h3>Rent Increases</h3>
      <p>Many states have rent control laws that limit how much and how often rent can be increased. Generally:</p>
      <ul>
        <li>Rent increases must be reasonable and justified</li>
        <li>Proper notice (usually 3-6 months) must be given</li>
        <li>Some states cap annual rent increases at 10%</li>
      </ul>

      <h3>Security Deposits</h3>
      <p>Regarding security deposits and advance rent payments:</p>
      <ul>
        <li>Deposits should be held in trust and returned after tenancy</li>
        <li>Deductions must be justified and documented</li>
        <li>Normal wear and tear cannot be deducted</li>
        <li>Receipts should be provided for all payments</li>
      </ul>

      <h2>What to Do When Problems Arise</h2>

      <h3>Document Everything</h3>
      <p>Keep detailed records of:</p>
      <ul>
        <li>All communications with your landlord</li>
        <li>Rent payments and receipts</li>
        <li>Property conditions (photos/videos)</li>
        <li>Maintenance requests and responses</li>
      </ul>

      <h3>Seek Legal Advice</h3>
      <p>If you're facing serious tenancy issues, consider:</p>
      <ul>
        <li>Consulting with a qualified property lawyer</li>
        <li>Contacting tenant rights organizations</li>
        <li>Filing complaints with relevant state agencies</li>
        <li>Exploring mediation before litigation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding your rights as a tenant is the first step in protecting yourself from unfair treatment. While landlord-tenant relationships can be complex, knowing the law gives you the power to stand up for your rights and seek appropriate remedies when problems arise.</p>

      <p>If you're experiencing tenancy issues or need legal advice on landlord-tenant matters, don't hesitate to contact our office for professional guidance tailored to your specific situation.</p>
    `,
    author: 'Barrister Adebayo Ogundimu',
    date: '2024-01-15',
    category: 'Real Estate Law',
    readTime: '5 min read',
    tags: ['Tenant Rights', 'Property Law', 'Real Estate', 'Legal Advice']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Starting a Business in Nigeria: Legal Requirements',
      slug: 'starting-business-nigeria',
      category: 'Corporate Law'
    },
    {
      id: 3,
      title: 'Employment Law Updates: What Employers Need to Know',
      slug: 'employment-law-updates',
      category: 'Employment Law'
    },
    {
      id: 4,
      title: 'Family Law Basics: Marriage and Divorce in Nigeria',
      slug: 'marriage-divorce-nigeria',
      category: 'Family Law'
    }
  ];

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${post.title}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container-custom py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-gold transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container-custom mb-12">
        <header className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="text-caption text-muted-foreground">{post.readTime}</span>
          </div>
          
          <h1 className="text-display mb-6">{post.title}</h1>
          
          <div className="flex items-center justify-center space-x-6 text-caption text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elegant">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: 'hsl(var(--foreground))',
                lineHeight: '1.7'
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-light text-foreground border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Share2 className="h-5 w-5 mr-2" />
              Share this article
            </h3>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-heading text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="card-elegant hover-lift">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary mb-3">
                  {relatedPost.category}
                </span>
                <h3 className="text-lg font-semibold mb-4">
                  <Link 
                    to={`/blog/${relatedPost.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {relatedPost.title}
                  </Link>
                </h3>
                <Link 
                  to={`/blog/${relatedPost.slug}`}
                  className="text-primary hover:text-gold transition-colors inline-flex items-center text-sm"
                >
                  Read More <ArrowLeft className="ml-1 h-3 w-3 rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-heading mb-4">Need Legal Advice?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you have questions about your legal rights or need professional legal assistance, 
            we're here to help.
          </p>
          <Link to="/contact" className="btn-gold">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;