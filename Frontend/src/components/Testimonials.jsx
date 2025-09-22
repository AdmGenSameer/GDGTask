import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&fit=crop&crop=face",
      content: "The flexibility of this pricing platform allowed us to scale our business efficiently. We've seen a 5x increase in efficiency since implementation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "InnovateHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The flexibility of this pricing platform allowed us to scale our business efficiently. We've seen a 5x increase in efficiency since implementation.",
      rating: 5
    }
  ];

  const stats = [
    { value: "5x", label: "Efficiency Increase" },
    { value: "5x", label: "ROI Improvement" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            See How Teams Are <span className="text-primary">Scaling with AI</span>
          </h2>
          <p className="section-subtitle">
            Join thousands of companies that trust our platform to automate their most critical processes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-primary/30 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Automate Your Sales Analysis with AI
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your sales process with intelligent automation that analyzes patterns, 
            predicts outcomes, and optimizes performance in real-time.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;