import { Brain, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">LearnMaster</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering learners worldwide with AI-driven personalized education that adapts to your unique learning style.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Github className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Features</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Dashboard</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Analytics</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Integrations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Documentation</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">API Reference</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Tutorials</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Community</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">About</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Careers</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Privacy</li>
              <li className="hover:text-primary-foreground transition-smooth cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 LearnMaster. All rights reserved. Built with ❤️ for learners everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;