import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, BarChart3, PieChart, TrendingUp } from "lucide-react";

const IndustrySection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Transforming Every Industry with Smarter AI Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                From retail to healthcare, our AI-powered automation helps
                businesses scale smarter, faster, and with precision.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="font-medium">Retail</span>
                  <Badge variant="secondary" className="ml-auto">Personalized customer experiences</Badge>
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <PieChart className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Finance</span>
                  <Badge variant="outline" className="ml-auto">Fraud detection & smart predictions</Badge>
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Healthcare</span>
                  <Badge variant="outline" className="ml-auto">Faster diagnosis & workflow efficiency</Badge>
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Right Column - Dashboard Preview */}
          <div className="relative">
            <Card className="p-6 bg-card border border-border rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Weekly Sales Report</h3>
                  <Badge variant="secondary">Marketing</Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$1.2M</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">847</div>
                    <div className="text-sm text-muted-foreground">Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">23.5%</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Online Sales</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Retail Stores</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary/60 h-2 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">Sales Analytics</div>
                  <div className="h-32 bg-muted/30 rounded-lg flex items-end justify-center space-x-2 p-4">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div 
                        key={i}
                        className="bg-primary rounded-t flex-1"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      ></div>
                    ))}
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

export default IndustrySection;