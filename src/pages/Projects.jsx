import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Currency Converter",

    description:
      "Modern JavaScript currency converter with real-time exchange interface and responsive UI.",

    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://currencyconvertort25.netlify.app/",

    github:
      "https://github.com/prashant05-09/Currency_Convertor.git"
  },

  {
    title: "Vegetable Store",

    description:
      "Responsive Bootstrap vegetable store website with attractive product layout and modern design.",

    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://vegetablestoree26.netlify.app/",

    github:
      "https://github.com/prashant05-09/vegetablestore.git"
  },

  {
    title: "Routing App",

    description:
      "React routing application with multiple pages, navigation system and responsive user interface.",

    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://prashant-routing-app.netlify.app/",

    github:
      "https://github.com/prashant05-09/routing-app.git"
  },

  {
    title: "Portfolio Website React",

    description:
      "Modern React.js portfolio website with animations, responsive design and professional UI/UX.",

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://portfoliowebsitedk.netlify.app/",

    github:
      "https://github.com/prashant05-09/Portfolio_Website_1.git"
  },

  {
    title: "Image Slider JavaScript",

    description:
      "Interactive JavaScript image slider with smooth transitions and responsive gallery layout.",

    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://image-slider-html-css-js.netlify.app/",

    github:
      "https://github.com/prashant05-09/Image_Slider_js.git"
  },

  {
    title: "Burger Webpage",

    description:
      "Responsive burger restaurant landing page using HTML, CSS and Bootstrap framework.",

    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://burger-webpage.netlify.app/",

    github:
      "https://github.com/prashant05-09/Burger_Webpage.git"
  },

  {
    title: "Portfolio HTML CSS",

    description:
      "Creative portfolio website built using pure HTML and CSS with responsive design.",

    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop",

    live:
      "https://portfolio-htm-css.netlify.app/",

    github:
      "https://github.com/prashant05-09/Portfolio_HTML_CSS.git"
  }

];

export default function Projects() {
  return (
    <section
      className="min-vh-100 py-5"
      style={{
        background: "#0f172a",
        color: "#fff",
        paddingTop: "120px"
      }}
    >

      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            paddingTop: "10px"
          }}
        >
          <h1 className="display-4 fw-bold">My<span className="text-info">{" "}Projects</span></h1>

          <p className="text-light-emphasis fs-5 mt-3">Some of my modern and responsive web development projects.</p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="card border-0 h-100 overflow-hidden shadow-lg"
                style={{
                  background: "#1e293b",
                  borderRadius: "25px",
                  transition: "0.4s"
                }}
              >

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{
                      height: "230px",
                      objectFit: "cover",
                      transition: "0.5s"
                    }}
                  />
                </div>

                <div className="card-body p-2 d-flex flex-column">
                  <h3 className="fw-bold mb-2 text-info">{project.title}</h3>

                  <p className="text-light-emphasis"
                    style={{
                      lineHeight: "1.2"
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="d-flex gap-3 mt-auto pt-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-fill"
                    >
                      <button
                        className="btn btn-info w-100 fw-semibold"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="ms-2" />
                      </button>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-fill"
                    >
                      <button
                        className="btn btn-outline-info w-100 fw-semibold"
                      >
                        GitHub
                        <FaGithub className="ms-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}