import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Cloud, Terminal, Code } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  resumeUrl?: string;
  profileImage?: string;
}

const HeroSection = ({
  name = "Mahesh Patil",
  title = "Cloud Engineer |  DevOps Enthusiast",
  resumeUrl = "https://drive.google.com/file/d/1QjKmBEuKczqIHjzX2GAtrFJLPuY72YoE/view?usp=drive_link",
  profileImage = "https://i.postimg.cc/dQTqCJ2D/profilepic-recent-removebg-preview.jpg",
}: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-[700px] w-full flex items-center to-purple-700 py-16 px-4 md:px-8 lg:px-16 from-[#c1bdb4]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg text-orange-300 mb-2 font-semibold"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="text-orange-300 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              variants={itemVariants}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              variants={itemVariants}
            >
              Passionate about cloud infrastructure, automation, and building
              scalable solutions using AWS services.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
                onClick={() => window.open(resumeUrl, "_blank")}
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 mt-10"
              variants={containerVariants}
            >
              <motion.div
                className="p-3 bg-muted rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
              >
                <Cloud className="h-6 w-6 text-orange-400" />
              </motion.div>

              <motion.div
                className="p-3 bg-muted rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
              >
                <Terminal className="h-6 w-6 text-orange-400" />
              </motion.div>

              <motion.div
                className="p-3 bg-muted rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
              >
                <Code className="h-6 w-6 text-orange-400" />
              </motion.div>

              <motion.div
                className="p-3 bg-muted rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="h-6 w-6 text-orange-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8.851 19.944c-2.953.555-5.342-.861-5.889-3.55-.548-2.689.852-5.046 3.805-5.6l1.557-.295 1.641 8.132-1.114.313zm6.462-1.774c-2.952.555-5.342-.86-5.889-3.55-.548-2.689.851-5.045 3.804-5.599l1.557-.295 1.641 8.132-1.113.312zm6.535-9.083l-1.557.295-1.641-8.132 1.113-.312c2.953-.555 5.342.86 5.89 3.55.547 2.688-.852 5.045-3.805 5.599z" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full blur-md opacity-40 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-orange-500 relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
