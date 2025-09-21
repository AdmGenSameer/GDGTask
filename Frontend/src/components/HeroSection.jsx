import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, DollarSign, Activity, Award, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-current" />
                <span>Your AI-first Co-AI Strategy Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Supercharge Your Business with{" "}
                <span className="text-primary">AI-Powered Automation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Our AI-ready platform helps teams save time, cut costs, and unlock smarter
                decision-making without complexity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Book a Demo
              </Button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Sales Analysis</span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">12,500</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                  <div className="text-xs text-primary">+16%</div>
                </div>
              </Card>
              
              <Card className="p-6 bg-primary text-primary-foreground rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-6 h-6" />
                  <span className="text-xs opacity-80">150k+</span>
                </div>
                <div className="space-y-2">
                  <div className="text-sm opacity-80">Global Users</div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right Column - Stats Cards */}
          <div className="space-y-6">
            <Card className="p-8 bg-card border border-border rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <span className="text-sm text-muted-foreground">Revenue Generated</span>
                </div>
                <div className="text-4xl font-bold">$480,000</div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50M+</div>
                    <div className="text-xs text-muted-foreground">API Calls</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className="text-2xl font-bold flex items-center">
                        4.9 <Star className="w-4 h-4 ml-1 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-primary">98%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;