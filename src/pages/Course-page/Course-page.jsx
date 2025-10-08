import React, { useState } from 'react';
import { Search, Users, Clock, Star, Award } from 'lucide-react';
import './Course-page.css';

const CoursePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: "Branding and Design",
      description: "Master the art of creating compelling brand identities, logos, and visual communication strategies that resonate with target audiences.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      duration: "12 weeks",
      students: 2847,
      rating: 4.8,
      level: "Beginner"
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Dive deep into algorithms, neural networks, and AI systems. Learn to build intelligent applications that can learn and adapt.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
      duration: "16 weeks",
      students: 3921,
      rating: 4.9,
      level: "Advanced"
    },
    {
      id: 3,
      title: "Cybersecurity (Ethical Hacking)",
      description: "Learn to protect systems and networks by understanding vulnerabilities and implementing robust security measures.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      duration: "14 weeks",
      students: 1836,
      rating: 4.7,
      level: "Intermediate"
    },
    {
      id: 4,
      title: "FullStack Web Development",
      description: "Complete web development journey from frontend to backend, databases, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      duration: "20 weeks",
      students: 5423,
      rating: 4.8,
      level: "Intermediate"
    },
    {
      id: 5,
      title: "UI/UX Design and Prototyping",
      description: "Create intuitive user experiences and beautiful interfaces using modern design principles and prototyping tools.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
      duration: "10 weeks",
      students: 2134,
      rating: 4.6,
      level: "Beginner"
    },
    {
      id: 6,
      title: "Data Science with Python",
      description: "Analyze complex datasets, create visualizations, and build predictive models using Python and its powerful libraries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      duration: "18 weeks",
      students: 4287,
      rating: 4.9,
      level: "Intermediate"
    },
    {
      id: 7,
      title: "Frontend Web Development with React JS",
      description: "Build dynamic, interactive web applications using React, hooks, state management, and modern JavaScript.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      duration: "12 weeks",
      students: 3654,
      rating: 4.7,
      level: "Intermediate"
    },
    {
      id: 8,
      title: "Backend with Node.js",
      description: "Develop scalable server-side applications with Node.js, Express, databases, and API development.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      duration: "14 weeks",
      students: 2876,
      rating: 4.8,
      level: "Intermediate"
    },
    {
      id: 9,
      title: "Product Management",
      description: "Learn to guide products from conception to launch, including strategy, user research, and team coordination.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      duration: "8 weeks",
      students: 1923,
      rating: 4.5,
      level: "Beginner"
    },
    {
      id: 10,
      title: "WordPress Development",
      description: "Master WordPress development from custom themes to plugins, e-commerce solutions, and performance optimization.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
      duration: "10 weeks",
      students: 3247,
      rating: 4.4,
      level: "Beginner"
    },
    {
      id: 11,
      title: "Wix Website Design",
      description: "Create professional websites using Wix platform, from basic sites to advanced e-commerce solutions.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      duration: "6 weeks",
      students: 1567,
      rating: 4.2,
      level: "Beginner"
    },
    {
      id: 12,
      title: "DevOps Engineering",
      description: "Learn continuous integration, deployment pipelines, containerization, and infrastructure automation.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
      duration: "16 weeks",
      students: 2134,
      rating: 4.9,
      level: "Advanced"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'cp-level-beginner';
      case 'Intermediate': return 'cp-level-intermediate';
      case 'Advanced': return 'cp-level-advanced';
      default: return 'cp-level-beginner';
    }
  };

  return (<div className="cp-wrapper">

      {/* Hero Section */}
      <section className="cp-hero">
        <div className="cp-hero-content">
          <h1 className="cp-hero-title">Explore Our Courses</h1>
          <p className="cp-hero-subtitle">
            Discover world-class courses designed to advance your skills and career
          </p>
          <div className="cp-search-container">
            <div className="cp-search-box">
              <Search className="cp-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="cp-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="cp-courses-section">
        <div className="cp-container">
          <div className="cp-section-header">
            <h2 className="cp-section-title">Available Courses</h2>
            <p className="cp-section-subtitle">
              Choose from {courses.length} comprehensive courses
            </p>
          </div>
          
          <div className="cp-courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="cp-course-card">
                <div className="cp-card-image">
                  <img src={course.image} alt={course.title} />
                  <div className={`cp-level-badge ${getLevelColor(course.level)}`}>
                    {course.level}
                  </div>
                </div>
                
                <div className="cp-card-content">
                  <h3 className="cp-course-title">{course.title}</h3>
                  <p className="cp-course-description">{course.description}</p>
                  
                  <div className="cp-course-stats">
                    <div className="cp-stat">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="cp-stat">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="cp-stat">
                      <Star size={16} />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <button className="cp-enroll-button">
                    <Award size={18} />
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="cp-no-results">
            <p>No courses found matching your search.</p>
            </div>
          )}
        </div>
      </section>

    </div>);
};

export default CoursePage;