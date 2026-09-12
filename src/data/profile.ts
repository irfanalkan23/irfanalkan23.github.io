export interface ProfileData {
  name: string;
  primaryHeadline: string;
  supportingHeadline: string;
  supportingTechnicalLine: string;
  location: string;
  workPreference: string;
  aboutParagraphs: string[];
}

export const profileData: ProfileData = {
  name: "Irfan Alkan",
  primaryHeadline: "SOC Team Lead | Senior SOC Analyst | Incident Response | Security Operations",
  supportingHeadline: "Cybersecurity professional with 4+ years of progressive Security Operations Center experience across incident investigation, SIEM/EDR analysis, detection improvement, and analyst mentoring.",
  supportingTechnicalLine: "Hands-on experience with IBM QRadar, Splunk, CrowdStrike Falcon, Wireshark, Active Directory, Sysmon, Windows/Linux security telemetry, and incident response workflows.",
  location: "Istanbul, Türkiye",
  workPreference: "Open to Fully Remote Opportunities",
  aboutParagraphs: [
    "I am a cybersecurity professional with more than four years of progressive Security Operations Center experience, advancing from SOC Analyst Intern to SOC Analyst L1, SOC Analyst L2, and SOC Team Lead / Cybersecurity Instructor.",
    "My work focuses on security monitoring, incident investigation, SIEM and EDR analysis, detection improvement, escalation support, technical reporting, and analyst mentoring.",
    "I have investigated approximately 300 security alerts and incidents involving web attacks, malware, phishing, suspicious PowerShell activity, authentication attacks, ransomware, network scanning, privilege escalation, endpoint threats, and account compromise.",
    "I combine hands-on technical Security Operations experience with leadership, training, investigation review, and workflow improvement.",
    "I am particularly interested in fully remote SOC, Security Operations, Incident Response, Detection, and MDR opportunities open to candidates based in Türkiye."
  ]
};
