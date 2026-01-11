import { Shield, Activity, Search, Database, Lock, Server } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "Unsupervised Network Anomaly Detection",
    category: "Security Analytics",
    description: "A machine learning pipeline that analyzes Wazuh SIEM logs to detect zero-day threats. Uses Isolation Forests to identify outliers in network traffic that standard rule-based systems miss.",
    icon: Shield,
    tech: ["Python", "Scikit-Learn", "Wazuh API", "Pandas"],
    stats: [
      { label: "Detection Rate", value: "94%" },
      { label: "False Positives", value: "< 2%" }
    ],
    links: {
      github: "https://github.com",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "NLP-Driven Clinical Triage Engine",
    category: "Healthcare AI",
    description: "An offline-first decision support system that parses patient symptoms using Natural Language Processing (NLP) to automate risk stratification and prioritize urgent cases.",
    icon: Activity,
    tech: ["FastAPI", "Spacy (NLP)", "React", "Docker"],
    stats: [
      { label: "Response Time", value: "120ms" },
      { label: "Accuracy", value: "89%" }
    ],
    links: {
      github: "https://github.com",
      demo: "#"
    }
  },
  {
    id: 3,
    title: "Real-Time Endpoint Forensic Telemetry",
    category: "Data Engineering",
    description: "A high-velocity data pipeline for monitoring endpoint security. Streams CPU, memory, and network artifacts in real-time to visualize potential forensic indicators.",
    icon: Search,
    tech: ["WebSockets", "Plotly.js", "Python", "Redis"],
    stats: [
      { label: "Data Throughput", value: "1GB/s" },
      { label: "Latency", value: "Live" }
    ],
    links: {
      github: "https://github.com",
      demo: "#"
    }
  }
];