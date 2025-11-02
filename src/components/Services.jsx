import React from 'react';
import { Bot, Mic, Rocket, Shield } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chat Agents',
    desc: 'Custom chatbots that qualify leads, resolve support, and upsell in real time — trained on your data.'
  },
  {
    icon: Mic,
    title: 'AI Voice Agents',
    desc: 'Natural-sounding voice agents that answer calls, schedule appointments, and follow up automatically.'
  },
  {
    icon: Rocket,
    title: 'Automation & Integrations',
    desc: 'We connect your agent to HubSpot, Slack, Notion, CRMs, and internal tools so work happens on autopilot.'
  },
  {
    icon: Shield,
    title: 'Guardrails & Compliance',
    desc: 'Enterprise-grade safety, audit logs, and policy controls to keep your brand and data protected.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">What we build</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            From strategy to deployment, we ship production-ready AI systems that deliver measurable results.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-500/30 to-sky-400/30 border border-white/10 flex items-center justify-center text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
