import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dashboard-hero.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="hero-title mb-6">
              Supercharge Your Business with{" "}
              <span className="text-primary">AI-Powered Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your operations with intelligent automation that works 24/7. 
              Increase efficiency by 300% while reducing manual tasks and human error.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15,000+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$450,000</div>
                <div className="text-sm text-muted-foreground">Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AI-Powered Automation Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-card-hover border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">15,500 tasks automated</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card-hover border border-border">
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">300%</div>
                <div className="text-xs text-muted-foreground">Efficiency Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;