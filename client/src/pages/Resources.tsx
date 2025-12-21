import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, CheckSquare, Briefcase, Lock, Shield, FileCheck, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Download className="h-8 w-8 text-chart-1" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Templates, Tools & Resources</h1>
          <p className="text-xl text-primary-foreground/80">
            Practical resources to strengthen your compliance program
          </p>
        </div>
      </div>

      {/* Free Resources */}
      <div className="container -mt-10 relative z-20 mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary">Free Resources</h2>
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1">No Cost</Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FileText className="h-6 w-6 text-chart-1" />,
              title: "Compliance Calendar 2024",
              desc: "Never miss a deadline with our comprehensive compliance calendar covering all federal and state filing requirements.",
              type: "PDF",
              stats: "1,247+ downloads"
            },
            {
              icon: <CheckSquare className="h-6 w-6 text-chart-1" />,
              title: "Marketing Review Checklist",
              desc: "Step-by-step checklist for reviewing marketing materials under the new Marketing Rule. Includes red flags.",
              type: "Checklist",
              stats: "892+ downloads"
            },
            {
              icon: <Briefcase className="h-6 w-6 text-chart-1" />,
              title: "Audit Readiness Kit",
              desc: "Complete preparation guide for SEC and state examinations. Includes document request lists and interview prep.",
              type: "Kit",
              stats: "1,056+ downloads"
            },
            {
              icon: <FileCheck className="h-6 w-6 text-chart-1" />,
              title: "Annual Review Template",
              desc: "Comprehensive template for conducting your required annual compliance review. Covers all testing areas.",
              type: "Template",
              stats: "734+ downloads"
            }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col border-none shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-secondary rounded-lg">{item.icon}</div>
                  <Badge variant="outline" className="text-xs">{item.type}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <div className="text-xs text-muted-foreground font-medium">Downloaded by {item.stats}</div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button className="w-full bg-chart-1 hover:bg-chart-1/90 text-white">
                  <Download className="mr-2 h-4 w-4" /> Download Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Premium Resources */}
      <div className="bg-secondary/30 py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-primary">Premium Resources</h2>
            <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 hover:bg-chart-1/20 px-3 py-1">Professional Tools</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: "Incident Response Playbook",
                desc: "Complete cybersecurity incident response procedures with step-by-step workflows, notification templates, and regulatory reporting guidance.",
                price: "$299",
                type: "Kit",
                color: "bg-slate-800"
              },
              {
                icon: <FileText className="h-8 w-8 text-white" />,
                title: "RIA Compliance Policy Library",
                desc: "Professionally drafted compliance policies covering all required areas. Fully customizable Word documents with implementation guidance.",
                price: "$799",
                type: "Template",
                color: "bg-chart-1"
              },
              {
                icon: <Lock className="h-8 w-8 text-white" />,
                title: "Vendor Due Diligence Toolkit",
                desc: "Standardized vendor assessment questionnaires, risk rating matrices, and ongoing monitoring procedures for all service providers.",
                price: "$199",
                type: "Kit",
                color: "bg-slate-700"
              }
            ].map((item, i) => (
              <Card key={i} className="flex flex-col border-none shadow-lg overflow-hidden group">
                <div className={`${item.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">{item.icon}</div>
                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-none">{item.type}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="text-3xl font-bold">{item.price}</div>
                </div>
                <CardContent className="flex-1 pt-6">
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white group-hover:border-primary">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Purchase
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Development CTA */}
      <div className="container py-20">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">Need Custom Templates?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We can create custom policies, procedures, and compliance documents tailored to your firm's specific needs and business model.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Request Custom Development</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
