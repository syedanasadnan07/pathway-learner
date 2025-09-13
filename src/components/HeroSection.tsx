import { Button } from "@/components/ui/button";
import { Play, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium">AI-Powered Learning Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Personalized Learning 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> 
                  {" "}That Adapts to You
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your study experience with AI-driven content processing, 
                automated assessments, and intelligent recommendations that evolve with your learning patterns.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <BookOpen className="w-5 h-5 group-hover:animate-float" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 group-hover:animate-float" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-card rounded-2xl p-2 shadow-elegant">
              <img 
                src={heroImage} 
                alt="AI-powered learning platform interface" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;