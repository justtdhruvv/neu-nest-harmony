import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-accent-purple/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-accent-purple/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-12 h-12 bg-accent-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent-pink/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Balance Your Mind,{' '}
                <span className="text-gradient">Organize Your Life</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                The first wellness platform that combines productivity with mental health tracking. 
                Plan tasks intelligently, track your emotions, and journal with AI insights.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button className="btn-hero group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="ghost" className="group font-semibold text-lg py-4 px-6">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-purple">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Wellness and productivity balance illustration"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse-glow" />
                <div>
                  <div className="text-sm font-semibold">Tasks Completed</div>
                  <div className="text-lg font-bold text-accent-green">47</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="text-2xl">😊</div>
                <div>
                  <div className="text-sm font-semibold">Mood Today</div>
                  <div className="text-lg font-bold text-accent-purple">Happy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;