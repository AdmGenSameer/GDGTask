import { Bot, BarChart3, Shield, Zap, Users, Clock } from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import taskImage from "@/assets/task-management.jpg";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Automated Task Management",
      description: "AI-powered task scheduling and execution that learns from your patterns and optimizes workflows automatically.",
      value: "$480,000",
      metric: "Cost Savings"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict trends, identify bottlenecks, and suggest improvements before issues arise.",
      value: "15,200",
      metric: "Data Points"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance monitoring, and automated threat detection.",
      value: "100%",
      metric: "Compliance"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Process thousands of operations per second with our optimized infrastructure and intelligent caching.",
      value: "10ms",
      metric: "Response Time"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools with real-time updates, shared workflows, and permission management.",
      value: "500+",
      metric: "Team Members"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring with instant alerts, automated failover, and self-healing capabilities.",
      value: "99.9%",
      metric: "Uptime SLA"
    }
  ];

  return (
    <section className="py-20 bg-background" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Transforming Every Industry with{" "}
            <span className="text-primary">Smart AI Solutions</span>
          </h2>
          <p className="section-subtitle">
            Our comprehensive automation platform delivers measurable results across all business functions, 
            from operations to analytics, with enterprise-grade security and reliability.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              One Platform. Endless Possibilities.
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Discover how our unified automation platform streamlines operations, 
              enhances decision-making, and drives unprecedented growth across your organization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Intelligent Automation</h4>
                  <p className="text-muted-foreground">AI that adapts to your business needs and continuously improves performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Real-time Analytics</h4>
                  <p className="text-muted-foreground">Comprehensive insights with actionable recommendations and predictive modeling.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={analyticsImage} 
              alt="Analytics Dashboard"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{feature.value}</div>
                  <div className="text-xs text-muted-foreground">{feature.metric}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-2 lg:order-1">
            <img 
              src={taskImage} 
              alt="Task Management Interface"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Keep your data safe and compliant
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Enterprise-grade security meets user-friendly automation. Our platform ensures 
              your sensitive data remains protected while delivering seamless experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">15,200</div>
                <div className="text-sm text-muted-foreground">Automated Tasks</div>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">SOC 2 Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;