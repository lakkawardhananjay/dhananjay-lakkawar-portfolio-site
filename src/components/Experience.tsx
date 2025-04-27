
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              <ExperienceItem 
                title="Freelancer"
                company="VG Software"
                period="2024–Present"
                isLeft={true}
                responsibilities={[
                  "Lead cloud deployments on GCP and AWS platforms",
                  "Develop and optimize CI/CD pipelines for software delivery",
                  "Scale AI products and applications for production environments",
                  "Implement cloud cost optimization strategies"
                ]}
              />
              
              <ExperienceItem 
                title="GDG Organizer & Cloud Team Lead"
                company="Google Developer Group-DYPSN"
                period="2023–Present"
                isLeft={false}
                responsibilities={[
                  "Organize technical events and workshops focusing on cloud technologies",
                  "Grow community membership from 90 to 461 members",
                  "Foster collaborations with other tech communities and companies",
                  "Mentor junior developers and students in cloud and DevOps practices"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  isLeft, 
  responsibilities 
}: { 
  title: string; 
  company: string; 
  period: string; 
  isLeft: boolean; 
  responsibilities: string[] 
}) => {
  return (
    <div className={`relative ${isLeft ? 'md:pr-8' : 'md:pl-8'} md:w-1/2 ${isLeft ? 'md:ml-0' : 'md:ml-auto'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-auto md:right-0 top-6 transform translate-x-0 md:translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white z-10"></div>
      
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-blue-800">{title}</h3>
              <p className="text-gray-600">{company}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
              {period}
            </span>
          </div>
          
          <ul className="mt-4 space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
