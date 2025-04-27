
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const achievements = [
  "Presented Slide Studio at Google I/O Connect and Google Cloud Community Day",
  "Appointed GDG on Campus Organizer, growing community from 90 to 461 members",
  "Participated in major tech conferences: Mumbai Tech Week, NMIMS Ulectro, DevFest Pune, and DevFest Mumbai"
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} text={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ text }: { text: string }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow h-full">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Award className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <p className="text-gray-700">{text}</p>
      </CardContent>
    </Card>
  );
};

export default Achievements;
