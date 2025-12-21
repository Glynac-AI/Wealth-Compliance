import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Shield, BookOpen, Users, FileText, Download, Star, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section with Background Image */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: "url('/images/hero-advisor.jpg')"}}></div>
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-chart-1/10 to-transparent pointer-events-none"></div>
        
        <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 text-chart-1 border-chart-1/30 bg-chart-1/10 px-4 py-1 text-sm uppercase tracking-wide">
            The Standard in Compliance Education
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            The Only Modern Institute for <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-chart-3">Wealth Management & Compliance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Practical training, certifications, and real-world playbooks for advisors, operations leaders, and compliance officers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white font-semibold px-8 h-12 text-base">
              <Link href="/courses">Browse Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white px-8 h-12 text-base">
              <Link href="/certifications">Get Certified</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-chart-1" />
              <span>Built with former SEC/FINRA officers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-chart-1" />
              <span>Trusted by RIAs, family offices, and custodians</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Institute Exists */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Why This Institute Exists</h2>
            <p className="text-lg text-muted-foreground">
              The wealth management industry lacks structured, standardized compliance education. We're here to change that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-chart-1" />,
                title: "No Standardized Training",
                description: "Unlike other professions, compliance officers have no universal curriculum or certification path."
              },
              {
                icon: <FileText className="h-8 w-8 text-chart-1" />,
                title: "Fragmented Information",
                description: "RIAs rely on scattered blog posts, webinars, and outdated materials to learn compliance."
              },
              {
                icon: <Shield className="h-8 w-8 text-chart-1" />,
                title: "Audit Reveals Gaps",
                description: "Regulatory examinations consistently find basic compliance failures due to lack of training."
              },
              {
                icon: <Users className="h-8 w-8 text-chart-1" />,
                title: "Tribal Knowledge",
                description: "Compliance expertise is passed informally, leading to inconsistent practices across the industry."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg bg-card hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/5 w-fit rounded-xl">{item.icon}</div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Train with Images */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Who We Train</h2>
            <p className="text-lg text-muted-foreground">
              Structured learning paths for every role in wealth management compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compliance Officers",
                description: "New CCOs and experienced professionals seeking to deepen their expertise and earn certification.",
                link: "/courses?role=cco",
                image: "/images/compliance-officer.png"
              },
              {
                title: "Operations Staff",
                description: "Client service, trading, and operations team members who need compliance knowledge.",
                link: "/courses?role=ops",
                image: "/images/team-collaboration.webp"
              },
              {
                title: "RIA Founders",
                description: "Wealth managers building their own firms who need to understand their compliance obligations.",
                link: "/courses?role=founder",
                image: "/images/wealth-management.png"
              }
            ].map((persona, i) => (
              <Card key={i} className="flex flex-col h-full border-primary/10 hover:border-chart-1/50 transition-colors overflow-hidden group">
                <div className="h-40 bg-muted overflow-hidden">
                  <img 
                    src={persona.image} 
                    alt={persona.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{persona.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group p-0 hover:bg-transparent text-chart-1 hover:text-chart-1/80">
                    <Link href={persona.link} className="flex items-center gap-2">
                      View Learning Path <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs with Certificate Image */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Professional Credentials & Certificates</h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Earn recognized certifications that demonstrate your expertise and commitment to compliance excellence. Our programs are designed by former regulators to reflect real-world requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-chart-1/20 flex items-center justify-center shrink-0 border border-chart-1/30">
                    <Shield className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">CWCP Certification</h3>
                    <p className="text-primary-foreground/70">Certified Wealth Compliance Professional - The industry gold standard.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-chart-1/20 flex items-center justify-center shrink-0 border border-chart-1/30">
                    <FileText className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Course Certificates</h3>
                    <p className="text-primary-foreground/70">Digital badges for each completed course to showcase your skills.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-chart-1/20 flex items-center justify-center shrink-0 border border-chart-1/30">
                    <CheckCircle2 className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">CE Credits</h3>
                    <p className="text-primary-foreground/70">Satisfy annual training requirements with accredited programs.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="/certifications">Explore Certifications</Link>
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-chart-1/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-background rounded-2xl shadow-2xl overflow-hidden border-none">
                  <img 
                    src="/images/certificate.jpg" 
                    alt="CWCP Certificate"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Templates & Tools */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Free Templates & Tools</h2>
              <p className="text-lg text-muted-foreground">
                Practical resources to improve your compliance program today. No credit card required.
              </p>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/resources" className="flex items-center gap-2">
                View All Resources <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-chart-1" />,
                title: "Compliance Playbook",
                description: "Step-by-step guide to building a compliance program from the ground up."
              },
              {
                icon: <Shield className="h-8 w-8 text-chart-1" />,
                title: "Policy Templates",
                description: "Ready-to-use compliance policies tailored for wealth management firms."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-chart-1" />,
                title: "Audit Checklist",
                description: "Comprehensive checklist to prepare for regulatory examinations."
              }
            ].map((resource, i) => (
              <Card key={i} className="border-primary/10 hover:border-chart-1/50 transition-colors hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/5 w-fit rounded-xl">{resource.icon}</div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <Button variant="ghost" className="p-0 text-chart-1 hover:bg-transparent hover:text-chart-1/80 group">
                    Download <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Success Stories with Images */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how professionals are transforming their compliance programs with our training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Compliance Officer",
                company: "Wealth Advisory Group",
                testimonial: "The CWCP certification gave me the structured knowledge I needed to modernize our compliance program. Highly recommended.",
                image: "/images/advisor-client.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "RIA Founder",
                company: "Independent Wealth Partners",
                testimonial: "As a new RIA founder, these courses were invaluable. I learned compliance best practices that saved us from costly mistakes.",
                image: "/images/learning-platform.png"
              }
            ].map((story, i) => (
              <Card key={i} className="border-primary/10 hover:border-chart-1/50 transition-colors overflow-hidden group">
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <CardDescription>{story.role} at {story.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{story.testimonial}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-chart-1 text-chart-1" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{backgroundImage: "url('/images/elearning-features.png')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80"></div>
        
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Transform Your Compliance Program?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join hundreds of professionals who are building stronger compliance practices with our training and certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link href="/courses">Start Learning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
