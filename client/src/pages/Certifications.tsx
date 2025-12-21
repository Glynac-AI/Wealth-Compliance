import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, BookOpen, Clock, GraduationCap, Users, Star as StarIcon, Book as BookIcon } from "lucide-react";
import { Link } from "wouter";

export default function Certifications() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero with Background Image */}
      <div className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{backgroundImage: "url('/images/certificate.jpg')"}}></div>
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Award className="h-10 w-10 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Become a Certified Wealth Compliance Professional
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            The industry's premier certification validating comprehensive compliance expertise
          </p>
        </div>
      </div>

      {/* Main Certification Card with Image */}
      <div className="container -mt-16 relative z-20 mb-20">
        <Card className="border-none shadow-2xl overflow-hidden">
          <div className="bg-secondary/50 p-1 border-b">
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-white">CWCP</Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Industry Recognized</Badge>
            </div>
          </div>
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Certified Wealth Compliance Professional (CWCP)</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The industry's premier certification for wealth management compliance officers. Validates comprehensive knowledge across supervision, marketing, operations, and regulatory requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <StarIcon className="h-5 w-5 text-chart-1" /> Why Certification Matters
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Validates your expertise to employers and clients",
                        "Demonstrates commitment to professional development",
                        "Increases earning potential and career opportunities",
                        "Provides structured path to mastery"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <BookIcon className="h-5 w-5 text-chart-1" /> Competencies Validated
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Investment Advisers Act and SEC Rules",
                        "State Registration and Regulation",
                        "Fiduciary Duty and Best Practices",
                        "Supervisory Procedures and Implementation",
                        "Marketing Rule and Advertising Compliance",
                        "Books and Records Requirements"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm font-medium text-chart-1 pl-7">+ 4 additional competency areas</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-secondary/30 rounded-2xl p-6 border border-primary/5 sticky top-24 space-y-6">
                  <div className="rounded-lg overflow-hidden border border-primary/10">
                    <img 
                      src="/images/certificate.jpg" 
                      alt="CWCP Certificate"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Investment</div>
                    <div className="text-4xl font-bold text-primary mb-2">$1,499</div>
                    <div className="text-sm text-muted-foreground">Includes exam & certificate</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                      <div className="text-sm font-medium">Exam Structure</div>
                      <div className="text-sm text-muted-foreground">120 Questions</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                      <div className="text-sm font-medium">Duration</div>
                      <div className="text-sm text-muted-foreground">180 Minutes</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                      <div className="text-sm font-medium">Passing Score</div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg border">
                      <div className="text-sm font-medium">Annual CE</div>
                      <div className="text-sm text-muted-foreground">20 Hours</div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-chart-1 hover:bg-chart-1/90 text-white font-bold mb-3">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Payment plans available for qualified candidates
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Requirements Steps */}
      <div className="container mb-20">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">Certification Requirements</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Experience / Education",
                desc: "Minimum 2 years of compliance or advisory experience, OR completion of Compliance Foundations course."
              },
              {
                step: 2,
                title: "Prerequisites",
                desc: "Complete all prerequisite courses or demonstrate equivalent knowledge through assessment."
              },
              {
                step: 3,
                title: "Examination",
                desc: "Pass the CWCP examination with a score of 75% or higher. Exam is proctored online."
              },
              {
                step: 4,
                title: "Ethics",
                desc: "Agree to adhere to the Code of Professional Conduct and Ethics Standards."
              },
              {
                step: 5,
                title: "Maintenance",
                desc: "Complete 20 hours of continuing education annually to maintain certification status."
              }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 md:text-right">
                  {i % 2 !== 0 && (
                    <>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </>
                  )}
                </div>
                
                <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-chart-1 text-white font-bold text-lg shadow-lg border-4 border-background">
                  {item.step}
                </div>
                
                <div className="flex-1">
                  {i % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Packages */}
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Corporate Certification Packages</h2>
            <p className="text-lg text-muted-foreground">
              Certify your entire compliance team with volume discounts and customized training programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                size: "Small",
                teams: "5-10 professionals",
                price: "$1,199",
                features: ["Bulk pricing", "Dedicated support", "Custom curriculum"]
              },
              {
                size: "Medium",
                teams: "11-25 professionals",
                price: "$999",
                features: ["Bulk pricing", "Dedicated support", "Custom curriculum", "Team dashboard"]
              },
              {
                size: "Enterprise",
                teams: "25+ professionals",
                price: "Custom",
                features: ["Custom pricing", "Executive support", "Custom curriculum", "Team dashboard", "API access"]
              }
            ].map((pkg, i) => (
              <Card key={i} className={`border-primary/10 ${i === 1 ? 'ring-2 ring-chart-1 relative' : ''}`}>
                {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-chart-1 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</div>}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.size}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.teams}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">{pkg.price}<span className="text-sm text-muted-foreground">/person</span></div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={i === 1 ? "default" : "outline"} className="w-full">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container py-20">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">What Certified Professionals Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "The CWCP certification transformed my career. I went from operations to Chief Compliance Officer within 18 months.",
              author: "Jennifer Park",
              title: "Chief Compliance Officer",
              company: "Wealth Advisory Group"
            },
            {
              quote: "This certification gave me the credibility I needed to launch my own RIA. Highly recommended for anyone serious about compliance.",
              author: "David Martinez",
              title: "Founder & CCO",
              company: "Independent Wealth Partners"
            }
          ].map((testimonial, i) => (
            <Card key={i} className="border-primary/10">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="h-4 w-4 fill-chart-1 text-chart-1" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title} at {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
