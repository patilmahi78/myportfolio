import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

interface ExtendedProjectsGridProps {
  projects?: Project[];
}

// Using the same default projects from ProjectsGrid
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "VPC Monitoring with Flow Logs",
    description:
      "Set up AWS VPC Flow Logs for real-time network traffic monitoring and analysis, enhancing security and troubleshooting through CloudWatch Logs.",
    technologies: ["VPC", "EC2", "CloudWatch"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_vpc-monitoring-with-flow-logs-activity-7321548259896766464-FQ2v?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "2",
    title: "CI/CD Pipeline Using AWS CodePipeline",
    description:
      "Automated GitHub repo deployment to EC2 using CodeBuild & CodeDeploy.",
    technologies: ["CodePipeline", "EC2", "GitHub", "CI/CD"],
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    link: "https://community.nextwork.org/c/celebrations/excited-to-announce-completion-of-the-7-day-devops-challenge-with-nextwork-community",
  },
  {
    id: "3",
    title: "Visualize Data with Quicksight",
    description:
      "Created interactive dashboards and visualizations from S3 data, delivering insights through charts and automated reports for data-driven decision-making.",
    technologies: ["Amazon S3", "Quicksight"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_visualize-data-with-quicksight-activity-7320207873555210240-K5w1?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "4",
    title: "VPC Endpoint for S3 Access",
    description:
      "Created private access from EC2 to S3 using VPC endpoint with restricted bucket policy.",
    technologies: ["VPC", "Endpoint", "S3", "Security"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_vpc-endpoints-activity-7321582760026890243-abL4?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "5",
    title: "Visualize a Relational Database",
    description:
      "Deployed and managed a relational database on Amazon RDS, populated with structured data. Leveraged data visualization tools Quicksight to generate actionable insights.",
    technologies: ["RDS", "VPC", "Quicksight", "IAM"],
    image:
      "https://images.unsplash.com/photo-1623282033815-40b05d96c903?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_visualize-a-relational-database-activity-7322232968754647040-Pub5?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "6",
    title: "Connect a Web App to Amazon Aurora",
    description:
      "Built a scalable web application by integrating an EC2-hosted frontend with an Amazon Aurora relational database within a VPC.",
    technologies: ["EC2", "Amazon Aurora", "Relational Database", "CLI"],
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_connect-a-web-app-with-aurora-activity-7322249247200870400-ZXDt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "7",
    title: "VPC Peering in AWS",
    description:
      "Established secure and private communication between two VPCs using VPC Peering, enabling seamless data transfer without traversing the public internet.",
    technologies: ["EC2", "VPC"],
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    link: "https://www.linkedin.com/posts/mahesh-patil0555_vpc-peering-activity-7321482631013982210-D8xg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACYY6JEB2Tdpj1xZqgtjTJWHJxhaXbFm3Yc",
  },
  {
    id: "8",
    title: "AWS Lambda Functions",
    description:
      "Implemented serverless computing with AWS Lambda for event-driven applications, reducing infrastructure management overhead and improving scalability.",
    technologies: ["Lambda", "Serverless", "API Gateway"],
    image:
      "https://images.unsplash.com/photo-1642059893618-c9b49053b375?w=800&q=80",
    link: "#",
  },
  {
    id: "9",
    title: "AWS CloudFormation Templates",
    description:
      "Created infrastructure as code using CloudFormation templates to automate the deployment of AWS resources, ensuring consistent and repeatable infrastructure.",
    technologies: ["CloudFormation", "IaC", "AWS CLI"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    link: "#",
  },
];

const ExtendedProjectsGrid: React.FC<ExtendedProjectsGridProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section className="py-20 w-full bg-[#e7e5e4] min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Cloud Projects
          </h1>
          <div className="w-20 h-1 bg-[#F4A261] mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Explore my complete portfolio of cloud engineering projects
            showcasing various AWS services and infrastructure solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.image}
                projectUrl={project.link}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/"
            className="px-6 py-3 bg-[#F4A261] text-black font-medium rounded-md hover:bg-opacity-80 transition-all duration-300 flex items-center"
          >
            Back to Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtendedProjectsGrid;
