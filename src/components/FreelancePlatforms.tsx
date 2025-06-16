
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FreelancePlatforms = () => {
  const platforms = [
    {
      name: "TherapyMantra",
      description: "Book sessions through TherapyMantra platform",
      url: "https://therapists.therapymantra.co/list/therapist/68309/charmi-shah",
      icon: "🧠",
      color: "from-blue-50 to-blue-100"
    },
    {
      name: "Felicity.care",
      description: "Connect with me on Felicity Care",
      url: "https://felicity.care/community-talk-therapists-detail/640c249a72ee871815ff166f",
      icon: "💚",
      color: "from-green-50 to-green-100"
    },
    {
      name: "Psychology Today",
      description: "Find me on Psychology Today directory",
      url: "https://www.psychologytoday.com",
      icon: "📋",
      color: "from-purple-50 to-purple-100"
    },
    {
      name: "Direct Booking",
      description: "Book directly through my Calendly",
      url: "https://calendly.com/shahcharmi7745/45min",
      icon: "📅",
      color: "from-teal-50 to-teal-100"
    }
  ];

  const handlePlatformClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="platforms">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Through Multiple Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred platform to book sessions - I'm available across various therapy platforms for your convenience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card key={index} className={`bg-gradient-to-br ${platform.color} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{platform.icon}</div>
                <CardTitle className="text-lg text-gray-900">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <Button 
                  onClick={() => handlePlatformClick(platform.url)}
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-white/80 transition-all duration-300"
                >
                  Visit Platform
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Multiple Booking Options</h3>
              <p className="text-gray-600">
                I believe in making therapy accessible through various channels. Choose the platform 
                that works best for your needs, schedule, and preferences. All platforms offer the same quality care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
