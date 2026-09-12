export interface CertificationItem {
  name: string;
  issuer: string;
  status: "Active" | "Historical" | "In Progress";
  badgeText: string;
  badgeClass: string;
  details: string;
  periodText: string;
  description: string;
  skillsHighlighted: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    name: "Security Engineer 1 Elite",
    issuer: "RangeForce",
    status: "Active",
    badgeText: "Active Certification",
    badgeClass: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60",
    periodText: "Issued Feb 2026 • Valid through Feb 2030",
    details: "Issued: February 2026 | Expires: February 2030",
    description: "Hands-on, simulation-based technical credential validating advanced offensive-defensive skills, SIEM triage, malware analysis, network defense, and SOC incident resolution in realistic enterprise scenarios.",
    skillsHighlighted: ["Hands-on SOC Defense", "SIEM Investigation", "Malware Analysis", "Network Triage"]
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "Historical",
    badgeText: "Historical Certification — Expired June 2025",
    badgeClass: "text-slate-400 bg-slate-800/70 border-slate-700/60",
    periodText: "Earned 2022 • Expired June 2025",
    details: "Earned: 2022 | Expired: June 2025",
    description: "Foundational baseline security certification covering network security principles, threat mitigation, identity access management, risk assessment, and operational security.",
    skillsHighlighted: ["Core Security Principles", "Threat Identification", "Network Defense", "Cryptography Baselines"]
  },
  {
    name: "CompTIA CySA+",
    issuer: "CompTIA",
    status: "In Progress",
    badgeText: "In Progress",
    badgeClass: "text-cyan-400 bg-cyan-950/60 border-cyan-800/60",
    periodText: "Currently In Preparation",
    details: "Status: In Progress (Curriculum Study & Lab Practice)",
    description: "Currently undertaking advanced study targeting behavioral cybersecurity analysis, vulnerability assessment, threat intelligence utilization, and continuous security monitoring.",
    skillsHighlighted: ["Threat Intelligence", "Vulnerability Management", "Behavioral Analysis", "Incident Response"]
  }
];
