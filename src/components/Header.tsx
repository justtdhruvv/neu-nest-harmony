import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-wellness p-2 rounded-xl">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">Neu Nest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="nav-link">Features</Link>
          <Link to="#pricing" className="nav-link">Pricing</Link>
          <Link to="#about" className="nav-link">About</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="btn-primary">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="#features" className="nav-link py-2">Features</Link>
              <Link to="#pricing" className="nav-link py-2">Pricing</Link>
              <Link to="#about" className="nav-link py-2">About</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login">
                  <Button variant="ghost" className="w-full">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn-primary w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;