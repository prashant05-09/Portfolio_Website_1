import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Currency Converter',
      description: 'A JavaScript-based currency converter application.',
      link: 'https://currencyconvertort25.netlify.app/'
    },
    {
      title: 'Vegetable Webpage',
      description: 'A Bootstrap webpage showcasing vegetable products.',
      link: 'https://vegetablestoree26.netlify.app/'
    },
    {
      title: 'Routing App',
      description: 'A react-based on routing app showing the product details and contact.',
      link: 'https://prashant-routing-app.netlify.app/'
    }
  ]

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
