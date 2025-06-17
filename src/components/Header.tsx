
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">Charmi Shah</div>
          <nav className="hidden md:flex space-x-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600"
            >
              About Me
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600"
            >
              My Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('booking')}
              className="text-gray-700 hover:text-blue-600"
            >
              Book Session
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
