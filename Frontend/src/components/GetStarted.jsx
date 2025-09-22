import { ArrowRight, CheckCircle, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetStarted = () => {
  const steps = [
    {
      icon: Users,
      title: "Sign Up & Get Started",
      description: "Create your account and set up your team in under 2 minutes. No credit card required for the free trial."
    },
    {
      icon: Zap,
      title: "Connect Your Workflows",
      description: "Integrate with your existing tools and let our AI analyze your processes to suggest optimal automations."
    },
    {
      icon: Shield,
      title: "Automate with Confidence",
      description: "Deploy secure, scalable automations that grow with your business and deliver measurable results."
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get Started in <span className="text-primary">3 Easy Steps</span>
          </h2>
          <p className="section-subtitle">
            Start automating your business processes today. Setup takes minutes, results are immediate.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-smooth">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card rounded-2xl p-12 text-center shadow-card">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join 15,000+ companies already automating with our platform. 
              Start your free trial today and see results in 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-hero group text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-outline text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                30-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-primary mr-2" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;