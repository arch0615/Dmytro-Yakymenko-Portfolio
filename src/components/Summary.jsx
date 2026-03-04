import React from 'react'
import TechIcon from './TechIcon'
import './Summary.css'

function Summary() {
  return (
    <div className="summary">
      <div className="summary-container">
        <h2 className="section-title">About Me</h2>
        <div className="summary-content">
          <div className="summary-text">
            <p>
              Software Developer with 8+ years of experience building scalable web and mobile
              applications from concept to production. Strong experience in modern frontend development
              using React and Next.js, combined with backend engineering in PHP and Python, including FastAPI.
            </p>
            <p>
              Skilled in designing RESTful and microservice-based APIs, complex business systems, and
              cross-platform mobile applications using React Native and Flutter. Focused on writing clean,
              maintainable code and designing systems that are reliable, secure, scalable, and optimized
              for long-term growth.
            </p>
          </div>
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-by-domain">
              <div className="domain-category">
                <h4 className="domain-title">Frontend</h4>
                <div className="skills-line">
                  <div className="skill-item">
                    <TechIcon name="React" />
                    <span>React</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Next.js" />
                    <span>Next.js</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="JavaScript (ES6+)" />
                    <span>JavaScript ES6+</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="TypeScript" />
                    <span>TypeScript</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Redux Toolkit" />
                    <span>Redux Toolkit</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="React Query" />
                    <span>React Query</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="HTML5" />
                    <span>HTML5</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="CSS3" />
                    <span>CSS3</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="SASS / SCSS" />
                    <span>SASS / SCSS</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Tailwind CSS" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Material UI" />
                    <span>Material UI</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Bootstrap" />
                    <span>Bootstrap</span>
                  </div>
                </div>
              </div>
              <div className="domain-category">
                <h4 className="domain-title">Backend</h4>
                <div className="skills-line">
                  <div className="skill-item">
                    <TechIcon name="PHP (Laravel, CodeIgniter)" />
                    <span>PHP (Laravel, CodeIgniter)</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Python (FastAPI, Django)" />
                    <span>Python (FastAPI, Django)</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Node.js (Express)" />
                    <span>Node.js (Express)</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="REST API Development" />
                    <span>REST API Development</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="GraphQL" />
                    <span>GraphQL</span>
                  </div>
                </div>
              </div>
              <div className="domain-category">
                <h4 className="domain-title">Mobile</h4>
                <div className="skills-line">
                  <div className="skill-item">
                    <TechIcon name="React Native" />
                    <span>React Native</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Flutter" />
                    <span>Flutter</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Dart" />
                    <span>Dart</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Expo" />
                    <span>Expo</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Firebase" />
                    <span>Firebase Integration</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Firebase" />
                    <span>Push Notifications (FCM)</span>
                  </div>
                </div>
              </div>
              <div className="domain-category">
                <h4 className="domain-title">Database</h4>
                <div className="skills-line">
                  <div className="skill-item">
                    <TechIcon name="PostgreSQL" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="MySQL" />
                    <span>MySQL</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="SQLite" />
                    <span>SQLite</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Redis" />
                    <span>Redis</span>
                  </div>
                </div>
              </div>
              <div className="domain-category">
                <h4 className="domain-title">DevOps & Infrastructure</h4>
                <div className="skills-line">
                  <div className="skill-item">
                    <TechIcon name="Docker" />
                    <span>Docker</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Docker Compose" />
                    <span>Docker Compose</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Nginx" />
                    <span>Nginx</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Linux Server Management" />
                    <span>Linux Server Management</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="AWS (EC2, S3, RDS, IAM)" />
                    <span>AWS (EC2, S3, RDS, IAM)</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="DigitalOcean" />
                    <span>DigitalOcean</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Vercel" />
                    <span>Vercel</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="CI/CD (GitHub Actions, GitLab CI)" />
                    <span>CI/CD (GitHub Actions, GitLab CI)</span>
                  </div>
                  <div className="skill-item">
                    <TechIcon name="Git" />
                    <span>Git Version Control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
