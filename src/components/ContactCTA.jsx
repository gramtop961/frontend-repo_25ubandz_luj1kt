import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-neutral-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-sky-500/10 to-amber-400/10 p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold">Ready to launch your AI agent?</h3>
            <p className="mt-3 text-white/80">
              Book a free 30-minute strategy call. We will map your highest-ROI use cases and share a tailored rollout plan.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 hover:bg-white/90 transition-colors px-5 py-3 font-medium"
                href="https://calendly.com/" target="_blank" rel="noreferrer"
              >
                Book a strategy call
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/20 hover:bg-white/10 transition-colors px-5 py-3 font-medium"
                href="mailto:hello@youragency.com"
              >
                Email us
              </a>
            </div>

            <p className="mt-4 text-xs text-white/60">No pressure. No sales pitch. Just value.</p>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(59,130,246,0.25),rgba(251,146,60,0.2),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
