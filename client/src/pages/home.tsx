import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "../../../assets/hero_background.jpg";

export default function Home() {
  return (
    <div className="pt-16 bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Digital transformation"
            className="h-full w-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-950/80" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#0B79D4]/35 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-24">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-100 ring-1 ring-white/20">
              Industry Specific AI Solutions
            </span>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block text-slate-100">JASWIN AI Solutions</span>
              <span className="py-2.5 px-0 mt-2 block bg-gradient-to-r from-[#4FC3F7] via-[#0B79D4] to-[#42A5F5] bg-clip-text text-transparent">
                From strategy to intelligent systems.
              </span>
            </h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-200/90">
              We help forward-thinking organisations design, build and operate
              secure, scalable digital platforms — with the right mix of domain
              expertise, cloud-native engineering and AI.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button className="rounded-full bg-[#0B79D4] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(11,121,212,0.55)] hover:bg-[#0a68b5] hover:-translate-y-0.5 transition-transform duration-150">
                  Let&apos;s talk
                </Button>
              </Link>
              <Link href="/solutions/turnkey-projects">
                <Button
                  variant="outline"
                  className="rounded-full border-white/50 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/15 hover:text-white hover:-translate-y-0.5 transition-transform duration-150"
                >
                  Explore solutions
                </Button>
              </Link>
            </div>

            {/* Small stat strip */}
            <div className="mt-4 grid gap-3 text-xs text-slate-200/80 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-[0.7rem] uppercase tracking-wide text-slate-300/80">
                  Built for Industry-Specific AI Solutions
                </div>
                <div className="text-sm font-semibold text-white">
                  Risk-aware architectures
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-[0.7rem] uppercase tracking-wide text-slate-300/80">
                  Cloud-native
                </div>
                <div className="text-sm font-semibold text-white">
                  Secure &amp; scalable by design
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-[0.7rem] uppercase tracking-wide text-slate-300/80">
                  AI-first
                </div>
                <div className="text-sm font-semibold text-white">
                  Practical, production-ready AI
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Accent / mini feature list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex-1"
          >
            <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-[0_18px_40px_rgba(15,23,42,0.65)]">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-100">
                Why teams work with JASWIN
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-100">
                <li className="flex items-start gap-2">
                  <Rocket className="mt-0.5 h-4 w-4 text-[#4FC3F7]" />
                  <div>
                    <div className="font-semibold">Idea to MVP, fast</div>
                    <p className="text-xs text-slate-200/80">
                      Rapid prototyping and delivery for pilots and proof of
                      concepts.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="mt-0.5 h-4 w-4 text-[#FFE082]" />
                  <div>
                    <div className="font-semibold">Production-grade reliability</div>
                    <p className="text-xs text-slate-200/80">
                      Cloud, SRE and monitoring baked in from day one.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-[#B39DDB]" />
                  <div>
                    <div className="font-semibold">Domain-led consulting</div>
                    <p className="text-xs text-slate-200/80">
                      Industry-Specific AI Solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION / INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-5"
            >
              <h2 className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0B79D4]">
                Our mission
                <span className="h-px w-10 bg-[#0B79D4]/40" />
              </h2>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Bridging domain depth with modern engineering.
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-700">
                <p>
                  JASWIN AI Solutions is a technology and consulting partner
                  founded by leaders from BFSI, IT and public-sector
                  digitisation — backed by a team of engineers, architects and
                  domain specialists.
                </p>
                <p>
                  We focus on outcomes: resilient systems, better customer
                  journeys and real productivity gains. From core banking and
                  lending to learning platforms and government services, we work
                  where reliability and compliance matter.
                </p>
                <p>
                  Whether it&apos;s cloud migration, greenfield product
                  development or AI-driven automation, we design end-to-end
                  solutions that your teams can trust and your customers can
                  feel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#0B79D4]/20 via-sky-200/30 to-transparent blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating on digital products"
                  className="relative h-full w-full rounded-3xl border border-slate-100 object-cover shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION TO VELOCITY / FEATURES */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              From <span className="text-[#0B79D4]">vision</span> to{" "}
              <span className="bg-gradient-to-r from-[#0B79D4] to-sky-400 bg-clip-text text-transparent">
                velocity
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
              We plug into your team with battle-tested frameworks for building,
              launching and scaling digital products in regulated environments.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                0 → MVP
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Rapid discovery, architecture and prototyping to validate and
                launch your first version in weeks, not quarters.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                AI &amp; data in the loop
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Practical AI and analytics embedded into workflows — from
                scoring and routing to personalised experiences.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
              className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Future-ready platforms
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Modular, API-first architectures that keep pace with regulation,
                scale and new customer demands.
              </p>
            </motion.div>
          </div>

          {/* CTA BAND */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            className="mt-14 rounded-3xl bg-gradient-to-r from-[#0B79D4] via-sky-500 to-[#0B79D4] px-6 py-8 text-center text-white shadow-[0_16px_40px_rgba(15,23,42,0.25)]"
          >
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to design your next digital step?
              </h2>
              <p className="text-sm sm:text-base text-sky-100">
                Whether you&apos;re modernising legacy systems or launching a
                new product line, we&apos;ll partner with you from discovery to
                run.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Link href="/contact">
                  <Button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0B79D4] shadow-[0_10px_26px_rgba(15,23,42,0.30)] hover:bg-slate-100 hover:-translate-y-0.5 transition-transform duration-150">
                    Schedule a conversation
                  </Button>
                </Link>
                <Link href="/consulting">
                  <Button
                    variant="outline"
                    className="rounded-full border-white/70 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/15 hover:-translate-y-0.5 transition-transform duration-150"
                  >
                    View consulting capabilities
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
