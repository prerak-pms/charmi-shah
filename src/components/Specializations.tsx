
import { Card } from "@/components/ui/card";

export const Specializations = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="specializations">
      <div className="max-w-6xl mx-auto">
        <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Specializations</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            {[
              "Anxiety", "Stress", "Depression", "Relationship Issues", "Couple Counseling", 
              "Sexual Issues", "Suicidal Ideation", "Sleep Issues", "Cognitive Rehabilitation", 
              "ADHD", "Family Therapy", "Self-harm", "Self Confidence", "Pain Management", "Psycho-Somatic Disorders",  
              "Body Image", "Anger", "Child Counseling", "Eating Disorders"
            ].map((specialization, index) => (
              <div key={index} className="bg-blue-50 px-3 py-2 rounded-full text-sm text-blue-800 font-medium">
                {specialization}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
