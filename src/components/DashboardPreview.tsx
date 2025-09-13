import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Clock, CheckCircle } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Your Learning 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Command Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive view of your progress, upcoming tasks, and personalized recommendations 
            all in one intuitive dashboard.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Progress Overview */}
              <Card className="lg:col-span-2 border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-learning-blue" />
                    <span>Learning Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Mathematics</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Physics</span>
                      <span className="text-sm text-muted-foreground">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Chemistry</span>
                      <span className="text-sm text-muted-foreground">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Stats */}
              <div className="space-y-6">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-learning-blue/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-learning-blue" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm text-muted-foreground">Courses Active</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-learning-green/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-learning-green" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">4.2h</div>
                        <div className="text-sm text-muted-foreground">Study Time Today</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-learning-orange/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-learning-orange" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground">Tasks Completed</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Recent Activity */}
            <Card className="mt-6 border-0 shadow-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Completed "Quantum Mechanics Chapter 5"</span>
                    </div>
                    <Badge variant="secondary">2 hours ago</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-learning-blue rounded-full"></div>
                      <span>New assessment generated for "Calculus"</span>
                    </div>
                    <Badge variant="secondary">5 hours ago</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-learning-orange rounded-full"></div>
                      <span>Uploaded "Advanced Chemistry Notes.pdf"</span>
                    </div>
                    <Badge variant="secondary">1 day ago</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;