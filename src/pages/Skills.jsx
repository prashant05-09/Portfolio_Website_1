import React from "react";
import { motion } from "framer-motion";
export default function Skills() {

  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#ff5722"
    },

    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#2196f3"
    },

    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#f7df1e"
    },

    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952b3"
    },

    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61dafb"
    },

    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#00758f"
    },

    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      color: "#6db33f"
    },

    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47a248"
    }
  ];

  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden"
      }}
    >

      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="fw-bold text-white"
            style={{
              fontSize: "clamp(2rem,4.5vw,3.5rem)"
            }}
          >
            My
            <span className="text-info">
              {" "}Skills
            </span>
          </h1>

          <p
            className="text-light-emphasis mx-auto mt-2"
            style={{
              maxWidth: "700px",
              lineHeight: "1.8",
              fontSize: "17px"
            }}
          >
            Technologies and tools I use
            to build modern responsive
            websites and full stack projects.
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              className="col-lg-3 col-md-4 col-sm-6"
              key={index}
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}
            >
              <div
                className="text-center h-100 position-relative overflow-hidden"
                style={{
                  background:"rgba(255,255,255,0.05)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius: "25px",
                  padding: "20px 10px",
                  backdropFilter: "blur(12px)",
                  boxShadow:"0 10px 35px rgba(0,0,0,0.35)",
                  transition: "0.4s"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "140px",
                    height: "140px",
                    background: skill.color,
                    filter: "blur(90px)",
                    opacity: "0.18",
                    top: "-50px",
                    right: "-50px"
                  }}
                ></div>

                <div
                  className="mx-auto d-flex align-items-center justify-content-center rounded-circle mb-4"
                  style={{
                    width: "110px",
                    height: "110px",
                    background:"rgba(255,255,255,0.08)",
                    border:`3px solid ${skill.color}`,
                    boxShadow:`0 0 25px ${skill.color}`,
                    transition: "0.4s"
                  }}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300
                    }}
                    style={{
                      width: "65px",
                      height: "65px",
                      objectFit: "contain",
                      cursor: "pointer"
                    }}
                  />
                </div>
                <h3
                  className="fw-bold text-white"
                  style={{
                    fontSize: "20px",
                    letterSpacing: "1px"
                  }}
                >
                  {skill.name}
                </h3>
                <p
                  className="text-light-emphasis mt-1"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6"
                  }}
                >
                  Modern responsive UI/UX
                  development with clean
                  and interactive experiences.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}