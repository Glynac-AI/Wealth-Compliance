import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration placeholder
    // TODO: Connect to backend API
    // await fetch('/api/contact', { method: 'POST', body: formData });
    setIsSubmitted(true);
  };

  return (
    <div className="bg-secondary/30 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/80">
            Have questions? Want to discuss corporate training? We're here to help.
          </p>
        </div>
      </div>

      <div className="container -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold mb-4 text-primary">Message Sent!</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Our team has received your message and will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-bold mb-8 text-primary">Send Us a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="John Smith" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company / Firm</Label>
                          <Input id="company" placeholder="Your Company Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest">I'm Interested In *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="courses">Individual Courses</SelectItem>
                            <SelectItem value="certification">CWCP Certification</SelectItem>
                            <SelectItem value="corporate">Corporate Training</SelectItem>
                            <SelectItem value="resources">Premium Resources</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" placeholder="Tell us about your needs..." className="min-h-[150px]" required />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto bg-chart-1 hover:bg-chart-1/90 text-white">
                        Schedule Call
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-6 text-primary">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-chart-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground mb-1">Email</div>
                      <a href="mailto:info@cwmu.edu" className="text-primary hover:text-chart-1 font-medium transition-colors">info@cwmu.edu</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-chart-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground mb-1">Phone</div>
                      <a href="tel:8005551234" className="text-primary hover:text-chart-1 font-medium transition-colors">(800) 555-1234</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-chart-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground mb-1">Address</div>
                      <address className="not-italic text-primary">
                        123 Financial Plaza<br />
                        New York, NY 10004
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-chart-1">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground mb-1">Hours</div>
                      <div className="text-primary">
                        Mon-Fri: 9am - 5pm EST
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-chart-1/20 bg-chart-1/5 shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">Book a Discovery Call</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Interested in corporate training? Schedule a 30-minute consultation to discuss your needs.
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
