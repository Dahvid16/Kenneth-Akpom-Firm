import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, BookOpen, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const HomeBlogSection = () => {

  function NewsDescription({ excerpt }: { excerpt: string }) {
    const [expanded, setExpanded] = React.useState(false);
    const words = excerpt.split(' ');
    const isClamped = words.length >= 10;
    const displayText = expanded || !isClamped ? excerpt : words.slice(0, 10).join(' ') + '...';
    return (
      <span className={expanded ? 'transition-all duration-300' : 'line-clamp-3 transition-all duration-300'}>
        {expanded ? excerpt : displayText}
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
    
  const blogPosts = [
        {
          id: 1,
          title: 'Understanding Your Rights as a Tenant in Nigeria',
          excerpt: 'Learn about tenant rights, landlord obligations, and how to handle rental disputes.',
          date: '2024-01-15',
          slug: 'tenant-rights-nigeria'
        },
        {
          id: 2,
          title: 'Starting a Business in Nigeria: Legal Requirements',
          excerpt: 'A comprehensive guide to the legal steps required to start your business.',
          date: '2024-01-10',
          slug: 'starting-business-nigeria'
        },
        {
          id: 3,
          title: 'Employment Law Updates: What Employers Need to Know',
          excerpt: 'Recent changes in Nigerian employment law, their implications and how they can affect you as an Employer/Employee.',
          date: '2024-01-05',
          slug: 'employment-law-updates'
        }
      ];

  return (
    <section className="py-14 md:py-20">
        <div className="container-custom flex justify-center flex-col items-center">
          <div className="text-center mb-12">
            <motion.h2 className="text-heading mb-4"
            initial={{ opacity: 0, y: 75 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            >The Law and You</motion.h2>
            <OnReveal>
            <p className="text-body max-w-2xl mx-auto">
              Practical legal insights and advice to help you navigate everyday legal matters.
            </p>
            </OnReveal>
          </div>
          <div className="grid grid-cols-1 w-11/12 md:grid-cols-3 gap-10 md:w-full">
            {blogPosts.map((post, index) => (
              <OnReveal>
              <article key={post.id} className="card-elegant hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <BookOpen className="h-8 w-8 text-gold" />
                  <div className="flex items-center text-caption text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground h-20 mb-4"><NewsDescription excerpt={post.excerpt} /></p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-primary hover:text-gold transition-colors inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
              </OnReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <OnReveal>
            <Link to="/blog" className="">
            <button className='btn-outline'>
                View All Posts
            </button>
            </Link>
            </OnReveal>
          </div>
        </div>
      </section>
  )
}

export default HomeBlogSection