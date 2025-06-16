
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specializations } from "@/components/Specializations";
import { TherapeuticExpertise } from "@/components/TherapeuticExpertise";
import { Booking } from "@/components/Booking";
import { Rates } from "@/components/Rates";
import { Payment } from "@/components/Payment";
import { FreelancePlatforms } from "@/components/FreelancePlatforms";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Hero />
      <Services />
      <Specializations />
      <TherapeuticExpertise />
      <Booking />
      <Rates />
      <Payment />
      <FreelancePlatforms />
      <Contact />
    </div>
  );
};

export default Index;
