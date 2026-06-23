export type CaseStudyVisualVariant =
  | 'workflow'
  | 'architecture'
  | 'component-system'
  | 'before-after'
  | 'metrics';

export const caseStudyTemplate = {
  context:
    'Describe the product area and audience using only approved, public information. Keep client and account names out unless publication is explicitly permitted.',
  problem:
    'State the user or engineering problem at a useful level of abstraction. Focus on the shape of the challenge, not confidential workflows or internal data.',
  role:
    'Summarize your responsibilities, collaborators, and decision scope without naming private teams, stakeholders, or organizational details.',
  constraints: [
    'Replace this with an approved technical, product, or delivery constraint.',
    'Use ranges or qualitative language when exact scale is confidential.',
    'Describe dependencies by capability rather than private vendor or client names.',
  ],
  approach: [
    'Frame the problem and agree on a safe measure of success.',
    'Map the workflow and identify the smallest useful system boundary.',
    'Build, validate, and release in reviewable increments.',
  ],
  decisions: [
    {
      heading: 'Decision placeholder',
      text: 'Explain the trade-off, the options considered, and why the chosen direction fit the constraints.',
    },
    {
      heading: 'System boundary placeholder',
      text: 'Describe what the solution deliberately owned—and what it left to existing systems.',
    },
    {
      heading: 'Quality strategy placeholder',
      text: 'Summarize how accessibility, performance, observability, and testing shaped delivery.',
    },
  ],
  outcome:
    'Add an approved result here. Prefer a verified metric, a range, or a qualitative proof point; omit anything that cannot be published.',
  learned:
    'Capture one reusable lesson about the product, system, or collaboration model without revealing internal incidents or decisions.',
  fallbackStack: ['Approved framework', 'Approved tooling', 'Approved platform'],
  visuals: [
    { variant: 'workflow' as const, heading: 'Workflow diagram' },
    { variant: 'architecture' as const, heading: 'Architecture diagram' },
    { variant: 'component-system' as const, heading: 'Component system mockup' },
    { variant: 'before-after' as const, heading: 'Before / after structure' },
    { variant: 'metrics' as const, heading: 'Metrics panel' },
  ],
};
