
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="h-5 w-5 text-blue-600" />}
                title="Email"
                value="lakkawardhananjay@gmail.com"
                href="mailto:lakkawardhananjay@gmail.com"
              />
              
              <ContactItem 
                icon={<Phone className="h-5 w-5 text-blue-600" />}
                title="Phone"
                value="+91 9529229156"
                href="tel:+919529229156"
              />
              
              <ContactItem 
                icon={<Linkedin className="h-5 w-5 text-blue-600" />}
                title="LinkedIn"
                value="linkedin.com/in/dhananjaylakkawar"
                href="https://linkedin.com/in/dhananjaylakkawar"
                isExternal
              />
              
              <ContactItem 
                icon={<Github className="h-5 w-5 text-blue-600" />}
                title="GitHub"
                value="github.com/dhananjaylakkawar"
                href="https://github.com/dhananjaylakkawar"
                isExternal
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  value, 
  href, 
  isExternal = false 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  href: string; 
  isExternal?: boolean 
}) => {
  return (
    <div className="flex items-start">
      <div className="mr-4">{icon}</div>
      <div>
        <h4 className="text-lg font-medium text-gray-900">{title}</h4>
        <a 
          href={href} 
          className="text-blue-600 hover:text-blue-800 transition-colors"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default Contact;
