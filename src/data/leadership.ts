export interface LeadershipArea {
  title: string;
  description: string;
  items: string[];
}

export const leadershipData = {
  headline: "Technical Leadership & Analyst Mentoring",
  subheadline: "Guiding analysts through real-world incident lifecycles, rigorous investigation methodologies, and practical SIEM/EDR workflows.",
  stats: [
    { value: "~200", label: "Students & Analysts Mentored" },
    { value: "~20", label: "Training Cohorts Guided" },
    { value: "4+", label: "Years of Hands-on Operations" }
  ],
  pillars: [
    {
      title: "SOC Investigation Review & Quality Assurance",
      description: "Reviewing analyst case files, alert triage quality, and technical investigation notes to maintain consistency and depth across alert lifecycles.",
      items: [
        "Structured alert triage and escalation evaluation",
        "Evidence validation and root-cause analysis guidance",
        "Standardizing technical reporting and ticket handoffs",
        "Providing actionable feedback on investigation methodology"
      ]
    },
    {
      title: "Hands-on Technical Instruction",
      description: "Delivering practical, lab-based technical curriculum focused on modern SOC instrumentation and defensive tactics.",
      items: [
        "IBM QRadar offense triage and AQL queries",
        "Splunk SPL event searches and correlation query building",
        "CrowdStrike Falcon process-tree analysis and host triage",
        "Wireshark packet capture and protocol anomaly identification",
        "Web attack analysis (SQLi, XSS, Path Traversal, Brute Force)"
      ]
    },
    {
      title: "L2 Escalation & Incident Mentoring",
      description: "Directing analysts during critical escalation scenarios, bridging knowledge gaps from initial event detection to containment coordination.",
      items: [
        "Assisting junior analysts through complex multi-stage alerts",
        "PowerShell obfuscation and authentication anomaly triage",
        "Independent Security+ foundational knowledge mentoring",
        "Incident documentation standards for executive and client reviews"
      ]
    }
  ]
};
