import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="fw-bold text-white"
            style={{
              fontSize: "clamp(2.8rem,4vw,3rem)"
            }}
          >
            Contact
            <span className="text-info">
              {" "}Me
            </span>
          </h1>
          <p
            className="text-light-emphasis mt-2 mx-auto"
            style={{
              maxWidth: "500px",
              lineHeight: "1.2",
              fontSize: "17px"
            }}
          >
            Have a project idea or want to connect? Feel free to contact me anytime.
          </p>
        </motion.div>

        <div className="row g-4 align-items-center">
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="p-4 p-lg-5 h-100 position-relative overflow-hidden"
              style={{
                background: "#0f172a",
                border: "2px solid rgba(56,189,248,0.25)",
                color: "#fff",
                padding: "15px",
                borderRadius: "16px",
                transition: "0.4s"
              }}
            >

              <div
                style={{
                  position: "absolute",
                  width: "180px",
                  height: "180px",
                  background: "#38bdf8",
                  filter: "blur(100px)",
                  opacity: "0.18",
                  top: "-60px",
                  right: "-60px"
                }}
              ></div>

              <h2 className="fw-bold mb-4" style={{ color: "#38bdf8", fontSize: "2rem" }}>Let's Connect 💬</h2>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "55px",
                    height: "55px",
                    background: "#1e293b",
                    color: "#38bdf8",
                    fontSize: "22px"
                  }}
                >
                  <FaEnvelope />
                </div>
                <div>
                  <h6 className="text-white mb-1">Email</h6>
                  <p className="text-light-emphasis m-0">prashantdike1@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "55px",
                    height: "55px",
                    background: "#1e293b",
                    color: "#38bdf8",
                    fontSize: "22px"
                  }}
                >
                  <FaPhoneAlt />
                </div>

                <div>
                  <h6 className="text-white mb-1">Phone</h6>
                  <p className="text-light-emphasis m-0">+91 8767455741</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-5">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "55px",
                    height: "55px",
                    background: "#1e293b",
                    color: "#38bdf8",
                    fontSize: "22px"
                  }}
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h6 className="text-white mb-1">Location</h6>
                  <p className="text-light-emphasis m-0">Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="d-flex gap-3 flex-wrap">

                <a href="https://github.com/prashant05-09" target="_blank" rel="noreferrer" className="text-decoration-none" >
                  <div className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#111827",
                      color: "#fff",
                      fontSize: "24px",
                      border: "2px solid #ffffff",
                      boxShadow: "0 0 20px #ffffff50",
                      transition: "0.4s",
                      cursor: "pointer"
                    }}
                  >
                    <FaGithub />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/prashant-dike-68396a39b" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#111827",
                      color: "#0A66C2",
                      fontSize: "24px",
                      border: "2px solid #0A66C2",
                      boxShadow: "0 0 20px #0A66C250",
                      transition: "0.4s",
                      cursor: "pointer"
                    }}
                  >
                    <FaLinkedin />
                  </div>
                </a>

                <a href="https://wa.me/918767455741" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#111827",
                      color: "#25D366",
                      fontSize: "24px",
                      border: "2px solid #25D366",
                      boxShadow: "0 0 20px #25D36650",
                      transition: "0.4s",
                      cursor: "pointer"
                    }}
                  >
                    <FaWhatsapp />
                  </div>
                </a>

                <a href="https://www.instagram.com/dkprashant05/" target="_blank" rel="noreferrer" className="text-decoration-none">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#111827",
                      color: "#E1306C",
                      fontSize: "24px",
                      border: "2px solid #E1306C",
                      boxShadow: "0 0 20px #E1306C50",
                      transition: "0.4s",
                      cursor: "pointer"
                    }}
                  >
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-3 p-lg-4"
              style={{
                background:"rgba(255,255,255,0.05)",
                border:"1px solid rgba(255,255,255,0.08)",
                borderRadius: "30px",
                backdropFilter: "blur(12px)",
                boxShadow:"0 10px 40px rgba(0,0,0,0.35)"
              }}
            >
              <div className="mb-4">
                <label className="form-label text-white fw-semibold">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-control"
                  required
                  style={{
                    background: "#1e293b",
                    border: "none",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px"
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-white fw-semibold">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control"
                  required
                  style={{
                    background: "#1e293b",
                    border: "none",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px"
                  }}
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-white fw-semibold">Message</label>

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="form-control"
                  required
                  style={{
                    background: "#1e293b",
                    border: "none",
                    color: "#fff",
                    padding: "14px",
                    borderRadius: "14px",
                    resize: "none"
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-info btn-lg fw-semibold px-3 py-2"
                style={{
                  borderRadius: "14px"
                }}
              >
                Send Message
                <FaPaperPlane className="ms-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}