import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            AI Voice & Automation Agency
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Build a smarter customer journey with your own AI Agent
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
            We design, train, and deploy voice and chat agents that qualify leads, book meetings, and support customers 24/7 — seamlessly integrated with your tools.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-violet-500 hover:bg-violet-400 transition-colors text-white px-5 py-3 font-medium">
              Get a free strategy call
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/15 transition-colors text-white px-5 py-3 font-medium">
              See our work
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-white/60 text-sm">
            <div>
              <div className="text-2xl font-semibold text-white">250k+</div>
              Conversations automated
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">38%</div>
              Avg. cost reduction
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">4.9★</div>
              Client satisfaction
            </div>
          </div>
        </div>

        <div className="h-[420px] md:h-[520px] relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/40" />
        </div>
      </div>

      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(59,130,246,0.2),rgba(251,146,60,0.15),transparent_60%)] blur-3xl" />
    </section>
  );
}
