export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "SIEM Platforms & Analysis",
    icon: "siem",
    description: "Core security information & event management with hands-on enterprise telemetry analysis.",
    skills: [
      { name: "IBM QRadar", note: "~200 offenses investigated" },
      { name: "Splunk", note: "~100 SPL searches & queries" },
      { name: "AQL (Ariel Query Language)" },
      { name: "SPL (Search Processing Language)" },
      { name: "Correlation Rules Tuning" },
      { name: "Detection Tuning" },
      { name: "Custom SOC Dashboards" },
      { name: "Alert Investigation" },
      { name: "Log Analysis" },
      { name: "False-Positive Analysis" },
      { name: "Log-Source Troubleshooting" }
    ]
  },
  {
    title: "EDR & Endpoint Security",
    icon: "edr",
    description: "Host-level telemetry, execution lineage tracking, and containment coordination.",
    skills: [
      { name: "CrowdStrike Falcon", note: "~70 detections investigated" },
      { name: "Process-Tree Analysis", note: "~80 lineage reviews" },
      { name: "IOC Investigation" },
      { name: "Endpoint Containment Support" },
      { name: "Remediation Support" },
      { name: "Sysmon Telemetry" },
      { name: "Windows Security Event Logs" }
    ]
  },
  {
    title: "Incident Response & Operations",
    icon: "incident-response",
    description: "End-to-end incident lifecycle from initial detection to closure reporting.",
    skills: [
      { name: "Alert Triage (~300 investigated)" },
      { name: "Incident Investigation" },
      { name: "Escalation Management" },
      { name: "IOC Analysis" },
      { name: "Threat Investigation" },
      { name: "Root-Cause Analysis Support" },
      { name: "Investigation Reporting" },
      { name: "SOC Ticket Documentation" }
    ]
  },
  {
    title: "Network Security & Packet Analysis",
    icon: "network",
    description: "Deep packet inspection, network telemetry decoding, and perimeter logging.",
    skills: [
      { name: "Wireshark", note: "Strong hands-on (~20 PCAPs)" },
      { name: "PCAP Packet Analysis" },
      { name: "TCP/IP Protocol Suite" },
      { name: "DNS & HTTP/HTTPS Traffic" },
      { name: "Nmap (Lab & Practical Exposure)" },
      { name: "pfSense Firewall" },
      { name: "Suricata (Log Analysis Exposure)" }
    ]
  },
  {
    title: "Systems & Infrastructure",
    icon: "systems",
    description: "Enterprise operating environments, directory services, and virtualization.",
    skills: [
      { name: "Microsoft Windows" },
      { name: "Linux Administration" },
      { name: "Active Directory" },
      { name: "Kali Linux" },
      { name: "Windows Server" },
      { name: "VirtualBox" }
    ]
  },
  {
    title: "Detection & Threat Analysis",
    icon: "detection",
    description: "Behavioral analysis across common enterprise attack vectors and tactics.",
    skills: [
      { name: "MITRE ATT&CK (Practical Familiarity / Investigation Context)" },
      { name: "Detection Engineering Concepts" },
      { name: "Threat Hunting Concepts" },
      { name: "Web Attack Analysis (~200 investigated)" },
      { name: "Malware Triage (~40 investigated)" },
      { name: "Phishing Analysis (~20 investigated)" },
      { name: "Suspicious PowerShell Analysis (~20 investigated)" },
      { name: "Authentication Attack Analysis (~10 investigated)" }
    ]
  },
  {
    title: "Security Framework Familiarity",
    icon: "framework",
    description: "Conceptual alignment with leading cybersecurity standards and control architectures.",
    skills: [
      { name: "NIST Cybersecurity Framework (Familiarity)" },
      { name: "ISO/IEC 27001 (Familiarity)" }
    ]
  }
];
