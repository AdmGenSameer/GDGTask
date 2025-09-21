import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, BarChart3 } from "lucide-react";

const PlatformSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl font-bold">One Platform. Endless Possibilities.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered features developed to adapt to your unique workflows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Card */}
          <Card className="p-8 bg-background border border-border rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sales Analysis</h3>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Right Card */}
          <Card className="p-8 bg-background border border-border rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Automated Task Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminate manual work with intelligent automation. Save
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;