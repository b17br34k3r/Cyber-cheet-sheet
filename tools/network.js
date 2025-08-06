const networkTools = [
  {
    "id": "nmap",
    "name": "Nmap",
    "category": "network-analysis",
    "description": "A powerful network scanner for security auditing and discovery.",
    "type": "CLI / GUI",
    "tags": ["port scanning", "os detection", "network mapping"]
  },
  {
    "id": "ntopng",
    "name": "Ntopng",
    "category": "network-analysis",
    "description": "A web-based network traffic monitoring application.",
    "type": "CLI / GUI",
    "tags": ["network monitoring", "traffic analysis", "real-time"]
  },
  {
    "id": "wireshark",
    "name": "Wireshark",
    "category": "network-analysis",
    "description": "The world's foremost network protocol analyzer for traffic inspection.",
    "type": "GUI",
    "tags": ["packet analysis", "protocol inspection", "troubleshooting"]
  },
  {
    "id": "tcpdump",
    "name": "tcpdump",
    "category": "network-analysis",
    "description": "A powerful command-line packet analyzer for network monitoring.",
    "type": "CLI",
    "tags": ["packet sniffing", "network monitoring", "debugging"]
  },
  {
    "id": "masscan",
    "name": "Masscan",
    "category": "network-analysis",
    "description": "An incredibly fast TCP port scanner for large-scale network surveys.",
    "type": "CLI",
    "tags": ["fast scanning", "port scanner", "network survey"]
  },
  {
    "id": "netcat",
    "name": "Netcat",
    "category": "network-analysis",
    "description": "A versatile networking utility for reading/writing data across network connections.",
    "type": "CLI",
    "tags": ["port listening", "port scanning", "file transfer"]
  },
  {
    "id": "zmap",
    "name": "Zmap",
    "category": "network-analysis",
    "description": "An open-source network scanner that enables researchers to easily perform Internet-wide network studies.",
    "type": "CLI",
    "tags": ["internet-wide scan", "network research", "fast scanning"]
  },
  {
    "id": "hping3",
    "name": "hping3",
    "category": "network-analysis",
    "description": "A command-line oriented TCP/IP packet assembler/analyzer. The interface is inspired to the ping unix command.",
    "type": "CLI",
    "tags": ["packet crafting", "firewall testing", "traceroute"]
  },
  {
    "id": "dig",
    "name": "dig",
    "category": "network-analysis",
    "description": "(Domain Information Groper) A flexible tool for interrogating DNS name servers.",
    "type": "CLI",
    "tags": ["dns", "lookup", "troubleshooting"]
  },
  {
    "id": "nslookup",
    "name": "nslookup",
    "category": "network-analysis",
    "description": "A network administration command-line tool for querying the Domain Name System (DNS).",
    "type": "CLI",
    "tags": ["dns", "lookup", "legacy"]
  },
  {
    "id": "whois",
    "name": "whois",
    "category": "network-analysis",
    "description": "A query and response protocol that is widely used for querying databases that store the registered users of an Internet resource.",
    "type": "CLI",
    "tags": ["domain registration", "osint", "information gathering"]
  },
  {
    "id": "traceroute",
    "name": "traceroute",
    "category": "network-analysis",
    "description": "A computer network diagnostic tool for displaying the route (path) and measuring transit delays of packets.",
    "type": "CLI",
    "tags": ["network path", "latency", "debugging"]
  },
  {
    "id": "arp-scan",
    "name": "arp-scan",
    "category": "network-analysis",
    "description": "A command-line tool that uses the ARP protocol to discover and fingerprint IP hosts on the local network.",
    "type": "CLI",
    "tags": ["arp", "lan discovery", "mac address"]
  },
  {
    "id": "angry-ip-scanner",
    "name": "Angry IP Scanner",
    "category": "network-analysis",
    "description": "A very fast and small IP scanner. It pings each IP address to check if it’s alive, then optionally it is resolving its hostname.",
    "type": "GUI",
    "tags": ["ip scanner", "port scanner", "fast"]
  },
  {
    "id": "etherape",
    "name": "EtherApe",
    "category": 'network-analysis',
    "description": "A graphical network monitor for Unix modeled after etherman. It displays network activity graphically.",
    "type": "GUI",
    "tags": ["visualization", "network traffic", "monitoring"]
  },
  {
    "id": "scapy",
    "name": "Scapy",
    "category": "network-analysis",
    "description": "A powerful Python-based interactive packet manipulation program and library.",
    "type": "CLI / Library",
    "tags": ["packet crafting", "python", "protocol development"]
  },
  {
    "id": "zeek",
    "name": "Zeek (Bro)",
    "category": "network-analysis",
    "description": "A powerful network analysis framework that is much different from the typical IDS you may know.",
    "type": "CLI",
    "tags": ["nids", "traffic logging", "security monitoring"]
  },
  {
    "id": "suricata",
    "name": "Suricata",
    "category": "network-analysis",
    "description": "A high performance Network IDS, IPS and Network Security Monitoring engine.",
    "type": "CLI",
    "tags": ["ids", "ips", "threat detection"]
  },
  {
    "id": "snort",
    "name": "Snort",
    "category": "network-analysis",
    "description": "An open-source, free and lightweight network intrusion detection system (NIDS) software for Linux and Windows.",
    "type": "CLI",
    "tags": ["nids", "packet sniffer", "rule-based"]
  },
  {
    "id": "ngrep",
    "name": "ngrep",
    "category": "network-analysis",
    "description": "(network grep) strives to provide most of GNU grep's common features, applying them to the network layer.",
    "type": "CLI",
    "tags": ["grep", "network layer", "pattern matching"]
  },
  {
    "id": "iperf",
    "name": "iperf",
    "category": "network-analysis",
    "description": "A tool for active measurements of the maximum achievable bandwidth on IP networks.",
    "type": "CLI",
    "tags": ["bandwidth test", "performance", "network tuning"]
  }
];
