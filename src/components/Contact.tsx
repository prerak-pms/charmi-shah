
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919769397745', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/charmi-shah-leaarner/', '_blank');
  };

  const handleEmailClick = () => {
    window.open('https://wa.me/919769397745', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your healing journey? Reach out to me directly
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <CardTitle className="text-lg text-gray-900">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Connect via Call for immediate support</p>
              <div className="w-full bg-blue-600 text-white px-4 py-2 rounded font-medium">
                +91 97693 97745
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">💬</div>
              <CardTitle className="text-lg text-gray-900">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Message me on WhatsApp</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">💼</div>
              <CardTitle className="text-lg text-gray-900">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Connect professionally</p>
              <Button 
                onClick={handleLinkedInClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Connect on LinkedIn
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">✉️</div>
              <CardTitle className="text-lg text-gray-900">Quick Contact</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Connect instantly via WhatsApp</p>
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Contact via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Weekdays</h4>
                  <p className="text-gray-600">Monday - Friday<br />10:00 AM - 7:00 PM</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Weekend</h4>
                  <p className="text-gray-600">Saturday<br />10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  Emergency appointments available outside regular hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
