"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BetaSignup() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Add your form submission logic here
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    // <p> hello </p>
    <div className="min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center p-4 font-mono">
      {/* Logo */}
      {/* <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20at%2012.17.57%E2%80%AFPM%20(2)-XRfrCWlAECKOPbkm2YGibFElxtnSNm.png"
        alt="Logo"
        className="w-8 h-8 mb-6"
        height={8}
        width={10}
      /> */}

      {/* Heading */}
      <h1 className="text-white text-xl mb-8">Join the waitlist</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="space-y-1">
          <label className="text-xs text-gray-400">Email</label>
          <Input
            type="email"
            required
            className="bg-transparent border border-gray-800 rounded text-white h-10 px-3 focus:border-gray-600 focus:ring-0"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-400">Full name</label>
          <Input
            type="text"
            required
            className="bg-transparent border border-gray-800 rounded text-white h-10 px-3 focus:border-gray-600 focus:ring-0"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-400">Company name</label>
          <Input
            type="text"
            required
            className="bg-transparent border border-gray-800 rounded text-white h-10 px-3 focus:border-gray-600 focus:ring-0"
          />
        </div>

        <div className="flex items-center justify-center pt-4">
          <Button
            type="submit"
            disabled={loading}
            className="bg-white hover:bg-gray-100 text-black rounded px-4 py-2 text-sm font-normal w-full"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* Footer */}
      <div className="fixed bottom-6 flex items-center gap-2 text-xs text-gray-500">
        <span className="w-4 h-4 rounded-full border border-gray-700 flex items-center justify-center">
          ⚡
        </span>
        Beta release • Invite only
      </div>
    </div>
  );
}
