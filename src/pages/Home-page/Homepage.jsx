import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  Clock, 
  Calendar, 
  BookOpen,
  ChevronDown, 
  ChevronUp,
  Code2, 
  TrendingUp, 
  UserCheck, 
  Handshake,
  ArrowRight
} from 'lucide-react';
import './Homepage.css';
import calenderimage from '../../assets/Calendar.jpeg';
import condusiveimage from '../../assets/condusive-environment.jpeg';
import demandskills from '../../assets/indemank-tech-skills.jpeg';
import { Link } from 'react-router-dom';


// FAQ data that was referenced but not defined
const faqData = [
  {
    id: 0,
    question: "What courses do you offer?",
    answer: "We offer a wide range of tech courses including Full-Stack Web Development, Machine Learning, Cybersecurity, UI/UX Design, Data Science, and Branding & Design. All courses are designed with industry-standard practices in mind."
  },
  {
    id: 1,
    question: "How long are the courses?",
    answer: "Course durations vary from 10 weeks to 6 months depending on the program. Each course is designed to provide comprehensive coverage of the subject matter while fitting into your schedule."
  },
  {
    id: 2,
    question: "Do you offer online classes?",
    answer: "Yes! We offer both on-campus and hybrid (online + on-campus) options for most of our courses, giving you the flexibility to learn in a way that suits your lifestyle."
  },
  {
    id: 3,
    question: "What is your job placement rate?",
    answer: "We have a 95% job placement rate. Our strong partnerships with leading companies and our focus on industry-ready skills help our graduates secure positions quickly after completion."
  },
  {
    id: 4,
    question: "Do I need prior experience?",
    answer: "No prior experience is required for most of our courses. Our curriculum is designed to accommodate both beginners and experienced professionals looking to upskill."
  }
];

const Homepage = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Branding and Design",
      description: "Master the art of creating compelling brand identities, logos, and visual communication strategies that resonate with target audiences.",
      duration: "12 Weeks",
      frequency: "Twice a week",
      mode: "ON CAMPUS",
      modeClass: "on-campus",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      imageAlt: "Branding and Design Course"
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Welcome to the Machine Learning Fundamentals course! In this 12-week curriculum, you will embark on an exciting journey to explore the world of machine learning algorithms, data science, and artificial intelligence.",
      duration: "12 Weeks",
      frequency: "Twice a week",
      mode: "ON CAMPUS",
      modeClass: "on-campus",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
      imageAlt: "Machine Learning Course"
    },
    {
      id: 3,
      title: "Cybersecurity (Ethical Hacking)",
      description: "Cybersecurity has an estimated 37% growth rate for jobs, faster than the average for other occupations. Gain skills in the occupation with the fastest growing demand.",
      duration: "3 Months",
      frequency: "Twice a week",
      mode: "ON CAMPUS & ONLINE",
      modeClass: "hybrid",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      imageAlt: "Cybersecurity Course"
    },
    {
      id: 4,
      title: "FullStack Web Development",
      description: "Are you ready to embark on an exciting journey into the world of full-stack development? Our comprehensive Full-Stack Development Course is your gateway to mastering both frontend and backend technologies.",
      duration: "6 Months",
      frequency: "Four times a week",
      mode: "ON CAMPUS & ONLINE",
      modeClass: "hybrid",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      imageAlt: "FullStack Web Development Course"
    },
    {
      id: 5,
      title: "UI/UX Design and Prototyping",
      description: "Create intuitive user experiences and beautiful interfaces using modern design principles and prototyping tools.",
      duration: "10 Weeks",
      frequency: "Twice a week",
      mode: "ON CAMPUS & ONLINE",
      modeClass: "hybrid",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
      imageAlt: "UI/UX Design Course"
    },
    {
      id: 6,
      title: "Data Science with Python",
      description: "Analyze complex datasets, create visualizations, and build predictive models using Python and its powerful libraries.",
      duration: "18 Weeks",
      frequency: "Three times a week",
      mode: "ON CAMPUS & ONLINE",
      modeClass: "hybrid",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      imageAlt: "Data Science Course"
    }
  ];

  const features = [
    {
      id: 1,
      title: "In-Demand Tech Skills",
      description: "Gain marketable and practical tech skills with our comprehensive curriculum. We focus on cutting-edge technologies that employers are actively seeking in the job market.",
      icon: <Code2 size={40} />,
      iconColor: "tech-skills",
      imagePosition: "right",
      image: demandskills,
      imageAlt: "Modern programming and coding workspace with multiple monitors"
    },
    {
      id: 2,
      title: "Industry Standard Approach",
      description: "Our programs are built using methodologies that mirror real-world industry practices. Learn the same tools, frameworks, and best practices used by leading tech companies.",
      icon: <TrendingUp size={40} />,
      iconColor: "industry-standard",
      imagePosition: "left",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Professional whiteboard session with charts and graphs"
    },
    {
      id: 3,
      title: "Conducive Environment",
      description: "Study in our state-of-the-art facilities designed for optimal learning. Our modern classrooms are equipped with the latest technology and comfortable workstations.",
      icon: <Users size={40} />,
      iconColor: "environment",
      imagePosition: "right",
      image: condusiveimage,
      imageAlt: "Modern classroom with students working on computers"
    },
    {
      id: 4,
      title: "Flexible Calendars",
      description: "We offer both weekday and weekend schedules to accommodate your lifestyle. Choose from morning, evening, or intensive weekend programs that fit your busy schedule.",
      icon: <Calendar size={40} />,
      iconColor: "flexible",
      imagePosition: "left",
      image: calenderimage,
      imageAlt: "Student studying flexibly with laptop in comfortable environment"
    },
    {
      id: 5,
      title: "You're not Alone",
      description: "Join a supportive community of learners, instructors, and industry mentors. Our network provides ongoing guidance, peer collaboration, and professional connections.",
      icon: <UserCheck size={40} />,
      iconColor: "community",
      imagePosition: "right",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Happy student with instructor in learning environment"
    },
    {
      id: 6,
      title: "Hiring Partners",
      description: "We collaborate with top companies to connect our graduates with exciting career opportunities. Our extensive network of hiring partners actively seeks our skilled alumni.",
      icon: <Handshake size={40} />,
      iconColor: "partners",
      imagePosition: "left",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      imageAlt: "Professional handshake representing partnership and career opportunities"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="background-container">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
            alt="Quanticamp Tech Academy Students"
            className="background-image"
          />
          <div className="overlay"></div>
        </div>

        <div className="content">
          <div className="main-heading">
            <h1 className="title">
              Accelerate Your Career
              <br />
              <span className="tech-highlight">in Tech</span>
            </h1>
            <p className="subtitle">
              Join thousands of successful graduates who transformed their careers with Univoicit
            </p>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-header">
                <div className="icon-container individuals-icon">
                  <Users size={32} />
                </div>
                <h2 className="card-title">Individuals</h2>
              </div>
              <p className="card-text">
                Accelerate your dream of becoming a world-class software developer or designer.
              </p>
            <Link to="/courses" className="cta-button">
             Browse Courses
            </Link>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="icon-container corporate-icon">
                  <Building2 size={32} />
                </div>
                <h2 className="card-title">Corporate</h2>
              </div>
              <p className="card-text">
                Professional Staff training courses applicable to any corporate organization.
              </p>
              <Link to="/contact" className="cta-button">
                Learn More
              </Link>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Graduates</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Job Placement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Partners</div>
            </div>
          </div>
        </div>

        <div className="floating-element-1"></div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="courses-container">
          <div className="section-header">
            <h2 className="section-title3">Find your Perfect program</h2>
            <p className="section-subtitle">
              Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image-container">
                  <img 
                    src={course.image} 
                    alt={course.imageAlt}
                    className="course-image"
                  />
                  <div className={`course-mode-badge ${course.modeClass}`}>
                    {course.mode}
                  </div>
                </div>

                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  
                  <div className="course-details">
                    <div className="detail-item">
                      <Clock className="detail-icon" size={16} />
                      <span className="detail-text">{course.duration}</span>
                    </div>
                    <div className="detail-item">
                      <Users className="detail-icon" size={16} />
                      <span className="detail-text">{course.frequency}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="browse-button-container">
            <Link to="/courses" className="browse-all-btn">
              <BookOpen size={20} />
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Grow Section */}
      <section className="grow-section">
        <div className="grow-container">
          <div className="section-header">
            <h2 className="section-title">Grow with Quanticamp</h2>
          </div>

          <div className="features-list">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`feature-item ${feature.imagePosition === 'left' ? 'image-left' : 'image-right'}`}
              >
                <div className="feature-content">
                  <div className="feature-header">
                    <div className={`feature-icon ${feature.iconColor}`}>
                      {feature.icon}
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                  </div>
                  <p className="feature-description">{feature.description}</p>
                </div>

                {feature.image && (
                  <div className="feature-image-container">
                    <img 
                      src={feature.image} 
                      alt={feature.imageAlt}
                      className="feature-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">FAQs</h2>
          </div>

          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className={`faq-question ${openFAQ === faq.id ? 'active' : ''}`}
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openFAQ === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="question-icon">
                    {openFAQ === faq.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>

                <div 
                  id={`faq-answer-${faq.id}`}
                  className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}
                >
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <p>
              Visit our <a href="#faq-page" className="faq-link">FAQ Page</a> for more help
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started-section">
        <div className="get-started-container">
          <div className="bg-decoration">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>

          <div className="get-started-content">
            <div className="section-icon">
              <TrendingUp size={48} />
            </div>

            <h2 className="get-started-title">Get started Today</h2>
            
            <p className="get-started-description">
              By 2030, there would be a huge deficit of tech talent globally. Whether you 
              are looking to change your career path, increase your earning, Univoicit is a 
              tech school designed to accelerate your career in tech. Our approach is Agile 
              Project-based learning, we focus on in-demand tech skills by the 
              industries. <span className="highlight-text">Start your journey today.</span>
            </p>

            <Link to="/courses" className="get-started-btn">
              <BookOpen size={20} />
              <span>Browse All Courses</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>

            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">2030</div>
                <div className="stat-label">Tech Talent Deficit Year</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">Agile</div>
                <div className="stat-label">Project-Based Learning</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">Industry</div>
                <div className="stat-label">Ready Skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;