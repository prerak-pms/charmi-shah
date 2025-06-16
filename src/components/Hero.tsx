
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/d709e43c-fe94-47e3-a3d1-0719d0762a83.png" 
              alt="Charmi Shah"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Charmi Shah
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-4">
            Psychologist & Arts Based Therapy Practitioner
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            MSc Clinical Psychology • Diploma in Arts Based Therapy • Helping individuals through personalized therapy sessions 
            and creative healing approaches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Session
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Arts-Based Therapy</h3>
              <p className="text-gray-600">Creative healing through artistic expression</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Clinical Psychology</h3>
              <p className="text-gray-600">Evidence-based therapeutic approaches</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
              <p className="text-gray-600">Tailored sessions for your unique needs</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
