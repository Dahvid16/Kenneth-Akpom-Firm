import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaUserFriends} from 'react-icons/fa';
import { Building, Home, Briefcase, FileText, Shield, Gavel, Globe } from 'lucide-react';
import { OnReveal } from '@/OnReveal';

const ServiceServices = () => {

    const services = [
    {
      title: 'Corporate Law',
      description: 'Business Legal services including company incorporation, contract drafting, mergers and acquisitions.',
      icon: Building,
      features: [
        'Company Formation & Registration',
        'Contract Drafting & Review',
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Compliance & Regulatory Affairs',
        'Commercial Dispute Resolution'
      ]
    },
    {
      title: 'Real Estate Law',
      description: 'Guidance on property transactions, Land acquisition, property development, and real estate disputes.',
      icon: Home,
      features: [
        'Property Purchase & Sale',
        'Land Title Registration',
        'Property Development',
        'Landlord-Tenant Disputes',
        'Real Estate Documentation',
        'Property Investment Advisory'
      ]
    },
    {
      title: 'Family Law',
      description: 'Handling of family matters including divorce, custody arrangements, adoption, and matrimonial property disputes.',
      icon: FaUserFriends,
      features: [
        'Divorce Proceedings',
        'Child Custody & Support',
        'Adoption Services',
        'Matrimonial Property Division',
        'Domestic Violence Protection',
        'Marriage Registration'
      ]
    },
    {
      title: 'Employment Law',
      description: 'Support for employers and employees on workplace issues, employment contracts, and labor disputes.',
      icon: Briefcase,
      features: [
        'Employment Contract Drafting',
        'Workplace Dispute Resolution',
        'Wrongful Termination Claims',
        'Labor Relations',
        'Workplace Safety Compliance',
        'Employee Benefits Planning'
      ]
    },
    {
      title: 'Civil Litigation',
      description: 'Representation in civil Courts for disputes including contract breaches, tort claims, and commercial litigation.',
      icon: Gavel,
      features: [
        'Contract Dispute Resolution',
        'Debt Recovery',
        'Personal Injury Claims',
        'Professional Negligence',
        'Commercial Litigation',
        'Appeal Proceedings'
      ]
    },
    {
      title: 'Intellectual Property',
      description: 'Protection and enforcement of intellectual property rights including trademarks, copyrights, and patents.',
      icon: Shield,
      features: [
        'Trademark Registration',
        'Copyright Protection',
        'Patent Applications',
        'IP Licensing Agreements',
        'Brand Protection',
        'IP Dispute Resolution'
      ]
    },
    {
      title: 'International Law',
      description: 'Cross-border legal matters and international business transactions.',
      icon: Globe,
      features: [
        'International Trade',
        'Cross-border Transactions',
        'Treaty & Agreement Review',
        'International Arbitration',
        'Diplomatic Law',
        'Foreign Investment Advisory'
      ]
    },
    {
      title: 'Legal Documentation',
      description: 'Preparation and review of legal documents including wills, contracts, and legal agreements.',
      icon: FileText,
      features: [
        'Will & Testament Drafting',
        'Power of Attorney',
        'Legal Agreement Preparation',
        'Document Review & Analysis',
        'Notarization Services',
        'Legal Opinion Letters'
      ]
    }
  ];
  return (
    <>
    {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container-custom flex justify-center items-center w-[95%] md-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <OnReveal>
              <div key={index} className="card-service animate-fade-in">
                <div className="flex items-start space-x-4 mb-6 h-">
                  <div className="flex-shrink-0">
                    <service.icon className="h-12 w-12 text-gold group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <OnReveal>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    </OnReveal>
                    <OnReveal>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    </OnReveal>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <OnReveal>
                  <h4 className="font-semibold text-primary">Key Services Include:</h4>
                  </OnReveal>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <OnReveal>
                      <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                        <FaCheckCircle className="w-3 h-3 font-bold text-gold rounded-full flex-shrink-0"/>
                        <span>{feature}</span>
                      </li>
                      </OnReveal>
                    ))}
                  </ul>
                </div>
                <OnReveal>
                <Link to={`/contact#form`} state={{ service: service.title }}>
                  <button className="px-2 py-[0.6rem] text-xs bg-gold-dark/70 rounded-xl mt-8 text-white/95 flex items-center gap-1">
                    Schedule Consultation <FaArrowRight className='text-xs'/>
                  </button>
                </Link>
                </OnReveal>
              </div>
              </OnReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceServices