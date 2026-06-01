"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 bg-accent">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-5xl text-black mb-4">
              Join the Conversation
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Subscribe to receive weekly curated content, exclusive interviews, and early access to new features.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6"
              >
                <p className="text-black font-inter text-lg">
                  Thank you for subscribing. Welcome to Celberity.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-black text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-4 bg-black text-white font-inter text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-black/70">
                Please enter a valid email address.
              </p>
            )}

            <p className="mt-6 text-xs text-black/50">
              By subscribing, you agree to our privacy policy. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
