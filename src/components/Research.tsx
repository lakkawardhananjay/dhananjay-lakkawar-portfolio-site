
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Research</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-blue-800">
                  AI-Driven Task-Specific Hardware Optimization
                </CardTitle>
                <p className="text-sm text-gray-500 mt-1">Research Paper</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Conducted research on efficient LLM deployment in CPU-only environments, 
                focusing on hardware-specific optimizations for improved inference speed 
                and reduced resource consumption. This work explores novel techniques for 
                model quantization and compression while maintaining output quality.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Large Language Models
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Hardware Optimization
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Model Compression
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  CPU Inference
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;
