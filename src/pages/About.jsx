import React from "react";
import {FaReact,FaLaptopCode,FaMobileAlt,FaDatabase} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-vh-100 d-flex align-items-center py-5"
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
            paddingTop: "20px"
          }}
        >
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(2.8rem,4vw,3.5rem)",
              lineHeight: "1",
              color: "#ffffff",
              marginBottom: "20px"
            }}
          >
            About
            <span className="text-info">
              {" "}Me
            </span>
          </h1>
          <p className="text-light-emphasis fs-5 mt-3">
            Passionate developer focused on building modern, responsive and user-friendly web applications.
          </p>
        </motion.div>

        <div className="row align-items-center g-5">
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="p-4 rounded-4 shadow-lg"
              style={{
                background: "#1e293b"
              }}
            >
              <h2 className="fw-bold text-info mb-4">
                Who Am I ?
              </h2>
              <p className="fs-5 text-light">
                I am a motivated React.js and Full Stack Developer with strong skills in HTML,CSS, JavaScript, Bootstrap, React.js,MongoDB, MySQL and Spring Boot.
              </p>
              <p className="fs-5 text-light">
                I enjoy creating attractive UI/UX designs,responsive layouts and modern web applications that provide great user experience.
              </p>

              <div className="mt-4">
                <a className="btn btn-info btn-lg px-4" href="/PRASHANT_RESUME.pdf" download="PRASHANT_RESUME.pdf">Download Resume</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="row g-4">
              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 text-center h-100 shadow position-relative overflow-hidden"
                  style={{
                    background: "#1e293b",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid rgba(56,189,248,0.15)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(56,189,248,0.35)";
                    e.currentTarget.style.border =
                      "1px solid #38bdf8";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#1e293b,#0f172a)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "";
                    e.currentTarget.style.border =
                      "1px solid rgba(56,189,248,0.15)";
                    e.currentTarget.style.background =
                      "#1e293b";
                  }}
                >
                  <FaReact size={55} className="text-info mb-3"/>
                  <h4 className="fw-bold">Frontend</h4>
                  <p className="text-light-emphasis">
                    Modern responsive websites using React.js & Bootstrap.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 text-center h-100 shadow position-relative overflow-hidden"
                  style={{
                    background: "#1e293b",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid rgba(56,189,248,0.15)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(56,189,248,0.35)";
                    e.currentTarget.style.border =
                      "1px solid #38bdf8";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#1e293b,#0f172a)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "";
                    e.currentTarget.style.border =
                      "1px solid rgba(56,189,248,0.15)";
                    e.currentTarget.style.background =
                      "#1e293b";
                  }}
                >

                  <FaLaptopCode size={55} className="text-info mb-3"/>
                  <h4 className="fw-bold">Clean Code</h4>

                  <p className="text-light-emphasis">Writing reusable and maintainable clean code.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 text-center h-100 shadow position-relative overflow-hidden"
                  style={{
                    background: "#1e293b",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid rgba(56,189,248,0.15)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(56,189,248,0.35)";
                    e.currentTarget.style.border =
                      "1px solid #38bdf8";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#1e293b,#0f172a)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "";
                    e.currentTarget.style.border =
                      "1px solid rgba(56,189,248,0.15)";
                    e.currentTarget.style.background =
                      "#1e293b";
                  }}
                >
                  <FaMobileAlt size={55} className="text-info mb-3"/>
                  <h4 className="fw-bold">Responsive</h4>

                  <p className="text-light-emphasis">Mobile-friendly layouts for all devices.</p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="p-4 rounded-4 text-center h-100 shadow position-relative overflow-hidden"
                  style={{
                    background: "#1e293b",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    border: "1px solid rgba(56,189,248,0.15)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.03)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(56,189,248,0.35)";
                    e.currentTarget.style.border =
                      "1px solid #38bdf8";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#1e293b,#0f172a)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "";
                    e.currentTarget.style.border =
                      "1px solid rgba(56,189,248,0.15)";
                    e.currentTarget.style.background =
                      "#1e293b";
                  }}
                >
                  <FaDatabase size={55} className="text-info mb-3"/>
                  <h4 className="fw-bold">Backend</h4>

                  <p className="text-light-emphasis">Experience with databases and backend technologies.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}