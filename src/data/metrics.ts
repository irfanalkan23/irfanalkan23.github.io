export interface MetricItem {
  value: string;
  label: string;
  category?: string;
  detail?: string;
}

export const metricsData: MetricItem[] = [
  {
    value: "300+",
    label: "Security Alerts & Incidents Investigated",
    category: "SOC Operations",
    detail: "Triage, scope determination, and escalation across diverse attack vectors"
  },
  {
    value: "~200",
    label: "IBM QRadar Offenses Investigated",
    category: "SIEM Analysis",
    detail: "AQL queries, offense triage, correlation tuning, and false-positive reduction"
  },
  {
    value: "~100",
    label: "Splunk SPL Searches & Detection Queries",
    category: "SIEM Analysis",
    detail: "Event correlation, field extractions, log analysis, and custom dashboards"
  },
  {
    value: "~70",
    label: "CrowdStrike Falcon Detection Investigations",
    category: "EDR / Endpoint",
    detail: "IOC investigation, endpoint containment support, and alert triage"
  },
  {
    value: "~80",
    label: "CrowdStrike Process-Tree Analyses",
    category: "EDR / Endpoint",
    detail: "Deep execution lineage, parent-child process tracking, and anomaly detection"
  },
  {
    value: "~20",
    label: "PCAP Packet Investigations",
    category: "Network Security",
    detail: "Wireshark packet-level analysis, protocol decoding, and flow inspection"
  },
  {
    value: "~200",
    label: "Cybersecurity Students & Analysts Trained / Mentored",
    category: "Technical Leadership",
    detail: "Hands-on instruction in SOC procedures, SIEM/EDR, and investigation quality"
  },
  {
    value: "~20",
    label: "Training Cohorts Guided",
    category: "Technical Leadership",
    detail: "Structured curriculum delivery in security monitoring and incident response"
  }
];
