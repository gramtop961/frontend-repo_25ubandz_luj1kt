import React from 'react';

const cases = [
  {
    name: 'SaaS Support',
    metric: '52% ticket deflection',
    summary:
      'Deployed an on-brand chat agent trained on docs and past conversations. First-response time dropped from hours to seconds.'
  },
  {
    name: 'Healthcare Intake',
    metric: '3x more booked calls',
    summary:
      'Voice agent qualified inbound leads and scheduled appointments, syncing notes to the EHR and CRM automatically.'
  },
  {
    name: 'E-commerce CX',
    metric: '$180k monthly savings',
    summary:
      'Automated WISMO, returns, and product discovery. Agent handled 78% of chats end-to-end with CSAT above 4.7.'
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-neutral-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Results we deliver</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Real outcomes from recent engagements.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6">
              <div className="text-sm text-white/60">{c.name}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{c.metric}</div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{c.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
