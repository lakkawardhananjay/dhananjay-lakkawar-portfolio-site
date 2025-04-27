
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const certifications = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer (ACE)",
    issuer: "Google Cloud",
    icon: "/placeholder.svg"
  },
  {
    name: "Google Cloud Certified Cloud Digital Leader (CDL)",
    issuer: "Google Cloud",
    icon: "/placeholder.svg"
  },
  {
    name: "GitHub Foundations Certification",
    issuer: "GitHub",
    icon: "/placeholder.svg"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index}
              name={cert.name}
              issuer={cert.issuer}
              icon={cert.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({ 
  name, 
  issuer, 
  icon 
}: { 
  name: string; 
  issuer: string; 
  icon: string 
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 overflow-hidden">
          {icon ? (
            <img src={icon} alt={name} className="w-10 h-10 object-contain" />
          ) : (
            <CircleCheck className="w-8 h-8 text-blue-600" />
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-blue-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{issuer}</p>
      </CardContent>
    </Card>
  );
};

export default Certifications;
