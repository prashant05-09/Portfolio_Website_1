import React from "react";

import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaInstagram, FaFacebookF, FaWhatsapp, FaFacebook }

  from "react-icons/fa";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {

  return (

    <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        color: "#fff",
        paddingTop: "100px"
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          background: "#38bdf8",
          filter: "blur(150px)",
          opacity: "0.25",
          top: "-100px",
          left: "-100px",
          borderRadius: "50%"
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "#0ea5e9",
          filter: "blur(140px)",
          opacity: "0.2",
          bottom: "-100px",
          right: "-100px",
          borderRadius: "50%"
        }}
      ></div>

      <div className="container position-relative">

        <div className="row align-items-center">

          <motion.div className="col-lg-6 text-center text-lg-start" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>

            <div className="d-inline-block px-4 py-2 rounded-pill mb-5"
              style={{
                background: "rgba(56,189,248,0.15)",
                border: "1px solid rgba(56,189,248,0.3)",
                color: "#38bdf8",
                fontWeight: "600"
              }}
            >
              Welcome To My Portfolio
            </div>

            <h1 className="fw-bold" style={{ fontSize: "clamp(4rem,5vw,4rem)", lineHeight: "1.2" }}>Hi, I'm<span className="text-info">{" "}Prashant Dike</span></h1>

            <div className="fw-bold text-info my-4" style={{ fontSize: "clamp(1.5rem,2vw,2.5rem)"}}>
              <TypeAnimation sequence={["Frontend Developer", 2000, "React Developer", 2000, "Full Stack Developer", 2000, "UI/UX Designer", 2000,]} speed={50} repeat={Infinity} cursor={false} />
            </div>

            <p className="lead text-light-emphasis" style={{ maxWidth: "600px", lineHeight: "1.8" }}>
              Passionate React.js Developer creating modern, responsive and user-friendly websites with attractive UI/UX designs and smooth web experiences.
            </p>

            <div className="d-flex gap-3 mt-5 flex-wrap justify-content-center justify-content-lg-start">
              <a href="/projects">
                <button className="btn btn-info btn-lg px-4 py-3 fw-semibold shadow">
                  View Projects
                  <FaArrowRight className="ms-1" />
                </button>
              </a>

              <a href="/PRASHANT_RESUME.pdf" target="_blank" rel="noreferrer">
                <button className="btn btn-outline-info btn-lg px-4 py-3 fw-semibold">
                  Download CV
                  <FaDownload className="ms-2" />
                </button>
              </a>

            </div>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <a href="https://github.com/prashant05-09" target="_blank" rel="noreferrer" className="text-decoration-none">

                <div className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#111827",
                    color: "#ffffff",
                    fontSize: "24px",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 20px rgba(255,255,255,0.4)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    transform: "scale(1)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(255,255,255,0.9)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(255,255,255,0.4)";
                  }}
                >
                  <FaGithub />
                </div>
              </a>

              <a href="https://www.linkedin.com/in/prashant-dike-68396a39b" target="_blank" rel="noreferrer" className="text-decoration-none">

                <div className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#111827",
                    color: "#0A66C2",
                    fontSize: "24px",
                    border: "2px solid #0A66C2",
                    boxShadow: "0 0 20px rgba(10,102,194,0.5)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    transform: "scale(1)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(10,102,194,0.9)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(10,102,194,0.5)";
                  }}
                >
                  <FaLinkedin />
                </div>
              </a>

              <a href="https://wa.me/918767455741" target="_blank" rel="noreferrer" className="text-decoration-none">

                <div className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#111827",
                    color: "#25D366",
                    fontSize: "24px",
                    border: "2px solid #25D366",
                    boxShadow: "0 0 20px rgba(37,211,102,0.5)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    transform: "scale(1)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(37,211,102,0.9)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(37,211,102,0.5)";
                  }}
                >
                  <FaWhatsapp />
                </div>
              </a>

              <a href="https://www.instagram.com/dkprashant05/" target="_blank" rel="noreferrer" className="text-decoration-none">

                <div className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#111827",
                    color: "#E1306C",
                    fontSize: "24px",
                    border: "2px solid #E1306C",
                    boxShadow: "0 0 20px rgba(225,48,108,0.5)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    transform: "scale(1)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(225,48,108,0.9)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(225,48,108,0.5)";
                  }}
                >
                  <FaInstagram />
                </div>
              </a>

              <a href="https://www.facebook.com/prashant.dike.359/" target="_blank" rel="noreferrer" className="text-decoration-none">

                <div className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#111827",
                    color: "#1877F2",
                    fontSize: "24px",
                    border: "2px solid #1877F2",
                    boxShadow: "0 0 20px rgba(24,119,242,0.5)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    transform: "scale(1)"
                  }}

                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(24,119,242,0.9)";
                  }}

                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 20px rgba(24,119,242,0.5)";
                  }}
                >
                  <FaFacebook />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div className="col-lg-6 text-center mt-5 mt-lg-0" initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>

            <div className="position-relative d-inline-block">

              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
                  filter: "blur(60px)",
                  opacity: "0.4",
                  borderRadius: "50%"
                }}
              ></div>

              <img src="/profile.jpg" alt="profile" className="img-fluid rounded-circle border border-5 border-info shadow-lg position-relative"
                style={{
                  width: "480px",
                  height: "480px",
                  objectFit: "cover",
                  maxWidth: "100%"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}