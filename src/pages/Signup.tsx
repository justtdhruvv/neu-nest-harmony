import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Brain, ArrowLeft, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-background to-accent-purple/5 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-accent-pink/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-accent-orange/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-gradient-wellness p-3 rounded-2xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Neu Nest</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your wellness journey today</p>
        </div>

        {/* Signup Form */}
        <div className="card-wellness space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="input-wellness"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="input-wellness"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="input-wellness pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className="input-wellness pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleChange('agreeToTerms', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="btn-primary w-full"
              disabled={!formData.agreeToTerms}
            >
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Google Sign Up */}
          <Button variant="outline" className="w-full" type="button">
            <Chrome className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;