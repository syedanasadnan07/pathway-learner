import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Brain, BarChart3, Target, Upload, Zap } from "lucide-react";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import documentImage from "@/assets/document-processing.jpg";

const features = [
  {
    icon: Upload,
    title: "Smart Document Processing",
    description: "Upload PDFs, texts, and educational materials. Our AI extracts key concepts and creates structured learning content.",
    image: documentImage,
    gradient: "from-learning-blue to-learning-green",
  },
  {
    icon: Brain,
    title: "Automated Assessment Generation",
    description: "Generate multiple-choice, short answer, and essay questions automatically from your study materials.",
    gradient: "from-learning-green to-learning-orange",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics Dashboard",
    description: "Track your progress, identify knowledge gaps, and visualize your learning journey with detailed insights.",
    image: dashboardImage,
    gradient: "from-learning-orange to-learning-blue",
  },
  {
    icon: Target,
    title: "Personalized Recommendations",
    description: "Receive AI-driven study suggestions based on your performance patterns and learning preferences.",
    gradient: "from-learning-blue to-learning-green",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-learning-blue/10 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-learning-blue" />
            <span className="text-sm font-medium text-learning-blue">Powerful Features</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Everything You Need to 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Excel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive learning platform combines cutting-edge AI with intuitive design 
            to create the ultimate study companion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-gradient-card">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:animate-float`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                {feature.image && (
                  <CardContent className="pt-0">
                    <div className="relative rounded-lg overflow-hidden shadow-card group-hover:shadow-elegant transition-smooth">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </CardContent>
                )}
                
                <CardContent className={feature.image ? "pt-4" : ""}>
                  <Button variant="learning" className="w-full group-hover:shadow-glow">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;