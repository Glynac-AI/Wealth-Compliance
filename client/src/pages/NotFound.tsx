import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-none shadow-xl text-center">
        <CardContent className="pt-12 pb-12">
          <div className="mb-6 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-red-50 flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-red-500" />
            </div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">404</h1>
          <h2 className="text-xl font-medium text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="bg-chart-1 hover:bg-chart-1/90 text-white">
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
