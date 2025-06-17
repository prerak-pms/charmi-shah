
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Booking = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/shahcharmi7745/45min', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-teal-50" id="booking">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg mb-6">
            <p className="text-lg font-semibold text-green-800 mb-2">
              🎁 Free 15-Minute Consultation
            </p>
            <p className="text-gray-700">
              I offer a complimentary 15-minute counselling session to help you start your healing journey and determine if we're a good fit.
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Schedule a 60-minute session that works for your schedule
          </p>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800">Schedule Appointment</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Click below to view available time slots and book your 60-minute session through Calendly
              </p>
              <Button 
                onClick={handleCalendlyClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                📅 Book 60 Minutes Session
              </Button>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-3">Session Options:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-700">In-Person Sessions</h4>
                  <p className="text-sm text-gray-600">Face-to-face therapy in a comfortable setting</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medium text-green-700">Online Sessions</h4>
                  <p className="text-sm text-gray-600">Virtual therapy via secure video call</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
