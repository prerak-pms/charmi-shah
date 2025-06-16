
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Payment = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50" id="payment">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Payment Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convenient payment options for your therapy sessions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-gray-900">UPI Payment</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <div className="w-48 h-48 bg-white rounded-lg shadow-lg mx-auto flex items-center justify-center mb-4">
                  {/* QR Code placeholder - replace with your actual QR code */}
                  <div className="text-6xl">📱</div>
                </div>
                <p className="text-gray-600 mb-2">Scan QR code to pay via UPI</p>
                <p className="font-medium text-blue-700">charmishah@upi</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-gray-900">Bank Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Account Name</p>
                  <p className="font-medium">Charmi Shah</p>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Account Number</p>
                  <p className="font-medium">XXXX-XXXX-XXXX</p>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">IFSC Code</p>
                  <p className="font-medium">XXXX0000XXX</p>
                </div>
                <div className="bg-white/70 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="font-medium">Your Bank Name</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <Card className="bg-yellow-50 border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Payment Instructions</h3>
              <div className="text-left space-y-2 text-gray-600">
                <p>• Payment is required 24 hours before the session</p>
                <p>• Send payment confirmation via WhatsApp or email</p>
                <p>• Cancellations require 48 hours notice for full refund</p>
                <p>• Emergency sessions can be paid immediately after booking</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
