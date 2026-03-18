"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Container from "@/components/shared/Container";

// export const metadata: Metadata = {
//   title: "Contact",
//   description:
//     "Contact Rewan Tech Solutions to discuss your website, app, SaaS, or software project.",
// };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <PageHero
        badge="Contact Us"
        title="Let’s discuss your next digital project"
        description="Whether you need a website, application, SaaS product, or digital solution, we’re happy to discuss your requirements and help you move forward."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-500">
                Get in Touch
              </div>

              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                Talk to our team about your project
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We aim to respond quickly and provide helpful guidance for your business goals.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-cyan-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      hello@rewantechsolutions.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-cyan-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-600 dark:text-slate-300">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  We usually reply within <span className="text-slate-900 dark:text-white">24 hours</span>.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/5">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="text-cyan-500" size={40} />
                  <h3 className="mt-4 text-2xl font-semibold">
                    Message sent successfully
                  </h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Thank you for contacting us. We will respond shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold">Send us a message</h3>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />

                    <input
                      type="text"
                      placeholder="Company / Business"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />

                    <textarea
                      placeholder="Tell us about your project"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none dark:border-white/10 dark:bg-slate-950 dark:text-white"
                    />

                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}