
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (Computer Science)",
    institution: "Dr. D.Y. Patil Pratishthan's College of Engineering",
    period: "2020-2024",
    grade: "CGPA: 7.1/10"
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Shri Sai Polytechnic",
    period: "2017-2020",
    grade: "83.94%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <EducationCard 
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                period={edu.period}
                grade={edu.grade}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ 
  degree, 
  institution, 
  period, 
  grade 
}: { 
  degree: string; 
  institution: string; 
  period: string; 
  grade: string 
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-1">{degree}</h3>
            <p className="text-gray-700 mb-2">{institution}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{period}</span>
              <span className="font-medium text-gray-600">{grade}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
