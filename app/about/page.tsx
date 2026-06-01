import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Celberity, a premium editorial magazine exploring culture, fashion, travel, and the art of living well.",
};

const team = [
  {
    name: "Alexandra Chen",
    role: "Editor-in-Chief",
    image: "https://images.unsplash.com/photo-1494790308377-be9c29b29330?w=400",
  },
  {
    name: "Marcus Webb",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Sofia Reyes",
    role: "Senior Editor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "James Morrison",
    role: "Contributing Editor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 text-center">
          <FadeIn>
            <span className="text-xs font-inter uppercase tracking-widest text-accent mb-6 block">
              Our Story
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-6">
              About Celberity
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A premium editorial magazine dedicated to the art of living well —
              exploring culture, fashion, travel, and the moments that define us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl mb-6">Our Mission</h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Celberity was founded on a simple belief: that quality content
                    enriches lives. In an age of endless scrolling and fleeting
                    attention, we champion the long-form, the considered, and the
                    beautifully crafted.
</p>
                  <p>
                    Our editorial vision draws inspiration from the great editorial
                    magazines of the past — their attention to typography, their
                    commitment to thoughtful design, their refusal to compromise on
                    quality. We believe the magazine format, reimagined for the
                    digital age, remains one of the most powerful vehicles for
                    storytelling.
</p>
                  <p>
                    Every piece we publish is designed to inform, inspire, and
                    initiate conversation. We cover the intersection of culture and
                    lifestyle with equal parts curiosity and expertise, presenting
                    perspectives that challenge assumptions and expand horizons.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                  alt="Our editorial vision"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-gray-900/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl mb-4">Our Team</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                The voices behind Celberity — writers, editors, and creatives
                passionate about quality storytelling.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <h3 className="font-playfair text-xl mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have a story tip, feedback, or just want to say hello? We'd love
                to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:editorial@celberity.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-inter text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                >
                  Email Us
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-inter text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
