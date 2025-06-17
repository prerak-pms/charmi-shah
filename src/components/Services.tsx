
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your personal journey and goals",
      icon: "👤"
    },
    {
      title: "Arts-Based Therapy",
      description: "Healing through creative expression including art, music, and movement",
      icon: "🎨"
    },
    {
      title: "Clinical Psychology",
      description: "Evidence-based approaches for mental health and emotional wellbeing",
      icon: "🧠"
    },
    {
      title: "Online Sessions",
      description: "Convenient virtual therapy sessions from the comfort of your home",
      icon: "💻"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Offering a range of therapeutic services designed to support your mental health and personal growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
