import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Learners",
    description: "Students achieving their goals",
    gradient: "from-learning-blue to-learning-green",
  },
  {
    icon: BookOpen,
    value: "500K+",
    label: "Documents Processed",
    description: "Educational content analyzed",
    gradient: "from-learning-green to-learning-orange",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Improvement Rate",
    description: "Students see better results",
    gradient: "from-learning-orange to-learning-blue",
  },
  {
    icon: Award,
    value: "4.9/5",
    label: "User Rating",
    description: "Satisfaction score",
    gradient: "from-learning-blue to-learning-green",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Trusted by Learners 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of students who have transformed their learning experience with our AI-powered platform.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-gradient-card">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center group-hover:animate-float`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-lg font-semibold">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;