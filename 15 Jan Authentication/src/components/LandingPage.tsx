import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
   Shield,
   Key,
   Lock,
   UserCheck,
   Fingerprint,
   RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col">
         {/* Hero Section - First Screen */}
         <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-background to-background/95">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
            <div className="container relative z-10 px-4 md:px-6">
               <div className="pl-20 grid gap-1 lg:grid-cols-2 place-items-center">
                  <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
                     <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl">
                           Secure Authentication
                           <span className="block text-primary">
                              for Modern Apps
                           </span>
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground text-lg sm:text-xl mx-auto lg:mx-0">
                           Powerful, secure, and easy-to-implement
                           authentication solution for your applications. Get
                           started in minutes.
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                           size="lg"
                           className="text-base"
                           onClick={() => navigate("/signin")}
                        >
                           Get Started (Firebase signin)
                        </Button>
                        <Button
                           size="lg"
                           variant="outline"
                           className="text-base"
                        >
                           View Documentation
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Features Section - Second Screen */}
         <section className="min-h-screen py-24 sm:py-32">
            <div className="container px-4 md:px-6">
               <div className="text-center space-y-4 mb-16">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                     Everything You Need
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
                     Comprehensive authentication features to secure your
                     application
                  </p>
               </div>
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Advanced Security</h3>
                        <p className="text-muted-foreground">
                           Enterprise-grade security with multiple
                           authentication factors and encryption at rest and in
                           transit.
                        </p>
                     </div>
                  </div>
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <Key className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">
                           Multiple Auth Methods
                        </h3>
                        <p className="text-muted-foreground">
                           Support for passwords, social logins, biometrics, and
                           hardware security keys.
                        </p>
                     </div>
                  </div>
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <Lock className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Role-Based Access</h3>
                        <p className="text-muted-foreground">
                           Granular access control with custom roles and
                           permissions for your users.
                        </p>
                     </div>
                  </div>
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <UserCheck className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">User Management</h3>
                        <p className="text-muted-foreground">
                           Comprehensive tools for managing user accounts,
                           roles, and permissions.
                        </p>
                     </div>
                  </div>
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <Fingerprint className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">
                           Biometric Authentication
                        </h3>
                        <p className="text-muted-foreground">
                           Support for fingerprint, face recognition, and other
                           biometric methods.
                        </p>
                     </div>
                  </div>
                  <div className="relative group rounded-lg shadow-sm hover:shadow-md transition-all duration-50">
                     <div className="absolute -inset-px bg-gradient-to-r from-primary to-primary-foreground rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500" />
                     <div className="relative bg-card rounded-lg p-8 space-y-4 h-full border">
                        <div className="inline-flex rounded-lg bg-primary/10 p-4">
                           <RefreshCw className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Token Management</h3>
                        <p className="text-muted-foreground">
                           Automatic token refresh and session management for
                           seamless authentication.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Pricing Section - Third Screen */}
         <section className="min-h-screen relative flex items-center justify-center py-20 sm:py-20">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
            <div className="container relative z-10 px-4 md:px-6">
               <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
                  <div className="space-y-4">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Get Started?
                     </h2>
                     <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
                        Join thousands of developers who trust our
                        authentication solution. Start securing your
                        applications today.
                     </p>
                  </div>
                  <div className="w-full max-w-sm space-y-2">
                     <form className="flex gap-2">
                        <Input
                           className="h-11"
                           placeholder="Enter your email"
                           type="email"
                        />
                        <Button type="submit" size="lg">
                           Get Started
                        </Button>
                     </form>
                     <p className="text-xs text-muted-foreground">
                        Free plan available. No credit card required.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
