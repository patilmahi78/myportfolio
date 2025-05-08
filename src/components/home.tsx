import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";

const Home = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Sample skills data
  const devopsSkills = [
    "AWS",
    "Docker",
    "Basics of Terraform & Kubernetes",
    "Terraform",
    "Git, Jenkins, SonarQube",
    "CI/CD Pipelines",
    "EC2, S3, IAM, CloudFront",
  ];

  const programmingSkills = ["Bash", "YAML"];

  const infrastructureSkills = [
    "VPC, Subnets, Routing",
    "CloudWatch",
    "CloudFormation",
    "Cost Optimization",
    "Security Groups / NACLs",
  ];

  // Sample work experience data
  const workExperience = [
    {
      company: "Nextwork",
      role: "Nextwork community member",
      dates: "Jun 2024 – Present",
      link: "https://community.nextwork.org/feed",
    },
    {
      company: "Career Break",
      role: "On Break",
      dates: "Sep 2022 – May 2024",
      link: "#",
    },
    {
      company: "Tata Consultancy Services",
      role: "Junior Cloud Engineer",
      dates: "Jan 2019 – Aug 2022",
      link: "#",
    },
  ];

  // Sample certifications data
  const certifications = [
    {
      name: "AWS Exam Prep for AWS certified Solution Architect - Associate (SAA-C03)",
      date: "March 2025",
      link: "https://drive.google.com/file/d/1Dwx_P7tnC982roCQzgjDn5WDIidxWFEg/view?usp=sharing",
    },
    {
      name: "FORAGE AWS APAC - Solutions Architecture Job Simulation",
      date: "April 2025",
      link: "https://drive.google.com/file/d/1U_4kVE07z0wgRxdRTK3TpyQUE1ee-WxC/view?usp=drive_link",
    },
    {
      name: "AWS Cloud Quest: Cloud Practitioner",
      date: "March 2025",
      link: "https://www.credly.com/badges/5ff25be8-1ced-4137-8727-fac79969bbed/public_url",
    },
    {
      name: "AWS Educate Introduction to Cloud 101",
      date: "March 2025",
      link: "https://www.credly.com/badges/99bec639-de1b-426e-8ba5-2de3d7029167/public_url",
    },
    {
      name: "Git - Kodekloud",
      date: "Sep 2022",
      link: "https://kodekloud.com/certificate-verification/7F0BB9D755-7F05B3F0C5-7F0586C6AD/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            About Me
          </motion.h2>

          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a Junior Cloud Engineer with 2+ years of experience deploying
              and managing cloud infrastructure using AWS services. I specialize
              in EC2, IAM, S3, VPC, CI/CD pipelines, and serverless
              applications. I'm passionate about cloud security, automation, and
              solving real-world problems through infrastructure as code. [
              Overall 4 years of experience ]
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-md"
                >
                  <h4 className="text-lg font-medium mb-2">{cert.name}</h4>
                  <p className="text-gray-400 mb-4">{cert.date}</p>
                  <a
                    href={cert.link}
                    className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Cloud Projects
          </motion.h2>

          <ProjectsGrid />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DevOps & Cloud Tools */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                DevOps & Cloud Tools
              </h3>
              <ul className="space-y-2">
                {devopsSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programming & Scripting */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Programming & Scripting
              </h3>
              <ul className="space-y-2">
                {programmingSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Infrastructure & Monitoring */}
            <motion.div
              className="bg-gray-700 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Infrastructure & Monitoring
              </h3>
              <ul className="space-y-2">
                {infrastructureSkills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience & Education Section */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Work Experience & Education
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-medium mb-1">{job.company}</h4>
                    <p className="text-orange-500 font-medium mb-2">
                      {job.role}
                    </p>
                    <p className="text-gray-400 mb-4">{job.dates}</p>
                    <a
                      href={job.link}
                      className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors"
                    >
                      Details
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-medium mb-1">
                  B.E. Electronics and Communication Engineering
                </h4>
                <p className="text-orange-500 font-medium mb-2">VTU</p>
                <p className="text-gray-400 mb-4">2017</p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md transition-colors"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Contact Me
          </motion.h2>

          <motion.div
            className="bg-gray-700 p-8 rounded-lg shadow-lg text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="mb-8">
              <p className="text-lg mb-2">
                <span className="text-orange-500 mr-2">📧</span>{" "}
                patilmahesh3338@gmail.com
              </p>
              <p className="text-lg mb-2">
                <span className="text-orange-500 mr-2">📍</span> Hyderabad,
                Telangana India
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/mahesh-patil0555/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="mailto:patilmahesh3338@gmail.com"
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 bg-gray-900 border-t border-gray-800">
        <p>© {new Date().getFullYear()} - All rights reserved</p>
        <p className="mt-2">Designed with 💻 by Mahesh Patil</p>
      </footer>
    </div>
  );
};

export default Home;
