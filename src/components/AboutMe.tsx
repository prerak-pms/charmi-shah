
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">Professional Background</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Skilled and compassionate Psychologist with over four years of experience delivering evidence-based psychological
              care across clinical, virtual, and community-based settings. Adept in Eclectic Approach, Arts-Based Therapy, and
              mindfulness-based interventions to support individuals through anxiety, depression, stress, life transitions, and
              more. Proven success in crafting personalized, culturally sensitive treatment plans for clients across the lifespan—
              including adolescents, adults, and geriatric populations. Trained in psychological assessments, risk evaluation, and
              personalised care. Recognized for empathetic communication, strong clinical acumen, and a deep commitment to
              fostering resilience and sustainable mental well-being.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
