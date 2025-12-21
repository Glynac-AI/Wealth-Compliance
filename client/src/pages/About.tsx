import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Target, Users, Award, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <ShieldCheck className="h-10 w-10 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            About the Institute
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Building the future of compliance education for wealth management
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="container -mt-16 relative z-20 mb-20">
        <Card className="border-none shadow-2xl bg-background text-center p-8 md:p-12">
          <CardContent>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To establish the wealth management industry's first comprehensive institute for compliance education, providing structured training, professional certifications, and practical resources that transform how compliance knowledge is developed and maintained.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Why We Exist */}
      <div className="container mb-20">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">Why We Exist</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg text-red-600">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-red-900">The Problem</h3>
              </div>
              <p className="text-red-800/80 leading-relaxed">
                Unlike other financial services sectors, RIAs have no standardized path for compliance training. New compliance officers learn through trial and error, fragmented resources, and tribal knowledge passed down informally. This leads to inconsistent practices and avoidable regulatory issues.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-chart-1">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">Our Solution</h3>
              </div>
              <p className="text-primary/80 leading-relaxed">
                The Wealth Compliance Institute provides the missing infrastructure: structured curricula designed by former regulators, professional certifications that validate expertise, and practical tools built from actual examination findings. We're raising the bar for the entire industry.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary/50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-chart-1 mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground font-medium">Professionals Trained</div>
            </div>
            <div className="bg-secondary/50 p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-chart-1 mb-2">150+</div>
              <div className="text-sm text-muted-foreground font-medium">CWCP Certifications</div>
            </div>
            <div className="bg-secondary/50 p-8 rounded-2xl text-center col-span-2">
              <div className="text-4xl font-bold text-chart-1 mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Student Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Catherine Reynolds",
                role: "Founder & Director",
                bio: "Former SEC Branch Chief with 18 years of regulatory experience. Catherine founded the Wealth Compliance Institute to address the critical gap in professional compliance education."
              },
              {
                name: "Marcus Johnson",
                role: "Chief Curriculum Officer",
                bio: "Former CCO at a multi-billion dollar RIA and FINRA examiner. Marcus designs practical, real-world training programs based on 20 years of compliance experience."
              },
              {
                name: "Dr. Priya Sharma",
                role: "Head of Certification",
                bio: "Educational psychologist and former CFA Institute program director. Priya brings expertise in professional credentialing and competency assessment."
              },
              {
                name: "James Mitchell",
                role: "Director of Training",
                bio: "Enterprise learning specialist with experience training compliance teams at major custodians and broker-dealers. James leads our corporate training programs."
              }
            ].map((member, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-8 text-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-1">{member.name}</h3>
                  <div className="text-sm font-medium text-chart-1 mb-4">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Board */}
      <div className="container py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Advisory Board</h2>
          <p className="text-lg text-muted-foreground">
            Our advisory board brings decades of regulatory experience and industry expertise to ensure our training remains current, practical, and aligned with regulatory expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Daniel Krasner",
              role: "Former SEC Commissioner",
              desc: "Served as SEC Commissioner from 2015-2020. Currently advises financial services firms on regulatory matters."
            },
            {
              name: "Rachel Thompson",
              role: "Former FINRA Director",
              desc: "25 years at FINRA culminating as Director of Investment Adviser Regulation. Expert in examination practices."
            },
            {
              name: "Steven Park",
              role: "CCO, $12B Family Office",
              desc: "Chief Compliance Officer at one of the nation's largest family offices. Brings practical perspective from the front lines."
            }
          ].map((advisor, i) => (
            <div key={i} className="flex gap-4 items-start p-6 bg-background border rounded-xl">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0 font-bold text-primary">
                {advisor.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-primary">{advisor.name}</h3>
                <div className="text-sm text-chart-1 mb-2">{advisor.role}</div>
                <p className="text-sm text-muted-foreground">{advisor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground py-20 text-center">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Whether you're a compliance professional looking to advance your career or a firm seeking to strengthen your compliance culture, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white font-semibold">
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
