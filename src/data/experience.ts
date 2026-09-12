export interface ExperienceRole {
  role: string;
  period: string;
  isCurrent?: boolean;
  points: string[];
  technologies?: string[];
}

export interface CompanyExperience {
  company: string;
  employmentType: string;
  overallPeriod: string;
  location: string;
  roles: ExperienceRole[];
}

export const experienceData: CompanyExperience = {
  company: "CYDEO",
  employmentType: "Contract",
  overallPeriod: "March 2022 – Present",
  location: "Istanbul, Türkiye / Remote",
  roles: [
    {
      role: "SOC Team Lead | Cybersecurity Instructor",
      period: "July 2025 – Present",
      isCurrent: true,
      points: [
        "Lead SOC investigation reviews and provide escalation support across active security incidents.",
        "Guide analysts through rigorous alert triage, investigation, technical documentation, and escalation procedures.",
        "Improve SOC workflows, ticket standard operating procedures, and overall investigation quality.",
        "Train cybersecurity students and junior analysts in SOC operations, incident response, SIEM, EDR, network analysis, and technical reporting.",
        "Develop and deliver hands-on training modules utilizing IBM QRadar, Splunk, CrowdStrike Falcon, Wireshark, Active Directory, Sysmon, and related security technologies."
      ],
      technologies: ["IBM QRadar", "Splunk", "CrowdStrike Falcon", "Wireshark", "Sysmon", "Active Directory", "Incident Response"]
    },
    {
      role: "SOC Analyst L2 | Team Lead",
      period: "July 2024 – June 2025",
      points: [
        "Performed advanced SOC investigations and handled L2 escalations for complex security alerts.",
        "Investigated high-severity IBM QRadar offenses and Splunk alerts using targeted AQL and SPL queries.",
        "Conducted correlation-rule tuning, false-positive analysis, custom dashboard creation, and log-source troubleshooting.",
        "Investigated CrowdStrike Falcon endpoint detections via detailed process-tree and indicator of compromise (IOC) analysis.",
        "Supported endpoint containment workflows and remediation coordination.",
        "Guided junior analysts, provided technical escalation review, and maintained investigation quality standards."
      ],
      technologies: ["IBM QRadar (AQL)", "Splunk (SPL)", "CrowdStrike Falcon", "Process Trees", "Detection Tuning", "Remediation"]
    },
    {
      role: "SOC Analyst L1 | Cybersecurity Mentor",
      period: "July 2022 – June 2024",
      points: [
        "Conducted initial alert triage and security-event investigations across multi-tenant environments.",
        "Investigated web application attacks, malware infections, phishing campaigns, authentication anomalies, suspicious PowerShell execution, and suspicious network traffic.",
        "Determined alert severity, impact scope, and formal escalation requirements.",
        "Refined SOC ticketing workflows and standardized investigation documentation templates.",
        "Mentored cybersecurity students and incoming junior analysts in foundational monitoring practices."
      ],
      technologies: ["Alert Triage", "Phishing Analysis", "PowerShell Analysis", "Malware Triage", "SIEM Monitoring", "Ticketing"]
    },
    {
      role: "SOC Analyst Intern",
      period: "March 2022 – June 2022",
      points: [
        "Supported continuous SOC monitoring and incident-investigation support workflows.",
        "Analyzed security alerts, Windows/Linux event logs, and baseline network telemetry.",
        "Developed solid practical familiarity with core SOC processes, SIEM investigation steps, and professional technical documentation."
      ],
      technologies: ["Log Analysis", "Network Baselines", "SIEM Investigation", "Documentation", "Security Operations"]
    }
  ]
};
