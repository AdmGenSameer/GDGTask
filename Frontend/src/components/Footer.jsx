import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Changelog", href: "#" }
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Case Studies", href: "#" }
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Email", href: "#", icon: Mail }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-foreground">AutomateAI</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Supercharge your business with AI-powered automation. Transform operations, 
              boost efficiency, and scale with confidence.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AutomateAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-smooth">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;