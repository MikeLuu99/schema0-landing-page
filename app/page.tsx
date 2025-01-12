"use client";

import Image from "next/image";
import {
  Upload,
  Cloud,
  Database,
  LayoutDashboard,
  Wand2,
  ArrowUpRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { Footer } from "@/components/footer";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-black text-white px-4 py-1 rounded-lg mx-1">
    {children}
  </span>
);

interface DemoItem {
  title: string;
  description: string;
  url: string;
}

interface UseCase {
  title: string;
  description: string;
  icon: "Cloud" | "Database" | "LayoutDashboard" | "Wand2";
}

export default function LandingPage() {
  const [openSheet, setOpenSheet] = useState<string | null>(null);

  const handleSheetClose = () => {
    setOpenSheet(null);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const demoItems: DemoItem[] = [
    {
      title: "SCHEMA DESIGN_",
      description:
        "Design your database schema and workflows using our intuitive interface.",
      url: "https://ik.imagekit.io/ainolew229/Screenshot%202025-01-12%20at%201.53.41%20PM.png?updatedAt=1736721210782",
    },
    {
      title: "SQL BUILDER_",
      description:
        "Build your custom ERP solution with automated code generation.",
      url: "https://ik.imagekit.io/ainolew229/Screenshot%202025-01-12%20at%202.35.58%20PM.png?updatedAt=1736721375696",
    },
    {
      title: "CLOUD DEPLOY_",
      description: "Deploy your application to the cloud with one click.",
      url: "https://ik.imagekit.io/ainolew229/Screenshot%202025-01-12%20at%202.31.56%20PM.png?updatedAt=1736721210797",
    },
  ];

  const useCases: UseCase[] = [
    {
      title: "Move your legacy business to the cloud",
      description:
        "Seamlessly migrate your existing spreadsheet-based operations to a modern, cloud-native ERP solution.",
      icon: "Cloud",
    },
    {
      title: "AI solution for the schema for your databases",
      description:
        "Leverage AI to automatically generate optimized database schemas from your existing data structures.",
      icon: "Database",
    },
    {
      title: "One platform to manage all of your operations",
      description:
        "Centralize your business operations with an integrated platform that connects all your workflows.",
      icon: "LayoutDashboard",
    },
    {
      title: "No-code solution for automations and functions",
      description:
        "Build powerful automation workflows and custom functions without writing a single line of code.",
      icon: "Wand2",
    },
  ];

  return (
    <div className="min-h-screen bg-[#efe6e0] text-black relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5" />

        {/* Radial Blurs */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-4 z-50">
        <Logo />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight mb-8 leading-tight">
            TRANSFORM FROM <HighlightText>SPREADSHEETS</HighlightText>
            <br />
            TO <HighlightText>ERP</HighlightText>
          </h1>
        </motion.div>

        {/* Demo Images */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-4 mb-12 max-w-7xl mx-auto"
        >
          {demoItems.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Sheet
                open={openSheet === item.title}
                onOpenChange={(open) =>
                  open ? setOpenSheet(item.title) : setOpenSheet(null)
                }
              >
                <SheetTrigger asChild>
                  <Card className="backdrop-blur-xl bg-white/30 border-white/40 overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-black/5 backdrop-blur-sm p-2 font-mono text-sm border-b border-white/20">
                        {item.title}
                      </div>
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={item.url}
                          alt={`${item.title} demo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </SheetTrigger>
                <SheetContent
                  className="fixed inset-0 flex items-center justify-center bg-black/50 border-none p-0"
                  onClick={handleSheetClose}
                >
                  <div
                    className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-3xl w-full mx-4"
                    onClick={handleContentClick}
                  >
                    <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
                      <Image
                        src={item.url}
                        alt={`${item.title} demo large`}
                        fill
                        className="object-cover rounded-lg shadow-xl"
                      />
                    </div>
                    <h3 className="text-2xl font-mono font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-black/70 max-w-2xl text-center">
                      {item.description}
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-xl bg-white/40 border-white/40 shadow-lg">
            <CardContent className="p-6">
              <div className="border border-white/40 rounded-lg p-8 backdrop-blur-sm bg-white/20">
                <Upload className="mx-auto h-10 w-10 text-black/70 mb-4" />
                <p className="text-sm text-black/70 mb-6">
                  Upload your spreadsheet or start from scratch
                </p>
                <Button
                  size="lg"
                  className="bg-black hover:bg-black/90 text-white font-mono shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  GENERATE YOUR ERP NOW
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mt-8 text-black/70 text-lg"
        >
          Transform your business data into a powerful ERP system using AI.
          Deploy instantly to your preferred cloud provider.
        </motion.p>
      </div>

      {/* Use Cases Section */}
      <div className="bg-black text-white py-24 rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-mono mb-16 text-center">
            USE CASES_
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="group relative h-full bg-[#f3ede9] border border-white/10 hover:border-white/20 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        {useCase.icon === "Cloud" && (
                          <Cloud className="w-5 h-5 text-black" />
                        )}
                        {useCase.icon === "Database" && (
                          <Database className="w-5 h-5 text-black" />
                        )}
                        {useCase.icon === "LayoutDashboard" && (
                          <LayoutDashboard className="w-5 h-5 text-black" />
                        )}
                        {useCase.icon === "Wand2" && (
                          <Wand2 className="w-5 h-5 text-black" />
                        )}
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-black/40 group-hover:text-black/60 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black/90">
                      {useCase.title}
                    </h3>
                    <p className="text-black/60">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
