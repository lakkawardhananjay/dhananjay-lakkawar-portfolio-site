
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "On-Premise LLM Deployment",
    description: "Deployed large language models on local infrastructure optimized for CPU environments, enabling private AI capabilities with reduced operational costs.",
    technologies: ["Python", "Docker", "CUDA", "Hugging Face", "LLM"],
  },
  {
    title: "Jenkins CI/CD Pipeline with Testing",
    description: "Implemented comprehensive CI/CD pipeline with automated testing, code quality checks, and deployment stages for reliable software delivery.",
    technologies: ["Jenkins", "Docker", "GitHub", "Shell", "JUnit"],
  },
  {
    title: "Advanced DevOps Pipeline",
    description: "Built end-to-end DevOps solution with infrastructure as code, monitoring, alerting, and auto-scaling capabilities for high-availability applications.",
    technologies: ["Kubernetes", "Terraform", "Prometheus", "Grafana"],
  },
  {
    title: "Effortless 3-Tier Deployment on AWS",
    description: "Developed infrastructure as code templates for quick deployment of scalable three-tier architectures on AWS cloud platform.",
    technologies: ["AWS", "CloudFormation", "EC2", "RDS", "ELB"],
  },
  {
    title: "Slide Studio – AI-Powered Presentation Tools",
    description: "Created AI tool that automatically generates professional presentation slides from text input, streamlining content creation process.",
    technologies: ["Python", "OpenAI API", "React", "GCP"],
  },
  {
    title: "Cloud-Powered Data Analytics Pipeline",
    description: "Designed data processing pipeline with real-time analytics capabilities, handling large datasets efficiently using cloud-native services.",
    technologies: ["GCP", "BigQuery", "DataFlow", "Pub/Sub", "Looker"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies 
}: { 
  title: string; 
  description: string; 
  technologies: string[] 
}) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Projects;
