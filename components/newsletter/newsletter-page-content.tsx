"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import { 
  Mail,
  Users,
  Clock,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  BookOpen,
  Bell,
  Star,
  CheckCircle,
  Gift,
  Calendar,
  Target,
  Award,
  Sparkles,
  Heart,
  Eye,
  MessageCircle,
  Share2,
  Crown,
  Gem,
  Flag,
  DollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsletterBenefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const newsletterBenefits: NewsletterBenefit[] = [
  {
    icon: Zap,
    title: "Breaking News First",
    description: "Get exclusive access to breaking crypto news before it hits social media",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900"
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description: "Expert analysis and market predictions to help guide your investment decisions",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
  },
  {
    icon: BookOpen,
    title: "Educational Content",
    description: "Learn about cryptocurrency, blockchain, and DeFi with beginner-friendly guides",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    icon: Flag,
    title: "Philippines Focus",
    description: "Local market updates, BSP regulations, and Filipino crypto adoption trends",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900"
  },
  {
    icon: Shield,
    title: "Security Alerts",
    description: "Stay protected with the latest security threats, scam warnings, and safety tips",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900"
  },
  {
    icon: Gift,
    title: "Exclusive Perks",
    description: "Subscriber-only content, early access to guides, and special community features",
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950 dark:to-rose-900"
  }
];

const newsletterStats = [
  {
    label: "Active Subscribers",
    value: "24,500+",
    description: "Filipino crypto enthusiasts"
  },
  {
    label: "Weekly Reach",
    value: "89%",
    description: "Open rate (industry avg: 21%)"
  },
  {
    label: "Daily Updates",
    value: "2-3",
    description: "Curated news stories"
  },
  {
    label: "Years Running",
    value: "3+",
    description: "Trusted news source"
  }
];

const frequencyOptions = [
  {
    id: 'daily',
    name: 'Daily Digest',
    description: 'Get the most important crypto news every morning',
    recommended: true,
    icon: Calendar,
    color: 'text-blue-600'
  },
  {
    id: 'weekly',
    name: 'Weekly Summary',
    description: 'Comprehensive weekly roundup every Sunday',
    recommended: false,
    icon: Clock,
    color: 'text-green-600'
  },
  {
    id: 'breaking',
    name: 'Breaking News Only',
    description: 'Instant alerts for major market-moving events',
    recommended: false,
    icon: Bell,
    color: 'text-red-600'
  }
];

export function NewsletterPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'daily',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const interests = [
    'Bitcoin & Altcoins',
    'DeFi & Staking',
    'NFTs & Gaming',
    'Philippine Market',
    'Trading & Technical Analysis',
    'Regulation & Compliance',
    'Security & Wallets',
    'Beginner Education'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--color-background-site)]">
        <AnimatedIndicatorNavbar />
        
        <main className="container mx-auto px-4 sm:px-6 max-w-4xl pt-16 pb-16">
          <div className="text-center space-y-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                Welcome to DailyCrypto!
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Thank you for subscribing! Check your email for a confirmation message and get ready for the best crypto content in the Philippines.
              </p>
            </div>

            <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-green-500/5 border border-[var(--color-primary-brand)]/20 shadow-lg max-w-md mx-auto">
              <CardContent className="p-6 text-center space-y-4">
                <Gift className="h-8 w-8 mx-auto text-[var(--color-primary-brand)]" />
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  What's Next?
                </h3>
                <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <p>✅ Confirmation email sent</p>
                  <p>📧 First newsletter within 24 hours</p>
                  <p>🎯 Personalized content based on your interests</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl"
                onClick={() => setIsSubmitted(false)}
              >
                Subscribe Another Email
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <a href="/">
                  Continue Reading
                </a>
              </Button>
            </div>
          </div>
        </main>

        <NewsletterFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-12 pb-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          {/* Newsletter Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-primary-brand)]/10 to-purple-500/10 px-6 py-3 rounded-2xl border border-[var(--color-primary-brand)]/20 shadow-lg">
            <Mail className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span className="text-base font-semibold text-[var(--color-primary-brand)]">
              DailyCrypto Newsletter • Trusted by 24,500+ Readers
            </span>
            <Badge className="bg-[var(--color-primary-brand)] text-white">
              FREE
            </Badge>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
            Stay Ahead of the Crypto Market
          </h1>
          
          <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed">
            Join thousands of Filipino crypto enthusiasts who rely on DailyCrypto for the latest news, 
            market insights, and educational content delivered straight to their inbox.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-[var(--color-text-secondary)]">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span>24,500+ subscribers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flag className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span>Philippines #1</span>
            </div>
          </div>
        </div>

        {/* Newsletter Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {newsletterStats.map((stat, index) => (
            <Card key={index} className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[var(--color-primary-brand)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                <Sparkles className="h-8 w-8 text-[var(--color-primary-brand)]" />
                <span>Why Subscribe?</span>
              </h2>
              
              <div className="grid gap-6">
                {newsletterBenefits.map((benefit, index) => (
                  <Card key={index} className={cn("rounded-2xl border shadow-lg", benefit.bgColor)}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white/80 dark:bg-black/20 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <benefit.icon className={cn("h-6 w-6", benefit.color)} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <Card className="rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Crown className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 font-[var(--font-display)]">
                    What Our Readers Say
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                    <p className="text-yellow-800 dark:text-yellow-200 italic mb-3">
                      "DailyCrypto's newsletter is my go-to source for crypto news. The Philippine market insights are invaluable!"
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700 dark:text-yellow-300">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        M
                      </div>
                      <span>Maria S., Manila</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                    <p className="text-yellow-800 dark:text-yellow-200 italic mb-3">
                      "Perfect for staying updated without information overload. Concise, relevant, and always accurate."
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-yellow-700 dark:text-yellow-300">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        J
                      </div>
                      <span>Juan D., Cebu</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Subscription Form */}
          <div className="lg:sticky lg:top-24">
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] mb-2">
                    Subscribe Now
                  </h2>
                  <p className="text-[var(--color-text-secondary)]">
                    Join the Philippines' leading crypto community
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-12 rounded-xl border-[var(--color-muted-subtle)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12 rounded-xl border-[var(--color-muted-subtle)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20"
                      required
                    />
                  </div>

                  {/* Frequency Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-3">
                      How often would you like to hear from us?
                    </label>
                    <div className="space-y-3">
                      {frequencyOptions.map((option) => (
                        <label key={option.id} className="flex items-start space-x-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="frequency"
                            value={option.id}
                            checked={formData.frequency === option.id}
                            onChange={(e) => handleInputChange('frequency', e.target.value)}
                            className="mt-1 w-4 h-4 text-[var(--color-primary-brand)] border-[var(--color-muted-subtle)] focus:ring-[var(--color-primary-brand)]"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <option.icon className={cn("h-4 w-4", option.color)} />
                              <span className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                                {option.name}
                              </span>
                              {option.recommended && (
                                <Badge className="bg-[var(--color-primary-brand)] text-white text-xs">
                                  Recommended
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                              {option.description}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Interests Selection */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-3">
                      What interests you most? (Optional)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => toggleInterest(interest)}
                            className="w-4 h-4 text-[var(--color-primary-brand)] border-[var(--color-muted-subtle)] rounded focus:ring-[var(--color-primary-brand)]"
                          />
                          <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
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

                  {/* Privacy Notice */}
                  <div className="text-center">
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      By subscribing, you agree to our privacy policy. We respect your privacy and comply with the 
                      Data Privacy Act of 2012. You can unsubscribe at any time with one click.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-subtle)] shadow-sm">
                <Shield className="h-6 w-6 mx-auto mb-2 text-green-500" />
                <div className="text-xs text-[var(--color-text-secondary)]">
                  No Spam
                </div>
              </div>
              <div className="p-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-subtle)] shadow-sm">
                <Eye className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Privacy Protected
                </div>
              </div>
              <div className="p-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-muted-subtle)] shadow-sm">
                <Heart className="h-6 w-6 mx-auto mb-2 text-red-500" />
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Unsubscribe Anytime
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Newsletter Preview */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] mb-4">
              What You'll Receive
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Here's a preview of what our newsletter looks like
            </p>
          </div>

          <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              {/* Newsletter Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--color-muted-subtle)]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">₱</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-text-primary)]">DailyCrypto Newsletter</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">December 20, 2024 • Issue #847</p>
                  </div>
                </div>
                <Badge className="bg-[var(--color-primary-brand)] text-white">
                  Daily Digest
                </Badge>
              </div>

              {/* Sample Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-red-500" />
                    <span>🚨 Breaking News</span>
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Bitcoin surges past ₱2.8M as Philippine adoption accelerates...
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>📈 Market Update</span>
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="text-center p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                      <div className="font-bold text-[var(--color-text-primary)]">BTC</div>
                      <div className="text-green-600">+5.2%</div>
                    </div>
                    <div className="text-center p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                      <div className="font-bold text-[var(--color-text-primary)]">ETH</div>
                      <div className="text-red-600">-2.1%</div>
                    </div>
                    <div className="text-center p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                      <div className="font-bold text-[var(--color-text-primary)]">SOL</div>
                      <div className="text-green-600">+8.7%</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-2 flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span>📚 Learn Something New</span>
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Today's tip: How to set up two-factor authentication on your crypto exchange...
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--color-muted-subtle)] text-center">
                <p className="text-xs text-[var(--color-text-secondary)]">
                  This is just a preview. Actual newsletters contain much more valuable content!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg mt-16">
          <CardContent className="p-8 text-center space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center shadow-lg">
                <Flag className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">₱</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
              Ready to Stay Informed?
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Join 24,500+ Filipino crypto enthusiasts who trust DailyCrypto for accurate, 
              timely, and actionable cryptocurrency news and insights.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Unsubscribe Anytime</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Privacy Protected</span>
              </div>
            </div>
            
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Subscribe Now - It's Free!
            </Button>
          </CardContent>
        </Card>
      </main>

      <NewsletterFooter />
    </div>
  );
}