import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">Optimize AI</span>
            </div>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Newsletter Section</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe & get a promotion. Always stay tuned
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Email Address" 
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Features Overview</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing Plans</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Security & Compliance</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Product Updates</a>
            </div>
          </div>
          
          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">API Documentation</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Community Forum</a>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Press & Media</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Partners</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Copyright 2024 &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; Terms & Conditions &nbsp;&nbsp; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;