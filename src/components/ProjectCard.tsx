import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({
  title = "VPC Monitoring with Flow Logs",
  description = "Set up AWS VPC Flow Logs for real-time network traffic monitoring and analysis, enhancing security and troubleshooting through CloudWatch Logs.",
  technologies = ["VPC", "EC2", "CloudWatch"],
  imageUrl = "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
  projectUrl = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-card hover:border-primary/20 transition-all duration-300 shadow-md hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-foreground">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-secondary/30 text-secondary-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          <Button
            variant="outline"
            className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => window.open(projectUrl, "_blank")}
          >
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
