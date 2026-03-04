import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'TechNova Solutions LLC',
      period: '03/2022 – 10/2025',
      description: 'Led the development of full-stack web and mobile platforms serving over 20,000 users.',
      achievements: [
        'Led the development of 5+ full-stack web and mobile platforms serving over 20,000 users',
        'Architected frontend systems using React, Next.js, and TypeScript, improving performance, SEO, and reducing load time by 30%',
        'Designed backend services using FastAPI and PHP (Laravel), implementing JWT authentication, RBAC, caching, and reducing API response time by 30%',
        'Integrated Stripe, PayPal, and third-party APIs to support subscription-based SaaS products',
        'Managed Dockerized deployments on AWS and DigitalOcean, maintaining 99.9% uptime with CI/CD automation'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'Laravel', 'Docker', 'AWS']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'DigitalCore Systems',
      period: '01/2019 – 02/2022',
      description: 'Developed web applications for clients in e-commerce, education, and service industries.',
      achievements: [
        'Developed 10+ web applications for clients in e-commerce, education, and service industries',
        'Built scalable REST APIs using Node.js (Express), PHP, and Python to support applications with up to 8,000 monthly active users',
        'Designed PostgreSQL and MySQL schemas, optimized indexing and queries, improving data processing efficiency by 35%',
        'Implemented secure authentication systems using JWT, OAuth2, and role-based access control',
        'Collaborated in Agile teams, participating in sprint planning, code reviews, and architectural decisions'
      ],
      technologies: ['Node.js', 'PHP', 'Python', 'PostgreSQL', 'MySQL', 'REST APIs']
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'Eastern Web Technologies',
      period: '03/2017 – 12/2018',
      description: 'Developed business web applications and cross-platform mobile apps for internal tools.',
      achievements: [
        'Developed business web applications using PHP, JavaScript, and jQuery',
        'Built administrative dashboards and reporting systems used by 300+ internal users',
        'Developed cross-platform mobile applications using React Native and Flutter for internal business tools',
        'Improved page load speed by 25% through backend optimization, caching, and frontend refactoring',
        'Maintained legacy systems, performed debugging, and delivered continuous feature enhancements'
      ],
      technologies: ['PHP', 'JavaScript', 'React Native', 'Flutter', 'MySQL']
    }
  ]

  return (
    <div className="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <span className="job-period">{exp.period}</span>
                </div>
                <p className="job-description">{exp.description}</p>
                <div className="job-achievements">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="job-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
