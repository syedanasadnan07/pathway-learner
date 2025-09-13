import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-learning-blue/20 via-transparent to-learning-green/20 rounded-3xl"></div>
          
          <div className="relative px-8 py-16 lg:py-24 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-white animate-pulse-glow" />
                <span className="text-sm font-medium text-white">Start Your Learning Journey</span>
              </div>
              
              <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Transform 
                <br />
                Your Learning?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who have revolutionized their study experience with AI-powered 
                personalized learning. Start your free trial today and discover your potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-learning-blue hover:bg-white/90 shadow-glow group"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 pt-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;