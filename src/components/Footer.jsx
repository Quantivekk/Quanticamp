import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';   // ✅ Added this line
import './Footer.css';


const Footer = () => {
  // Handle link clicks (you can add navigation logic here)
  const handleLinkClick = (section) => {
    console.log(`Navigate to: ${section}`);
    // Add your navigation logic here
    // Example: navigate(`/${section}`) or window.location.href = `/${section}`
  };

  // Handle social media clicks
  const handleSocialClick = (platform) => {
    console.log(`Open ${platform} social media`);
    // Add your social media links here
    // Example: window.open('https://facebook.com/', '_blank')
  };

  // Handle send message click
  const handleSendMessage = () => {
    console.log('Open contact form or email client');
    // Add your contact logic here
    // Example: window.location.href = 'mailto:hello@quanticamp.com'
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content Grid */}
        <div className="footer-grid">
          {/* Company Information Column */}
          <div className="footer-column company-info">
            {/* Company Logo and Name */}
            <div className="company-logo">
              <Shield size={40} />
              <span className="company-name">Quanticamp</span>
            </div>
            
            {/* Mission Statement */}
            <div className="mission-text">
              <h4>Our Mission</h4>
              <p>
                Our goal is to build driven, passionate and outstanding 
                developers with industry-ready skills that can fit in anywhere 
                across the globe. We make learning tech skills accessible and 
                practical.
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Quick links</h4>
            <ul className="footer-links">
              <li>
                <button 
                  onClick={() => handleLinkClick('about')}
                  className="footer-link"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('courses')}
                  className="footer-link"
                >
                  Browse Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('corporate')}
                  className="footer-link"
                >
                  Corporate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('hire-talents')}
                  className="footer-link"
                >
                  Hire Tech Talents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('financial-aid')}
                  className="footer-link"
                >
                  Financial Aid
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('events')}
                  className="footer-link"
                >
                  Workshops and Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('faq')}
                  className="footer-link"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')}
                  className="footer-link"
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-info">
              {/* Physical Address */}
              <div className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <div className="contact-text">
                  <p className="contact-address">
                    10 ANUOLUWAPO Close, Ikeja, Lagos State, Nigeria<br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>
              
              {/* General Class Information */}
              <div className="contact-section">
                <p className="section-title2">For more info on our Classes</p>
                <div className="contact-item">
                  <Phone size={16} className="contact-icon" />
                  <div className="phone-numbers">
                    <a href="tel:+2347033294090" className="phone-number">
                      (+234) 703 329 4090
                    </a>
                    <a href="tel:+2347084689732" className="phone-number">
                      (+234) 708 468 9732
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Corporate Enquiry */}
              <div className="contact-section">
                <p className="section-title2">For corporate enquiry:</p>
                <div className="contact-item">
                  <Phone size={16} className="contact-icon" />
                  <a href="tel:+2347033294090" className="phone-number">
                    (+234) 703 329 4090
                  </a>
                </div>
              </div>
              
              {/* Email Contacts */}
              <div className="contact-section">
                <p className="section-title2">Email:</p>
                <div className="contact-item">
                  <Mail size={16} className="contact-icon" />
                  <div className="email-addresses">
                    <a href="mailto:hello@quanticamp.com" className="email">
                      hello@quanticamp.com
                    </a>
                    <a href="mailto:hello@quanticamp.com" className="email">
                      hello@quanticamp.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Send Message Link */}
              <div className="message-link">
                <Link to="/contact" className="send-message-link">
                  <ExternalLink size={16} />
                  Send a Message
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media">
          <button 
            onClick={() => handleSocialClick('facebook')}
            className="social-link" 
            aria-label="Follow us on Facebook"
          >
            <Facebook size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick('twitter')}
            className="social-link" 
            aria-label="Follow us on Twitter"
          >
            <Twitter size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick('instagram')}
            className="social-link" 
            aria-label="Follow us on Instagram"
          >
            <Instagram size={20} />
          </button>
          <button 
            onClick={() => handleSocialClick('linkedin')}
            className="social-link" 
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin size={20} />
          </button>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          {/* Copyright Notice */}
          <div className="copyright">
            <p>Copyright © Quanticamp School of Technology 2025. All Rights Reserved.</p>
          </div>
          
          {/* Legal Links */}
          <div className="footer-legal">
            <button 
              onClick={() => handleLinkClick('privacy')}
              className="legal-link"
            >
              Privacy Policy
            </button>
            <span className="separator"> | </span>
            <button 
              onClick={() => handleLinkClick('terms')}
              className="legal-link"
            >
              Terms of Use
            </button>
            <span className="separator"> | </span>
            <button 
              onClick={() => handleLinkClick('cookie')}
              className="legal-link"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;