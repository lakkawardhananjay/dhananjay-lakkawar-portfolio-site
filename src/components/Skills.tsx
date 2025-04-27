
import { 
  Cloud, 
  Docker, 
  Kubernetes, 
  Github, 
  Prometheus, 
  Grafana, 
  Database, 
  GraduationCap
} from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <SkillCategory 
            title="Cloud Platforms" 
            icon={<Cloud className="w-8 h-8 text-blue-500" />}
            skills={["GCP", "AWS"]}
          />
          
          <SkillCategory 
            title="DevOps Tools" 
            icon={<Docker className="w-8 h-8 text-blue-500" />}
            skills={[
              "Docker", 
              "Kubernetes", 
              "GitHub Actions", 
              "Prometheus", 
              "Grafana", 
              "Terraform", 
              "OpenTofu", 
              "Jenkins"
            ]}
          />
          
          <SkillCategory 
            title="Programming" 
            icon={<Github className="w-8 h-8 text-blue-500" />}
            skills={["Go", "Python", "Java", "Shell Scripting"]}
          />
          
          <SkillCategory 
            title="Database" 
            icon={<Database className="w-8 h-8 text-blue-500" />}
            skills={["MySQL", "PostgreSQL", "MongoDB"]}
          />
          
          <SkillCategory 
            title="AI/ML" 
            icon={<GraduationCap className="w-8 h-8 text-blue-500" />}
            skills={[
              "LLM Deployment", 
              "Generative AI", 
              "Transformers", 
              "DICOM Processing", 
              "NLP"
            ]}
          />
          
          <SkillCategory 
            title="Soft Skills" 
            icon={<Kubernetes className="w-8 h-8 text-blue-500" />}
            skills={[
              "Communication", 
              "Leadership", 
              "Collaboration", 
              "Problem-Solving"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[] 
}) => {
  return (
    <div className="skill-card hover:border-blue-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
