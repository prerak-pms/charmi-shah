
import { Card } from "@/components/ui/card";

export const TherapeuticExpertise = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="therapeutic-expertise">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Therapeutic Expertise</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-center">
            {[
              "Cognitive Behavioural Therapy (CBT)", "Dialectical Behavioural Therapy (DBT)", 
              "Rational Emotive Behavioural Therapy (REBT)", "Client Centred", 
              "Play, Music and Art Therapy", "Mindfulness Based Therapies", 
              "Behavioural modification", "Eclectic Therapy"
            ].map((therapy, index) => (
              <div key={index} className="bg-green-50 px-3 py-2 rounded-full text-sm text-green-800 font-medium">
                {therapy}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
