import React, { useState, useRef } from 'react'
import './Portfolio.css'

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const dragStart = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Personal Training and Yoga Classes',
      description: 'Responsive fitness and yoga center website showcasing services, trainer bios, class schedules, and a resource library built with HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/projects/Personal Training and Yoga Classes_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'Built with HTML, CSS, and JavaScript, this fitness and yoga center\'s website offers an intuitive and responsive experience for visitors. The site highlights a variety of services, including cardio, weight lifting, and yoga, while showcasing the expertise of the trainers. Users can easily navigate to class schedules, trainer bios, and client testimonials. The resource library provides valuable fitness tips and articles, helping users stay motivated and informed.',
        images: [
          '/projects/Personal Training and Yoga Classes_1.jpg',
          '/projects/Personal Training and Yoga Classes_2.jpg'
        ]
      }
    },
    {
      id: 2,
      title: 'Analyst Performance Overview Dashboard',
      description: 'Tableau dashboard tracking wins, losses, ROI, units placed, and streaks across analysts with drill-down filtering. Delivered in light and dark themes.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
      image: '/projects/Analyst Performance Overview Dashboard_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'Developed a performance analytics dashboard in Tableau to track wins, losses, ROI, units placed, and streaks across analysts. Users can filter by analyst to drill into metrics like net unit gain, win rate, and bet-level performance. Designed to support data-driven decisions for sports betting firms or analyst performance reviews. Delivered in both light and dark themes for usability.',
        images: [
          '/projects/Analyst Performance Overview Dashboard_1.jpg',
          '/projects/Analyst Performance Overview Dashboard_2.jpg'
        ]
      }
    },
    {
      id: 3,
      title: 'Interactive Sales & Payments Dashboard',
      description: 'Power BI dashboard tracking franchise sales, bookings, cancellations, and market share across regions with multi-dimensional filters.',
      technologies: ['Power BI'],
      image: '/projects/Interactive Sales - Payments Dashboard_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'An interactive Power BI dashboard to track franchise sales, bookings, cancellations, and market share across regions and timeframes. Included filters by year, month, area, and team, plus views for financial and calendar years. Enhanced insights into customer types, referral sources, and agent performance. Delivered in both light and dark modes for executive use, improving revenue tracking and decision-making.',
        images: [
          '/projects/Interactive Sales - Payments Dashboard_1.jpg',
          '/projects/Interactive Sales - Payments Dashboard_2.jpg',
          '/projects/Interactive Sales - Payments Dashboard_3.jpg',
          '/projects/Interactive Sales - Payments Dashboard_4.jpg'
        ]
      }
    },
    {
      id: 4,
      title: 'Executive Dashboard – Service Ticket Analytics',
      description: 'Dynamic Power BI dashboard visualising service ticket performance across impact levels, resolution rates, and monthly trends for operational teams.',
      technologies: ['Power BI'],
      image: '/projects/Executive Dashboard - Service Ticket Analytics_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'Designed a dynamic Power BI dashboard to visualise service ticket performance across impact levels, resolution rates, and monthly trends. Built for operational teams to track unresolved tickets, identify bottlenecks, and reduce response time. Integrated intuitive filters and a clean UI for executive decision-making. Resulted in improved SLA tracking and data-driven prioritisation.',
        images: [
          '/projects/Executive Dashboard - Service Ticket Analytics_1.jpg',
          '/projects/Executive Dashboard - Service Ticket Analytics_2.jpg'
        ]
      }
    },
    {
      id: 5,
      title: 'Solar Electrical Service Website',
      description: 'Custom-coded website showcasing solar installation services with a clean, modern design focused on responsiveness and high performance.',
      technologies: ['PHP', 'WordPress'],
      image: '/projects/Solar Electrical Service Website_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'Crafted and developed this custom-coded website to efficiently showcase solar installation services. Utilizing HTML5, CSS3, and JavaScript, engineered a clean, modern design that enhances user interaction and accessibility. The development process focused on building a responsive, high-performance site, ensuring users have a seamless experience whether browsing for information or exploring service options.',
        images: [
          '/projects/Solar Electrical Service Website_1.jpg',
          '/projects/Solar Electrical Service Website_2.jpg'
        ]
      }
    },
    {
      id: 6,
      title: 'GEOSPARC – Team Planning & Scheduling Dashboard',
      description: 'Web application for managing and visualising team schedules, overlapping timelines, and quarterly projects with a clean calendar view.',
      technologies: ['PHP', 'Laravel', 'CSS', 'JavaScript'],
      image: '/projects/GEOSPARC – Team Planning - Scheduling Dashboard.jpg',
      liveUrl: '#',
      details: {
        overview: 'This project showcases the GEOSPARC Planning Dashboard, a web application designed to manage and visualize team schedules efficiently. The interface allows users to plan multiple teams, track overlapping schedules, and organize projects by quarter or event. Each planning card includes team details, timelines, and real-time updates, all displayed with a clean calendar view. With intuitive filters, quick actions, and a modern UI, the dashboard simplifies complex scheduling tasks.',
        images: [
          '/projects/GEOSPARC – Team Planning - Scheduling Dashboard.jpg'
        ]
      }
    },
    {
      id: 7,
      title: 'piGardenweb – Smart Garden Monitoring Dashboard',
      description: 'Web application for monitoring smart garden environments, tracking humidity, temperature, fertility, and light intensity with real-time control.',
      technologies: ['Next.js', 'Node.js', 'TypeScript', 'REST API'],
      image: '/projects/piGardenweb – Smart Garden Monitoring Dashboard.jpg',
      liveUrl: '#',
      details: {
        overview: 'Designed and developed the piGardenweb dashboard, a web application built to monitor and manage smart garden environments. The interface tracks key metrics such as humidity, temperature, fertility, and light intensity while providing real-time control over multiple garden sections. Features like customizable icons, file management, and user role permissions enhance usability. With a clean, modern UI, this dashboard transforms complex sensor data into accessible insights.',
        images: [
          '/projects/piGardenweb – Smart Garden Monitoring Dashboard.jpg'
        ]
      }
    },
    {
      id: 8,
      title: 'Interactive Planning Dashboard',
      description: 'GEOSPARC web application streamlining quarterly scheduling and team coordination with event management, timelines, and status updates.',
      technologies: ['PHP', 'Laravel', 'CSS', 'JavaScript'],
      image: '/projects/Interactive Planning Dashboard.jpg',
      liveUrl: '#',
      details: {
        overview: 'Designed the GEOSPARC Planning Dashboard, a web application that streamlines scheduling and team coordination. The system allows users to plan quarterly activities, assign multiple teams, and manage events with clarity. Each card displays timelines, team details, and status updates in a clean calendar view. With quick actions, filters, and modern UI elements, the dashboard simplifies complex planning tasks, improves collaboration, and ensures smooth workflow management.',
        images: [
          '/projects/Interactive Planning Dashboard.jpg'
        ]
      }
    },
    {
      id: 9,
      title: 'Interactive Campaign Management Dashboard',
      description: 'Touchcard web dashboard for managing direct mail campaigns, tracking delivered cards, ad spend, attributed sales, and ROAS.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/projects/Interactive Campaign Management Dashboard.jpg',
      liveUrl: '#',
      details: {
        overview: 'Designed and built the Touchcard dashboard, a web application for managing and analyzing direct mail campaigns. The interface tracks delivered cards, ad spend, attributed sales, and ROAS, while also offering detailed postcard reports with scheduling, delivery status, and recipient information. Features like user roles, file management, and account credits ensure full campaign control. With a modern, data-focused design, the dashboard makes campaign performance easy to visualize.',
        images: [
          '/projects/Interactive Campaign Management Dashboard.jpg'
        ]
      }
    },
    {
      id: 10,
      title: 'MEXC and KuCoin Trading Bot',
      description: 'Advanced Python trading bot for MEXC and KuCoin exchanges delivering maximum customer satisfaction and significant trading profits.',
      technologies: ['Python'],
      image: '/projects/MEXC and KuCoin trading bot using Python_1.jpg',
      liveUrl: '#',
      details: {
        overview: 'The most advanced MEXC and KuCoin trading bot built using Python. This bot has provided maximum customer satisfaction and generated significant profits through automated trading strategies across both exchanges.',
        images: [
          '/projects/MEXC and KuCoin trading bot using Python_1.jpg',
          '/projects/MEXC and KuCoin trading bot using Python_2.jpg'
        ]
      }
    },
    {
      id: 11,
      title: 'Spendee Budget & Money Tracker',
      description: 'Personal finance app for managing wallets, tracking expenses, and monitoring spending patterns with visual reports and multi-wallet support.',
      technologies: ['React Native', 'Firebase'],
      image: '/projects/Spendee Budget - Money Tracker_1.png',
      liveUrl: '#',
      details: {
        overview: 'Spendee allows users to manage wallets, track expenses, and monitor spending patterns with visual reports. It supports multi-wallet tracking and budgeting categories, giving users a clear picture of their finances with an intuitive, modern interface.',
        images: [
          '/projects/Spendee Budget - Money Tracker_1.png',
          '/projects/Spendee Budget - Money Tracker_2.png',
          '/projects/Spendee Budget - Money Tracker_3.png'
        ]
      }
    }
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">My Portfolio</h2>
        <p className="section-subtitle">A collection of projects I've built and shipped</p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div
                className="project-image-container"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/1a1a1a/ffffff?text=${encodeURIComponent(project.title)}`
                  }}
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <div
                className="modal-gallery"
                onMouseDown={(e) => { dragStart.current = e.clientX }}
                onMouseUp={(e) => {
                  if (dragStart.current === null) return
                  const diff = e.clientX - dragStart.current
                  const len = selectedProject.details.images.length
                  if (diff < -50) {
                    setCurrentImageIndex(i => i === len - 1 ? 0 : i + 1)
                  } else if (diff > 50) {
                    setCurrentImageIndex(i => i === 0 ? len - 1 : i - 1)
                  }
                  dragStart.current = null
                }}
                onMouseLeave={() => { dragStart.current = null }}
              >
                <img
                  key={currentImageIndex}
                  src={selectedProject.details.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x400/1a1a1a/ffffff?text=${encodeURIComponent(selectedProject.title)}`
                  }}
                />
                {selectedProject.details.images.length > 1 && (
                  <>
                    <button
                      className="gallery-btn gallery-prev"
                      onClick={() => setCurrentImageIndex(i => i === 0 ? selectedProject.details.images.length - 1 : i - 1)}
                    >
                      ‹
                    </button>
                    <button
                      className="gallery-btn gallery-next"
                      onClick={() => setCurrentImageIndex(i => i === selectedProject.details.images.length - 1 ? 0 : i + 1)}
                    >
                      ›
                    </button>
                    <div className="gallery-dots">
                      {selectedProject.details.images.map((_, index) => (
                        <button
                          key={index}
                          className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <h2 className="modal-title">{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Overview</h3>
                <p>{selectedProject.details.overview}</p>
              </div>
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
