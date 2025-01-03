import React from 'react';

function Portfolio() {
  const portfolioData = [
    {
      title: 'Software Development',
      description:
        'We create tailored software solutions to streamline operations and enhance business efficiency. Our team specializes in desktop, web, and mobile applications.',
      images: ['software1.jpg', 'software2.jpg'],
      projects: [
        { name: 'Inventory Management System', image: 'project1.jpg' },
        { name: 'CRM Application', image: 'project2.jpg' },
      ],
      templates: [
        { name: 'E-commerce Template', image: 'template1.jpg' },
        { name: 'Portfolio Template', image: 'template2.jpg' },
      ],
    },
    {
      title: 'Cybersecurity',
      description:
        'Protect your business from digital threats with our advanced cybersecurity solutions, including threat monitoring, vulnerability assessments, and secure systems implementation.',
      images: ['cybersecurity1.jpg', 'cybersecurity2.jpg'],
    },
    {
      title: 'Digital Transformation',
      description:
        'Empowering businesses to thrive in the digital era by modernizing their operations and integrating cutting-edge technology.',
      images: ['digital1.jpg', 'digital2.jpg'],
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>Explore our services, projects, and templates.</p>
      {portfolioData.map((service, index) => (
        <div className="portfolio-section" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {service.images && (
            <div className="portfolio-images">
              {service.images.map((image, i) => (
                <img key={i} src={image} alt={`${service.title} ${i + 1}`} />
              ))}
            </div>
          )}
          {service.projects && (
            <div>
              <h4>Featured Projects</h4>
              <div className="portfolio-projects">
                {service.projects.map((project, i) => (
                  <div key={i} className="portfolio-card">
                    <img src={project.image} alt={project.name} />
                    <h5>{project.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
          {service.templates && (
            <div>
              <h4>Website Templates</h4>
              <div className="portfolio-templates">
                {service.templates.map((template, i) => (
                  <div key={i} className="portfolio-card">
                    <img src={template.image} alt={template.name} />
                    <h5>{template.name}</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
