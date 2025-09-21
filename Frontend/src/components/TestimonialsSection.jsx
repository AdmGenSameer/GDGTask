import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See How Teams Are Scaling with AI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, discover how our AI platform delivers measurable
            results across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* First Testimonial */}
          <Card className="p-8 bg-card border border-border rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Base analytics dashboard</span>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  The flexibility of their pricing plans allowed us to scale
                </h3>
                <p className="text-muted-foreground">
                  Software for accounting firms to automatically standard, clean, and
                  audit data. Feastables is different - it is a turnkey automaton
                  cloud-first approach.
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-orange-600">A</span>
                </div>
                <div>
                  <div className="font-medium">Austin Arthur</div>
                  <div className="text-sm text-muted-foreground">Product Manager</div>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-medium ml-2">5.0</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5x</div>
                  <div className="text-sm text-muted-foreground">Performance improvement</div>
                </div>
                <div className="text-4xl text-muted-foreground/20">→</div>
              </div>
            </div>
          </Card>
          
          {/* Second Testimonial */}
          <Card className="p-8 bg-card border border-border rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Customizable workstreams & reporting</span>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  The flexibility of their pricing plans allowed us to scale
                </h3>
                <p className="text-muted-foreground">
                  Software for accounting firms to automatically standard, clean, and
                  audit data. Feastables is different - it is a turnkey automaton
                  cloud-first approach.
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">A</span>
                </div>
                <div>
                  <div className="font-medium">Austin Arthur</div>
                  <div className="text-sm text-muted-foreground">Product Manager</div>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm font-medium ml-2">5.0</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5x</div>
                  <div className="text-sm text-muted-foreground">Performance improvement</div>
                </div>
                <div className="text-4xl text-muted-foreground/20">→</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;