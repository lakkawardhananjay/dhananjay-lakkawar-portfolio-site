import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const certifications = [
  {
    name: "Google Cloud Certified Associate Cloud Engineer (ACE)",
    issuer: "Google Cloud",
    icon: "/lovable-uploads/ec8da696-60d0-4198-ada8-5cc304a64437.png"
  },
  {
    name: "Google Cloud Certified Cloud Digital Leader (CDL)",
    issuer: "Google Cloud",
    icon: "/lovable-uploads/a27c74ff-5e31-4924-8efe-e0f4a773ae54.png"
  },
  {
    name: "GitHub Foundations Certification",
    issuer: "GitHub",
    icon: "/lovable-uploads/3b4516fc-9b37-4cc2-87c8-df0b76a95028.png"
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
        <div className="w-24 h-24 flex items-center justify-center mb-4">
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{issuer}</p>
      </CardContent>
    </Card>
  );
};

export default Certifications;
