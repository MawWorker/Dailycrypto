"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flag, DollarSign } from "lucide-react";
import { useState } from "react";

const AvatarCenteredCta = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'weekly'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-[var(--color-surface)] py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex flex-col items-center justify-center">
        {/* Three overlapping avatar circles */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative -mr-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-background-site)] bg-[var(--color-primary-brand)] shadow-lg">
            <Flag className="h-6 w-6 text-white" />
          </div>
          <div className="relative -mr-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-background-site)] bg-[var(--color-success)] shadow-lg">
            <DollarSign className="h-6 w-6 text-white" />
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--color-background-site)] bg-[var(--color-text-secondary)] shadow-lg">
            <span className="text-sm font-bold text-white">₱</span>
          </div>
        </div>
        
        {/* Header section */}
        <header>
          <h1 className="mt-6 text-center text-4xl font-semibold tracking-tighter lg:text-7xl text-[var(--color-text-primary)]">
            Stay Updated with CryptoPress Philippines
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[var(--color-text-secondary)] md:text-2xl">
            Get the latest crypto news, market insights, and educational content delivered to your inbox. Join thousands of Filipino crypto enthusiasts.
          </p>
        </header>

        {/* Newsletter signup form */}
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-12 rounded-xl border-0 bg-[var(--color-background-site)] px-4 text-lg text-slate-400 placeholder:text-slate-400 focus:border-2 focus:border-[var(--color-primary-brand)] focus:ring-0 focus:text-[var(--color-text-primary)] transition-all"
              required
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-12 rounded-xl border-0 bg-[var(--color-background-site)] px-4 text-lg text-slate-400 placeholder:text-slate-400 focus:border-2 focus:border-[var(--color-primary-brand)] focus:ring-0 focus:text-[var(--color-text-primary)] transition-all"
              required
            />
          </div>

          {/* Frequency selection radio buttons */}
          <div className="flex gap-2">
            <label className="flex cursor-pointer items-center text-sm text-[var(--color-text-secondary)]">
              <input
                type="radio"
                name="frequency"
                value="daily"
                checked={formData.frequency === 'daily'}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
                className="mr-2"
              />
              Daily
            </label>
            <label className="flex cursor-pointer items-center text-sm text-[var(--color-text-secondary)]">
              <input
                type="radio"
                name="frequency"
                value="weekly"
                checked={formData.frequency === 'weekly'}
                onChange={(e) => handleInputChange('frequency', e.target.value)}
                className="mr-2"
              />
              Weekly
            </label>
          </div>

          {/* Subscribe button */}
          <Button 
            type="submit"
            className="h-12 w-full rounded-xl bg-[var(--color-primary-brand)] px-6 text-lg text-white hover:bg-[var(--color-primary-brand)]/90 focus:ring-2 focus:ring-[var(--color-primary-brand)] focus:ring-offset-2"
          >
            Subscribe Now
          </Button>
        </form>

        {/* Privacy notice */}
        <div className="mt-6 max-w-md text-center">
          <p className="text-xs text-[var(--color-text-secondary)]">
            By subscribing, you agree to our privacy policy and consent to receive updates from CryptoPress Philippines. 
            We comply with the Data Privacy Act of 2012 (Republic Act 10173) and other applicable Philippine data protection laws. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export { AvatarCenteredCta };

// Decorative SVG component (included in original file but not used in current layout)
const Line = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="77"
      height="80"
      viewBox="0 0 77 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z"
        fill="black"
      />
      <path
        d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z"
        fill="black"
      />
    </svg>
  );
};