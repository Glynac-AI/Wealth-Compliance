import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Certifications", path: "/certifications" },
    { name: "Corporate Training", path: "/corporate-training" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl text-primary hover:opacity-90 transition-opacity">
            <ShieldCheck className="h-8 w-8 text-chart-1" />
            <span className="hidden sm:inline-block">Compliance Wealth Management University</span>
            <span className="sm:hidden">CWMU</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.path ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-background p-4 shadow-lg animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted",
                    location === item.path ? "bg-muted text-primary font-bold" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <Link href="/get-started" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif font-bold text-xl">
              <ShieldCheck className="h-6 w-6 text-chart-1" />
              <span>CWMU</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              The Only modern institute for wealth management & compliance. Practical training, certifications, and real-world playbooks.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social placeholders */}
              <div className="h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 cursor-pointer transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 cursor-pointer transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-chart-1">Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/certifications" className="hover:text-white transition-colors">CWCP Certification</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Individual Courses</Link></li>
              <li><Link href="/corporate-training" className="hover:text-white transition-colors">Corporate Training</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resource Library</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-chart-1">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-chart-1">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-chart-1" />
                <span>123 Financial Plaza<br />New York, NY 10004</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-chart-1" />
                <span>(800) 555-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-chart-1" />
                <span>info@cwmu.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Compliance Wealth Management University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
