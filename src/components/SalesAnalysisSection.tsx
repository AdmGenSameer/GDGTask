import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Activity } from "lucide-react";

const SalesAnalysisSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Automate Your Sales Analysis with AI
              </h2>
              <p className="text-xl text-muted-foreground">
                Automatically streamline & launch an advanced website and framework.
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
          </div>
          
          {/* Right Column - Status Tracker Dashboard */}
          <div className="relative">
            <Card className="p-6 bg-card border border-border rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Status Tracker</h3>
                  <Button variant="ghost" size="sm" className="text-primary">
                    See All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground">Active</h4>
                    
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                        TK
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Tehsah Mina</div>
                        <div className="text-sm text-muted-foreground">UI Designer</div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        + Active
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-medium">
                        KM
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Keliana Mary</div>
                        <div className="text-sm text-muted-foreground">UI Designer</div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-amber-600">
                        Idle
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAnalysisSection;