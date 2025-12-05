import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  Github,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M18.5 4L13.7 10.1L19 20H15.8L12.1 13.3L7.7 20H5.5L10.5 13.2L5.2 4H8.4L11.8 10L16 4H18.5Z"
      fill="currentColor"
    />
  </svg>
);
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/jaswin-tech",
    },
    { name: "X", icon: XLogo, href: "https://twitter.com/jaswintech" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/jaswintech" },
    { name: "GitHub", icon: Github, href: "https://github.com/jaswintech" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setShowThankYou(false);

    try {
      const response = await fetch(
        "https://resend-backend.netlify.app/.netlify/functions/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      const success = response.ok && result.success;

      if (success) {
        setShowThankYou(true);
        toast({
          title: "Message sent",
          description:
            "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        reset();
        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description:
          "We couldn't send your message. Please try again or email us at info@jaswins.com.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* subtle background blobs / accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-10 h-64 w-64 rounded-full bg-[#0B79D4]/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-40 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/3 h-60 w-60 rounded-full bg-[#0B79D4]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#0B79D4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0B79D4]">
            Contact us
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s build what&apos;s next, together
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-600">
            Share a bit about your use case and we&apos;ll connect you with the
            right JASWIN specialist for BFSI, EdTech, eGovernance or AI-led
            solutions.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)]">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-2xl bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.12)] border border-slate-100"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Tell us about your project
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  The more context you share, the better we can prepare before we
                  speak.
                </p>
              </div>

              {showThankYou && (
                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  Message sent
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs font-medium text-slate-700">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className="h-10 text-sm border-slate-200 focus-visible:ring-[#0B79D4]"
                  placeholder="Your full name"
                  {...register("name", {
                    required: "Please enter your full name.",
                    minLength: {
                      value: 3,
                      message: "Name should be at least 3 characters.",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-medium text-slate-700">
                  Work Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="h-10 text-sm border-slate-200 focus-visible:ring-[#0B79D4]"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone & Company */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label
                    htmlFor="phone"
                    className="text-xs font-medium text-slate-700"
                  >
                    Phone (optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className="h-10 text-sm border-slate-200 focus-visible:ring-[#0B79D4]"
                    placeholder="+91 98765 43210"
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9+\-\s()]*$/,
                        message: "Please enter a valid phone number.",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label
                    htmlFor="company"
                    className="text-xs font-medium text-slate-700"
                  >
                    Company (optional)
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="h-10 text-sm border-slate-200 focus-visible:ring-[#0B79D4]"
                    placeholder="Company or organisation name"
                    {...register("company", {
                      maxLength: {
                        value: 120,
                        message: "Company name is too long.",
                      },
                    })}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500">
                      {errors.company.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <Label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-700"
                >
                  How can we help? <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="text-sm border-slate-200 focus-visible:ring-[#0B79D4]"
                  placeholder="Briefly describe your use case, current challenges or the outcomes you are aiming for."
                  {...register("message", {
                    required: "Please enter your message.",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters.",
                    },
                  })}
                />
                {errors.message && (
                  <p className="text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Hint */}
              <p className="text-[11px] text-slate-400">
                By submitting this form you agree to be contacted by JASWIN AI
                Solutions regarding your enquiry.
              </p>

              {/* Submit */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0B79D4] hover:bg-[#0a68b5] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_6px_16px_rgba(11,121,212,0.45)] flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact info + social */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-[0_16px_40px_rgba(15,23,42,0.10)] border border-slate-100"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              Contact information
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Prefer to talk directly? Reach us via phone, email or visit us at
              our office.
            </p>

            <div className="mt-5 space-y-4 text-sm">
              {/* Location */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify.center rounded-full bg-[#0B79D4]/10">
                  <MapPin className="h-4 w-4 text-[#0B79D4] ml-[10px]" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    GALA NO. 06/A, Goyal Industrial Premises, <br />
                    J-514, MIDC, Bhosari, Pune – 411039
                  </p>
                  <a
                    href="https://maps.app.goo.gl/vUgzqtmhfsvfZp45A?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-xs font-medium text-[#0B79D4] hover:underline"
                  >
                    View on Maps
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0B79D4]/10">
                  <Phone className="h-4 w-4 text-[#0B79D4]" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Phone</div>
                  <a
                    href="tel:8265016045"
                    className="mt-1 block text-xs sm:text-sm text-slate-600 hover:text-[#0B79D4]"
                  >
                    +91 82650 16045
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0B79D4]/10">
                  <Mail className="h-4 w-4 text-[#0B79D4]" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <a
                    href="mailto:info@jaswins.com"
                    className="mt-1 block text-xs sm:text-sm text-slate-600 hover:text-[#0B79D4]"
                  >
                    info@jaswins.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0B79D4]/10">
                  <Clock className="h-4 w-4 text-[#0B79D4]" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Hours</div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Monday – Friday: 9:00 AM – 6:00 PM <br />
                    Saturday – Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 rounded-xl bg-slate-50/80 p-4 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Connect with us
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Follow JASWIN for product updates, case studies and insights.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B79D4]/10 text-[#0B79D4] transition-all duration-150 hover:bg-[#0B79D4] hover:text-white shadow-sm"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
