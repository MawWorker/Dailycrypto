import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star,
  Flag,
  DollarSign,
  Globe,
  Bell,
  Gift,
  TrendingUp
} from 'lucide-react';

export function NewsletterCTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    // Handle success state or redirect
  };

  const benefits = [
    {
      icon: Zap,
      text: "Breaking news alerts",
      color: "text-red-500"
    },
    {
      icon: TrendingUp,
      text: "Market insights & analysis",
      color: "text-green-500"
    },
    {
      icon: Flag,
      text: "Philippines-focused content",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      text: "Security tips & warnings",
      color: "text-purple-500"
    },
    {
      icon: Gift,
      text: "Exclusive subscriber perks",
      color: "text-pink-500"
    },
    {
      icon: Globe,
      text: "Global crypto developments",
      color: "text-teal-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <Card className="rounded-3xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-12 bg-[var(--color-primary-brand)] rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                      <Flag className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800">
                      <span className="text-white font-bold text-lg">₱</span>
                    </div>
                  </div>
                  <div>
                    <Badge className="bg-[var(--color-primary-brand)] text-white mb-2">
                      <Users className="h-3 w-3 mr-1" />
                      24,500+ Subscribers
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-[var(--color-text-secondary)]">4.9/5 rating</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] leading-tight">
                    Stay Ahead of the 
                    <span className="bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 bg-clip-text text-transparent"> Crypto Market</span>
                  </h2>
                  
                  <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
                    Join thousands of Filipino crypto enthusiasts who rely on DailyCrypto for the latest news, 
                    market insights, and educational content delivered straight to their inbox.
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
                    <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <benefit.icon className={`h-4 w-4 ${benefit.color}`} />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4 text-green-500" />
                  <span>89% open rate</span>
                </div>
              </div>
            </div>

            {/* Right Column - Subscription Form */}
            <div className="bg-gradient-to-br from-[var(--color-primary-brand)]/10 to-purple-500/10 p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Get the best crypto content delivered daily
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl border-0 bg-white dark:bg-gray-800 shadow-lg focus:shadow-xl transition-shadow text-lg"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="frequency"
                        value="daily"
                        defaultChecked
                        className="w-4 h-4 text-[var(--color-primary-brand)]"
                      />
                      <span className="text-sm text-[var(--color-text-primary)]">Daily</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="frequency"
                        value="weekly"
                        className="w-4 h-4 text-[var(--color-primary-brand)]"
                      />
                      <span className="text-sm text-[var(--color-text-primary)]">Weekly</span>
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 hover:from-[var(--color-primary-brand)]/90 hover:to-purple-600/90 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5" />
                        <span>Subscribe for Free</span>
                      </div>
                    )}
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    By subscribing, you agree to our privacy policy and consent to receive updates. 
                    We comply with the Data Privacy Act of 2012. Unsubscribe anytime.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[var(--color-muted-subtle)]">
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary-brand)]">24.5K</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary-brand)]">89%</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-[var(--color-primary-brand)]">3+</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}