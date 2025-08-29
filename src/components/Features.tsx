import { Calendar, Heart, PenTool, Brain, CheckCircle, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Intelligent Planning",
      description: "AI-powered task management that adapts to your mental state and energy levels throughout the day.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mood Insights",
      description: "Track your emotions with our intuitive mood wheel and discover patterns in your wellness journey.",
      color: "text-accent-pink",
      bgColor: "bg-accent-pink/10"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Reflective Journaling",
      description: "AI-assisted journal entries that provide personalized insights and help you understand your thoughts.",
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Unified Calendar",
      description: "See your tasks, mood logs, and journal entries all in one beautiful, integrated calendar view.",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Analytics",
      description: "Visualize your productivity and wellness trends with beautiful charts and meaningful insights.",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Smart Reminders",
      description: "Gentle, mindful notifications that respect your mental state and help you stay on track.",
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need for{' '}
            <span className="text-gradient">Wellness & Productivity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Neu Nest combines the best of task management with mental health tracking, 
            creating a holistic approach to personal organization and wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-feature group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-gradient inline-block p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Daily Routine?</h3>
            <p className="text-white/90 mb-6 max-w-2xl">
              Join thousands of users who have already discovered the perfect balance between productivity and mental wellness.
            </p>
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;