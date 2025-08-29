import { Link } from 'react-router-dom';
import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-wellness p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Neu Nest</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Balance your mind, organize your life. The wellness platform that puts mental health first.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Product</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="#" className="block hover:text-white transition-colors">Features</Link>
              <Link to="#" className="block hover:text-white transition-colors">Pricing</Link>
              <Link to="#" className="block hover:text-white transition-colors">Integrations</Link>
              <Link to="#" className="block hover:text-white transition-colors">API</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="#" className="block hover:text-white transition-colors">About Us</Link>
              <Link to="#" className="block hover:text-white transition-colors">Blog</Link>
              <Link to="#" className="block hover:text-white transition-colors">Careers</Link>
              <Link to="#" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="#" className="block hover:text-white transition-colors">Help Center</Link>
              <Link to="#" className="block hover:text-white transition-colors">Community</Link>
              <Link to="#" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="block hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Neu Nest. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with ❤️ for mental wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;