import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Clock, BarChart, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Courses() {
  const courses = [
    {
      title: "Compliance Foundations",
      level: "Beginner",
      duration: "4 hours",
      modules: 8,
      tags: ["Supervision", "Operations"],
      desc: "Essential compliance knowledge for new and experienced RIA professionals.",
      price: "$299"
    },
    {
      title: "Practical Supervisory Program",
      level: "Intermediate",
      duration: "6 hours",
      modules: 12,
      tags: ["Supervision", "Operations"],
      desc: "Build and implement effective supervisory procedures.",
      price: "$499"
    },
    {
      title: "Form ADV Mastery",
      level: "Advanced",
      duration: "5 hours",
      modules: 10,
      tags: ["Recordkeeping", "Exams"],
      desc: "Deep dive into Form ADV Part 1, 2A, and 2B requirements and best practices.",
      price: "$399"
    },
    {
      title: "Marketing Rule Implementation",
      level: "Intermediate",
      duration: "4.5 hours",
      modules: 9,
      tags: ["Marketing", "Supervision"],
      desc: "Navigate the new SEC Marketing Rule with confidence and practical examples.",
      price: "$349"
    },
    {
      title: "Cybersecurity for Wealth Managers",
      level: "Beginner",
      duration: "3 hours",
      modules: 6,
      tags: ["Cybersecurity", "Operations"],
      desc: "Essential cybersecurity protocols and vendor due diligence for RIAs.",
      price: "$249"
    },
    {
      title: "Books & Records Requirements",
      level: "Intermediate",
      duration: "4 hours",
      modules: 8,
      tags: ["Recordkeeping", "Operations"],
      desc: "Comprehensive guide to maintaining required books and records under the Advisers Act.",
      price: "$299"
    },
    {
      title: "Mock Exam Workshop",
      level: "Advanced",
      duration: "8 hours",
      modules: 15,
      tags: ["Exams", "Supervision"],
      desc: "Prepare for regulatory examinations with simulated audit scenarios.",
      price: "$599"
    },
    {
      title: "Code of Ethics Administration",
      level: "Intermediate",
      duration: "3.5 hours",
      modules: 7,
      tags: ["Supervision", "Operations"],
      desc: "Managing personal trading, gifts, and entertainment policies effectively.",
      price: "$299"
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header with Background Image */}
      <div className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: "url('/images/learning-platform.png')"}}></div>
        <div className="absolute inset-0 bg-shield-pattern opacity-5 pointer-events-none"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Professional Compliance Courses</h1>
          <p className="text-xl text-primary-foreground/80">
            Practical training based on real regulatory examinations and industry best practices
          </p>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="container -mt-10 relative z-20 mb-16">
        <Card className="border-none shadow-xl bg-background">
          <CardHeader className="border-b pb-6">
            <CardTitle className="text-2xl font-serif">Recommended Learning Paths</CardTitle>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">New Compliance Officer</h3>
                <p className="text-sm text-muted-foreground">Start with foundations, then build supervisory skills</p>
                <ol className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">1</span>
                    Compliance Foundations
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">2</span>
                    Form ADV Mastery
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">3</span>
                    Practical Supervisory Program
                  </li>
                </ol>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">Operations Professional</h3>
                <p className="text-sm text-muted-foreground">Focus on day-to-day compliance requirements</p>
                <ol className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">1</span>
                    Compliance Foundations
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">2</span>
                    Recordkeeping & Surveillance
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">3</span>
                    Portfolio Management Compliance
                  </li>
                </ol>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">RIA Founder</h3>
                <p className="text-sm text-muted-foreground">Essential knowledge for running your firm</p>
                <ol className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">1</span>
                    Compliance Foundations
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">2</span>
                    Advertising & Performance Rules
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium p-3 bg-secondary/50 rounded-lg border border-transparent hover:border-chart-1/30 transition-colors">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-chart-1 text-white text-xs font-bold">3</span>
                    Cybersecurity for Wealth Managers
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Filters & List */}
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-2 text-lg font-bold text-primary">
            <Filter className="h-5 w-5" />
            Filter Courses
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-9" />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Difficulty Level</h3>
              <div className="space-y-2">
                {["All Levels", "Beginner", "Intermediate", "Advanced"].map((level, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input type="checkbox" id={`level-${i}`} className="rounded border-input text-chart-1 focus:ring-chart-1" defaultChecked={i === 0} />
                    <label htmlFor={`level-${i}`} className="text-sm font-medium cursor-pointer">{level}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Topics</h3>
              <div className="space-y-2">
                {["Supervision", "Marketing", "Cybersecurity", "Operations", "Exams", "Recordkeeping"].map((topic, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input type="checkbox" id={`topic-${i}`} className="rounded border-input text-chart-1 focus:ring-chart-1" />
                    <label htmlFor={`topic-${i}`} className="text-sm font-medium cursor-pointer">{topic}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground">Showing {courses.length} of {courses.length} courses</div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, i) => (
                <Card key={i} className="flex flex-col hover:shadow-lg transition-all duration-300 border-primary/10 group overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-chart-1/20 to-chart-3/20 overflow-hidden relative">
                    <img 
                      src="/images/elearning-features.png" 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={course.level === "Advanced" ? "destructive" : course.level === "Intermediate" ? "default" : "secondary"} className="bg-opacity-10 text-opacity-100 hover:bg-opacity-20">
                        {course.level}
                      </Badge>
                      <div className="text-lg font-bold text-primary">{course.price}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-chart-1 transition-colors">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{course.desc}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" /> {course.modules} Modules
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag, j) => (
                        <span key={j} className="text-xs bg-secondary px-2 py-1 rounded text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-secondary group-hover:text-primary">
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Need help choosing the right course?</h3>
              <p className="text-muted-foreground mb-6">Our team can help you design a custom learning path for your role and experience level.</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
