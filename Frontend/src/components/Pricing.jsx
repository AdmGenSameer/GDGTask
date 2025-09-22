import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "29",
      description: "Perfect for small teams getting started with automation",
      features: [
        "Up to 1,000 automated tasks",
        "Basic analytics dashboard",
        "Email support",
        "5 team members",
        "Standard integrations",
        "Basic templates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro Business",
      price: "99",
      description: "Advanced features for growing businesses and teams",
      features: [
        "Up to 25,000 automated tasks",
        "Advanced analytics & reporting",
        "Priority support + chat",
        "25 team members",
        "Premium integrations",
        "Custom workflows",
        "API access",
        "Advanced security"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited automated tasks",
        "Enterprise analytics suite",
        "Dedicated success manager",
        "Unlimited team members",
        "Custom integrations",
        "White-label options",
        "SSO & advanced security",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your business needs. No hidden fees, no surprises. 
            Scale up or down anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth border ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  {plan.price === "Custom" ? (
                    <div className="text-4xl font-bold text-foreground">Custom</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'btn-hero' 
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day free trial. No credit card required.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
            <span>✓ 99.9% uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;