import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Target, Calendar, TrendingUp, Zap, BarChart } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
                  Task Sync: Achieve Goals, Explore New Hobbies
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Plan your daily tasks and explore new hobbies, all while staying on track with reminders and smart scheduling.
                </p>
                <Button size="lg" className="text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all">
                  Get Early Access
                </Button>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src={appMockup} 
                  alt="Task Sync app showing Study tasks and Jiu-Jitsu tasks" 
                  className="max-w-sm w-full h-auto rounded-2xl shadow-card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-card">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-primary mb-2">⭐️⭐️⭐️⭐️⭐️ 4.8/5</div>
                  <p className="text-muted-foreground">from 1,200 students last month</p>
                </div>
                <div className="border-l-0 md:border-l-2 border-border pl-0 md:pl-6 text-center md:text-left">
                  <p className="text-lg italic text-foreground">
                    "I finally balance classes, gym, and guitar practice — all in one app."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Planning Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scattered to-do lists don't help you stick to goals. You set reminders but forget them. You want to build good habits, explore new hobbies, and still manage daily responsibilities — but planning feels overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* Value/Outcomes Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Achieve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, text: "Plan your week in under 10 minutes." },
                { icon: TrendingUp, text: "Achieve 18–25% fewer missed tasks in 2 weeks." },
                { icon: Target, text: "Add 3+ new hobby sessions per month alongside core goals." },
                { icon: Calendar, text: "Auto-reschedule when life interrupts." },
                { icon: CheckCircle2, text: "Track progress with a simple daily checklist." },
                { icon: BarChart, text: "See your consistency improve week over week." },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-shadow">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <p className="text-foreground font-medium">{item.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Set your goals",
                  description: "Pick what you want to achieve (study, fitness, hobbies).",
                },
                {
                  step: "2",
                  title: "Break into steps",
                  description: "Task Sync creates micro-tasks that fit your day.",
                },
                {
                  step: "3",
                  title: "Stay on track",
                  description: "Smart reminders and rebalancing keep you consistent.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Proof Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Real Results</h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold">Areeb, 3rd-year student:</p>
                <blockquote className="text-lg italic border-l-4 border-primary pl-6">
                  "Task Sync helped me cut missed tasks by 22% in just two weeks. I finally added 2 weekly guitar sessions without falling behind on studies."
                </blockquote>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Will Task Sync overwhelm me?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No — it keeps tasks short (10–30 minutes) and lets you cap daily sessions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Can I import my reminders?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes — paste your existing lists or upload a CSV.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Do I lose my data?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Never — your tasks are private and exportable anytime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What if I don't like it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No risk — the beta is free, and Pro has a 7-day refund.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Simple Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-8 hover:shadow-soft transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Free Beta</h3>
                <p className="text-3xl font-bold text-primary mb-6">$0</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>All core features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>No charge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>No card required</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Start Free Today</Button>
              </Card>
              <Card className="p-8 border-primary border-2 hover:shadow-soft transition-shadow relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-3xl font-bold text-primary mb-6">TBA</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Calendar sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>Unlimited hobbies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span>7-day refund guarantee</span>
                  </li>
                </ul>
                <Button className="w-full">Get Notified</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to finally stick to your goals?
            </h2>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-soft hover:shadow-lg transition-all">
              Get Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Task Sync. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
