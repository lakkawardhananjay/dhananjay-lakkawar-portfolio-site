
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Highly motivated and certified Cloud and DevOps Engineer with hands-on experience in 
                scalable deployments using CI/CD, Infrastructure as Code (IaC), LLM optimization, and 
                cloud platforms (GCP, AWS). I bring strong leadership, communication, and collaboration 
                skills to every project, ensuring efficient and effective solutions for complex technical challenges.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">My Approach</h3>
                  <p className="text-gray-600">
                    I believe in continuous learning and applying cutting-edge technologies to solve 
                    real-world problems. My expertise lies in optimizing cloud infrastructure, 
                    implementing robust DevOps practices, and exploring innovative AI solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">My Mission</h3>
                  <p className="text-gray-600">
                    To leverage cloud and DevOps best practices to build scalable, efficient, and 
                    cost-effective solutions that drive business value while fostering community 
                    growth and knowledge sharing in the tech space.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
