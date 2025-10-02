import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnReveal } from '@/OnReveal';

const HomeArticleSection = () => {

const articles = [
    {
      title: 'Supreme Court Rules on Constitutional Matter',
      source: 'Nigerian Law Reports',
      date: '2024-01-20',
      summary: 'The Supreme Court has delivered a landmark judgment on constitu...',
      link: 'articles'
    },
    {
      title: 'New Regulations for Financial Services',
      source: 'Legal Nigeria',
      date: '2024-01-18',
      summary: 'Central Bank introduces new compliance requirements for financial institutions...',
      link: 'articles'
    },
    {
      title: 'Updates to Corporate Governance Rules',
      source: 'Nigerian Law Guru',
      date: '2024-01-16',
      summary: 'Securities and Exchange Commission updates corporate governance guidelines...',
      link: 'articles'
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-gray-light h-full">
      <div className="container-custom flex justify-center flex-col items-center">
        <div className="text-center mb-8">
          <motion.h2 className="text-heading mb-4"
          initial={{ opacity: 0, y: 75 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          >Legal News & Updates</motion.h2>
          <OnReveal>
          <p className="text-body msax-w-2xl mx-auto">
            Stay informed with the latest legal developments and news from Nigeria.
          </p>
          </OnReveal>
        </div>
        <div className="grid grid-cols-1 md:w-full w-11/12 md:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <OnReveal>
            <div key={index} className="card-elegant hover-lift h-full">
              <div className="flex items-center h-5 justify-between mb-4">
                <span className="text-caption text-gold">{article.source}</span>
                <span className="text-caption">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 h-14">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.summary}</p>
              <Link to={article.link} className="text-primary hover:text-gold transition-colors inline-flex items-center mt-10">
                Read Full Article <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            </OnReveal>
          ))}
        </div>
        <div className=" mt-8">
          <OnReveal>
          <Link to="/articles" className="">
          <button className='btn-primary'>
            View All Articles
            </button>
          </Link>
          </OnReveal>
        </div>
      </div>
    </section>
  )
}

export default HomeArticleSection