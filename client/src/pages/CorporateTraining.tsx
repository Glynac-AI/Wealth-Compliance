import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Target, GraduationCap, BarChart3, Building2, Laptop, UserCheck, FileSpreadsheet, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function CorporateTraining() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Building2 className="h-10 w-10 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Train Your Entire Team in Compliance Excellence
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            On-site or virtual training programs customized for your firm's needs
          </p>
          <Button asChild size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white font-semibold px-8 h-12 text-base">
            <Link href="/contact">Book a Discovery Call</Link>
          </Button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container -mt-16 relative z-20 mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="h-8 w-8 text-chart-1" />,
              title: "Team Training",
              desc: "Train your compliance, operations, and advisory teams together"
            },
            {
              icon: <Target className="h-8 w-8 text-chart-1" />,
              title: "Customized Curriculum",
              desc: "Focus on your firm's specific compliance challenges"
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-chart-1" />,
              title: "Expert Instructors",
              desc: "Former regulators and experienced CCOs lead training"
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-chart-1" />,
              title: "Measurable Results",
              desc: "Track competency improvements across your team"
            }
          ].map((item, i) => (
            <Card key={i} className="text-center border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex justify-center mb-4 p-3 bg-secondary/50 rounded-xl w-fit mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Training Options */}
      <div className="container mb-20">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">Corporate Training Options</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 className="h-6 w-6" />,
              title: "On-Site Training",
              desc: "Bring expert instructors to your office for immersive, hands-on training sessions tailored to your firm's compliance program and challenges.",
              features: ["1-3 day intensive programs", "Custom curriculum design", "Hands-on policy review", "Team building exercises"]
            },
            {
              icon: <Laptop className="h-6 w-6" />,
              title: "Virtual Training Programs",
              desc: "Live, interactive virtual sessions that bring the classroom experience to your team, regardless of location.",
              features: ["Live instructor-led sessions", "Flexible scheduling", "Recording access", "Interactive Q&A"]
            },
            {
              icon: <UserCheck className="h-6 w-6" />,
              title: "Train-the-Trainer",
              desc: "Certify your internal compliance team to deliver ongoing training using our proven curriculum and materials.",
              features: ["Instructor certification", "Complete training materials", "Ongoing support", "Annual curriculum updates"]
            },
            {
              icon: <FileSpreadsheet className="h-6 w-6" />,
              title: "Employee Assessment",
              desc: "Benchmark your team's compliance knowledge and track improvements over time with comprehensive assessment tools.",
              features: ["Pre and post assessments", "Knowledge gap analysis", "Individual scorecards", "Progress tracking"]
            },
            {
              icon: <Briefcase className="h-6 w-6" />,
              title: "Managed Education",
              desc: "Outsource your entire compliance training program to our team. We handle curriculum, scheduling, delivery, and tracking.",
              features: ["Annual training calendar", "Attendance tracking", "Completion certificates", "Regulatory documentation"]
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Custodian Partnerships",
              desc: "Partner with us to offer compliance education as a value-add service to your RIA clients and prospects.",
              features: ["White-label options", "Volume pricing", "Co-marketing support", "Dedicated account manager"]
            }
          ].map((option, i) => (
            <Card key={i} className="flex flex-col border-primary/10 hover:border-chart-1/30 transition-colors group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-secondary rounded-lg text-chart-1 group-hover:bg-chart-1 group-hover:text-white transition-colors">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{option.desc}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">Ready to Transform Your Team's Compliance Capabilities?</h2>
              <p className="text-lg text-muted-foreground">
                Schedule a discovery call to discuss your training needs and custom program options. We'll help you build a culture of compliance that protects your firm and clients.
              </p>
              <Button asChild size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white font-semibold">
                <Link href="/contact">Book a Discovery Call</Link>
              </Button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/5">
                <h3 className="font-bold text-primary mb-3">Who Benefits</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• RIAs with 5+ employees</li>
                  <li>• Family offices</li>
                  <li>• Broker-dealer OSJs</li>
                  <li>• Custodian platforms</li>
                  <li>• Compliance consultants</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm border border-primary/5">
                <h3 className="font-bold text-primary mb-3">Popular Topics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual compliance training</li>
                  <li>• Marketing rule compliance</li>
                  <li>• Exam preparation</li>
                  <li>• New employee onboarding</li>
                  <li>• Cybersecurity awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
