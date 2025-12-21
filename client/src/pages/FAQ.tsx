import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function FAQ() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <HelpCircle className="h-8 w-8 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Find answers to common questions about our courses, certifications, and programs
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search for answers..." 
              className="pl-12 h-12 bg-background text-foreground border-none shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container -mt-10 relative z-20 max-w-4xl mx-auto">
        <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12 border border-primary/5">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">All</Button>
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-secondary hover:text-primary">Certification</Button>
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-secondary hover:text-primary">Courses</Button>
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-secondary hover:text-primary">Pricing</Button>
            <Button variant="outline" className="rounded-full border-primary/20 hover:bg-secondary hover:text-primary">General</Button>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                How does the CWCP certification work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                The Certified Wealth Compliance Professional (CWCP) certification is a comprehensive program designed to validate your expertise in wealth management compliance. To earn the designation, you must meet the experience requirements (2 years), complete the prerequisite coursework (or demonstrate equivalent knowledge), pass the 120-question proctored examination with a score of 75% or higher, and agree to the Code of Ethics. Once certified, you must complete 20 hours of continuing education annually.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                What's the difference between live, cohort, and recorded courses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Recorded Courses:</strong> Self-paced video lessons you can watch anytime. Includes quizzes and downloadable resources. Best for flexible learning.</li>
                  <li><strong>Cohort Programs:</strong> Structured 4-8 week programs with a group of peers. Includes weekly live sessions, assignments, and community discussion. Best for accountability and networking.</li>
                  <li><strong>Live Workshops:</strong> Intensive 1-2 day sessions focused on specific topics. Real-time interaction with instructors. Best for deep dives and immediate skill application.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                Do I need compliance experience to start?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                No, you don't need prior experience to start taking our courses. We offer a "Compliance Foundations" course specifically designed for those new to the industry or transitioning into a compliance role. However, to earn the CWCP certification, you will need to demonstrate 2 years of relevant experience, which can be completed before or after passing the exam.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                Are courses eligible for continuing education credit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Yes, most of our courses are eligible for CE credits for various industry designations, including CFP, CPA, and IACCP. Each course description page lists the specific CE credits available. We also provide certificates of completion that can be used for firm-internal training requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                How is corporate training priced?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Corporate training pricing depends on the format (on-site vs. virtual), the number of participants, and the level of customization required. We offer volume discounts for groups of 5 or more. For our standard "Team Package" (3-5 people), we offer a 15% discount off retail course prices. Please contact our sales team for a custom quote tailored to your firm's needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-xl px-6 data-[state=open]:bg-secondary/30 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-left py-6 hover:no-underline hover:text-chart-1">
                Can I access the course materials after I finish?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                Yes! When you purchase a course, you get lifetime access to the materials, including any future updates we make to the content. This ensures you always have the latest regulatory information and templates at your fingertips.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-serif font-bold mb-4 text-primary">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <Button asChild className="bg-chart-1 hover:bg-chart-1/90 text-white">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-4 w-4" /> Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
