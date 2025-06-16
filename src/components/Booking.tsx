
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Booking = () => {
  const handleCalendlyClick = () => {
    // Replace with your actual Calendly URL
    window.open('https://calendly.com/charmi-shah', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50" id="booking">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Schedule a session that works for your schedule
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Schedule Appointment</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Click below to view available time slots and book your session through Calendly
              </p>
              <Button 
                onClick={handleCalendlyClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                📅 Book on Calendly
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
