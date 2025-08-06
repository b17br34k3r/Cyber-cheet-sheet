const incidentResponseTools = [
  {
    "id": "thehive",
    "name": "TheHive",
    "category": "incident-response",
    "description": "A scalable, open-source and free Security Incident Response Platform, designed to make life easier for SOCs, CSIRTs, CERTs and any information security practitioner.",
    "type": "Web UI",
    "tags": ["sirp", "case management", "collaboration"]
  },
  {
    "id": "grr-rapid-response",
    "name": "GRR Rapid Response",
    "category": "incident-response",
    "description": "An incident response framework focused on remote live forensics. It consists of an agent that is deployed to target systems, and a server infrastructure that can manage and talk to the agent.",
    "type": "Web UI",
    "tags": ["live forensics", "remote access", "automation"]
  },
  {
    "id": "redline",
    "name": "Redline",
    "category": "incident-response",
    "description": "FireEye's free tool for in-depth memory and file analysis. It collects information about running processes, drivers, files, registry keys, and network connections to help identify malicious activity.",
    "type": "GUI",
    "tags": ["memory analysis", "host investigation", "ioc"]
  },
  {
    "id": "cortex",
    "name": "Cortex",
    "category": "incident-response",
    "description": "A powerful observable analysis and active response engine. It allows you to analyze observables such as IP and email addresses, URLs, domain names, files or hashes.",
    "type": "Web UI",
    "tags": ["observable analysis", "active response", "automation"]
  },
  {
    "id": "misp",
    "name": "MISP",
    "category": "incident-response",
    "description": "Malware Information Sharing Platform - A threat intelligence platform for sharing, storing and correlating Indicators of Compromise of targeted attacks.",
    "type": "Web UI",
    "tags": ["threat intelligence", "ioc sharing", "correlation"]
  },
  {
    "id": "osquery",
    "name": "osquery",
    "category": "incident-response",
    "description": "An operating system instrumentation framework that exposes an operating system as a high-performance relational database.",
    "type": "CLI",
    "tags": ["system monitoring", "sql queries", "endpoint visibility"]
  },
  {
    "id": "kolide-fleet",
    "name": "Kolide Fleet",
    "category": "incident-response",
    "description": "A flexible control server for osquery fleets. It provides a web-based interface for managing osquery configurations and viewing query results.",
    "type": "Web UI",
    "tags": ["osquery management", "fleet control", "endpoint monitoring"]
  },
  {
    "id": "velociraptor",
    "name": "Velociraptor",
    "category": "incident-response",
    "description": "A tool for collecting host based state information using The Velociraptor Query Language (VQL) queries.",
    "type": "Web UI",
    "tags": ["host forensics", "vql", "artifact collection"]
  },
  {
    "id": "ir-triage",
    "name": "IR Triage",
    "category": "incident-response",
    "description": "A Windows-based incident response collection tool that gathers a multitude of forensic artifacts from Windows systems.",
    "type": "GUI",
    "tags": ["windows triage", "artifact collection", "forensics"]
  },
  {
    "id": "kape",
    "name": "KAPE",
    "category": "incident-response",
    "description": "Kroll Artifact Parser and Extractor. A triage tool that finds the most forensically relevant artifacts on a system and extracts them.",
    "type": "GUI/CLI",
    "tags": ["artifact extraction", "triage", "forensics"]
  },
  {
    "id": "loki",
    "name": "Loki",
    "category": "incident-response",
    "description": "A simple IOC and incident response scanner. It scans file system artifacts, memory dumps, and other data for indicators of compromise.",
    "type": "CLI",
    "tags": ["ioc scanner", "compromise detection", "yara rules"]
  },
  {
    "id": "thor-lite",
    "name": "THOR Lite",
    "category": "incident-response",
    "description": "A free IOC and YARA scanner that checks the running processes, loaded modules, and other system artifacts for suspicious indicators.",
    "type": "CLI",
    "tags": ["ioc scanner", "yara scanner", "live system"]
  },
  {
    "id": "chainsaw",
    "name": "Chainsaw",
    "category": "incident-response",
    "description": "A command-line tool for rapidly searching and hunting through Windows event logs.",
    "type": "CLI",
    "tags": ["event log analysis", "hunting", "windows"]
  },
  {
    "id": "hayabusa",
    "name": "Hayabusa",
    "category": "incident-response",
    "description": "A Windows event log fast forensics timeline generator and threat hunting tool.",
    "type": "CLI",
    "tags": ["timeline generation", "threat hunting", "event logs"]
  },
  {
    "id": "sigma",
    "name": "Sigma",
    "category": "incident-response",
    "description": "A generic and open signature format that allows you to describe relevant log events in a straightforward manner.",
    "type": "CLI/Rules",
    "tags": ["detection rules", "log analysis", "siem"]
  },
  {
    "id": "dfir-orc",
    "name": "DFIR ORC",
    "category": "incident-response",
    "description": "A collection of specialized tools dedicated to reliably parse and collect critical artifacts such as the MFT, registry hives, event logs, and more.",
    "type": "CLI",
    "tags": ["artifact collection", "windows forensics", "mft parsing"]
  },
  {
    "id": "plaso",
    "name": "Plaso",
    "category": "incident-response",
    "description": "A Python-based backend engine for the tool log2timeline, designed to extract timestamps from various files found on a typical computer system.",
    "type": "CLI",
    "tags": ["timeline analysis", "timestamp extraction", "super timeline"]
  },
  {
    "id": "timesketch",
    "name": "Timesketch",
    "category": "incident-response",
    "description": "An open-source tool for collaborative forensic timeline analysis. It allows multiple analysts to work together on the same timeline.",
    "type": "Web UI",
    "tags": ["timeline analysis", "collaborative", "forensics"]
  },
  {
    "id": "cuckoo-modified",
    "name": "Cuckoo Modified",
    "category": "incident-response",
    "description": "A fork of Cuckoo Sandbox with additional features for malware analysis and incident response, including better evasion detection.",
    "type": "Web UI",
    "tags": ["malware analysis", "sandbox", "evasion detection"]
  },
  {
    "id": "wazuh-ir",
    "name": "Wazuh",
    "category": "incident-response",
    "description": "A free, open source and enterprise-ready security monitoring solution for threat detection, integrity monitoring, incident response and compliance.",
    "type": "Web UI",
    "tags": ["security monitoring", "threat detection", "compliance"]
  }
];
