import { siteConfig } from "./config";

export interface ProjectArchitectureStep {
  title: string;
  role: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  technologies: string[];
  keyActivities: string[];
  architectureSteps?: ProjectArchitectureStep[];
  liveUrl?: string;
  githubUrl?: string;
  isPlaceholderRepo?: boolean;
  disclaimer?: string;
  verifiedFacts?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "soc-home-lab",
    title: "SOC Home Lab",
    badge: "Featured Lab Environment",
    summary: "A purpose-built virtual Security Operations Center environment engineered for end-to-end attack simulation, telemetry collection, detection engineering, and incident investigation.",
    description: "Designed and built a virtual Security Operations Center environment for attack simulation, telemetry collection, detection development, and incident investigation. This lab mirrors modern enterprise telemetry pipelines: adversarial simulations conducted from Kali Linux traverse a segmented pfSense firewall into a Windows Server Active Directory domain. Host and authentication activities are captured via fine-grained Sysmon configurations and ingested into Splunk for detection creation, SPL queries, and investigative triage.",
    technologies: [
      "Splunk",
      "Sysmon",
      "Active Directory",
      "Windows Server",
      "pfSense",
      "Kali Linux",
      "Wireshark",
      "VirtualBox"
    ],
    architectureSteps: [
      { title: "Kali Linux", role: "Attacker / Threat Emulation" },
      { title: "pfSense", role: "Network Boundary & Segmentation" },
      { title: "Windows Server / AD", role: "Target Domain & Host Activity" },
      { title: "Sysmon Agent", role: "High-Fidelity Telemetry Logging" },
      { title: "Splunk Universal Forwarder", role: "SIEM Ingestion & Indexing" },
      { title: "Detection & Investigation", role: "SPL Rules, Triage & Incident Analysis" }
    ],
    keyActivities: [
      "Adversarial attack simulation across network and endpoint boundaries",
      "Windows Server and Active Directory enterprise telemetry generation",
      "Custom Sysmon XML configuration for high-fidelity process and network logging",
      "Splunk data ingestion, source typing, and index architecture",
      "Development of custom SPL detection rules and correlation queries",
      "Alert validation, false-positive elimination, and threshold tuning",
      "Full incident triage, root-cause investigation, and documentation",
      "Deep packet inspection and protocol analysis using Wireshark"
    ],
    githubUrl: siteConfig.projects.socHomeLabRepoUrl,
    isPlaceholderRepo: siteConfig.projects.socHomeLabRepoUrl.startsWith("TODO")
  },
  {
    id: "security-plus-test-engine",
    title: "Security+ Test Engine",
    badge: "Production Study Application",
    summary: "A multi-platform cybersecurity study application designed to provide structured practice and rigorous domain testing for cybersecurity learners.",
    description: "An independent cybersecurity study application designed to provide structured exam practice and domain testing. Designed, engineered, and deployed independently across platforms, delivering intuitive question randomized quizzes, timed review modes, and detailed domain explanations.",
    technologies: [
      "Flutter",
      "Firebase Hosting",
      "Dart",
      "Multi-Platform (Web/Mobile)",
      "State Management"
    ],
    verifiedFacts: [
      "Engineered with Flutter for high performance multi-platform consistency",
      "Deployed on Firebase Hosting with fast global CDN distribution",
      "Comprehensive database of ~1,107 structured practice questions",
      "Engineered and deployed independently from architecture to release"
    ],
    keyActivities: [
      "Engineered cross-platform interactive exam interface with randomized testing modes",
      "Implemented domain-based performance tracking and score analytics",
      "Automated build and continuous deployment to Firebase Hosting",
      "Designed mobile-first responsive layout tailored for efficient technical revision"
    ],
    liveUrl: siteConfig.projects.securityPlusTestEngineLiveUrl,
    githubUrl: siteConfig.projects.securityPlusTestEngineRepoUrl,
    isPlaceholderRepo: siteConfig.projects.securityPlusTestEngineRepoUrl.startsWith("TODO"),
    disclaimer: "Independent Security+ study application. CompTIA and Security+ are trademarks of CompTIA. This project is an independent study tool and is not affiliated with or endorsed by CompTIA."
  }
];
