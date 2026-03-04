import React from 'react'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: 'Kharkiv Institute of Information Technologies',
      year: '2013 – 2016',
    },
    {
      id: 2,
      degree: "Diploma in Software Engineering",
      institution: 'Dnipro Technical College of Computing',
      year: '2011 – 2013',
    }
  ]

  const languages = [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'B2 (Upper-Intermediate)' }
  ]

  return (
    <div className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="timeline-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree-title">{edu.degree}</h3>
                  <span className="education-year">{edu.year}</span>
                </div>
                <div className="education-institution">
                  <h4>{edu.institution}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="languages-section">
          <h3 className="section-title" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Languages</h3>
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
