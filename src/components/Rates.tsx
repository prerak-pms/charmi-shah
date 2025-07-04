
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Rates = () => {
  const rates = [
    {
      type: "Individual Session",
      duration: "60 minutes",
      price: "₹800",
      description: "One-on-one therapy session"
    },
    {
      type: "3-Session Package",
      duration: "60 minutes each",
      price: "₹2,000",
      description: "Virtual therapy session"
    },
    {
      type: "5-Session Package",
      duration: "60 minutes each",
      price: "₹2,750",
      description: "Assessment and treatment planning"
    },
    {
      type: "Arts-Based Therapy Session (Offline)",
      duration: "60 minutes",
      price: "₹1,500",
      description: "Creative therapy with art materials included (Bangalore Only)"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="rates">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Session Rates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all therapy services. Flexible payment options available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rates.map((rate, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-lg text-gray-900">{rate.type}</CardTitle>
                <p className="text-sm text-gray-500">{rate.duration}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{rate.price}</div>
                <p className="text-gray-600 text-sm">{rate.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Card className="bg-blue-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Payment Options</h3>
              <p className="text-gray-600 mb-4">
                • Bank Transfer • UPI • Cash (In-person sessions)
              </p>
              <p className="text-sm text-gray-500">
                Sliding scale rates available for students and those facing financial hardship
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
