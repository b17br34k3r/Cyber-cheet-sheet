const webSecurityTools = [
  {
    "id": "burp-suite",
    "name": "Burp Suite",
    "category": "web-security",
    "description": "An integrated platform for performing security testing of web applications.",
    "type": "GUI",
    "tags": ["proxy", "scanner", "intruder"]
  },
  {
    "id": "owasp-zap",
    "name": "OWASP ZAP",
    "category": "web-security",
    "description": "An open-source web application security scanner and proxy.",
    "type": "GUI",
    "tags": ["scanner", "proxy", "fuzzer"]
  },
  {
    "id": "sqlmap",
    "name": "sqlmap",
    "category": "web-security",
    "description": "An open-source tool that automates detecting and exploiting SQL injection flaws.",
    "type": "CLI",
    "tags": ["sql injection", "database takeover", "automation"]
  },
  {
    "id": "nikto",
    "name": "Nikto",
    "category": "web-security",
    "description": "An Open Source web server scanner which performs comprehensive tests for vulnerabilities.",
    "type": "CLI",
    "tags": ["web scanner", "vulnerability", "cve"]
  },
  {
    "id": "gobuster",
    "name": "Gobuster",
    "category": "web-security",
    "description": "A tool used to brute-force URIs (directories and files) and DNS subdomains.",
    "type": "CLI",
    "tags": ["directory brute-force", "subdomain enumeration", "discovery"]
  },
  {
    "id": "wpscan",
    "name": "WPScan",
    "category": "web-security",
    "description": "A free, for non-commercial use, black box WordPress security scanner.",
    "type": "CLI",
    "tags": ["wordpress", "cms scanner", "vulnerability"]
  },
  {
    "id": "ffuf",
    "name": "ffuf",
    "category": "web-security",
    "description": "Fast web fuzzer written in Go, used for finding hidden files, directories, and parameters.",
    "type": "CLI",
    "tags": ["fuzzer", "discovery", "brute-force"]
  },
  {
    "id": "dirsearch",
    "name": "dirsearch",
    "category": "web-security",
    "description": "A simple command-line tool designed to brute force directories and files in websites.",
    "type": "CLI",
    "tags": ["directory brute-force", "discovery", "web scanner"]
  },
  {
    "id": "sublist3r",
    "name": "Sublist3r",
    "category": "web-security",
    "description": "A fast sub-domain enumeration tool for penetration testers.",
    "type": "CLI",
    "tags": ["subdomain enumeration", "osint", "discovery"]
  },
  {
    "id": "amass",
    "name": "Amass",
    "category": "web-security",
    "description": "The OWASP Amass Project performs network mapping of attack surfaces and external asset discovery.",
    "type": "CLI",
    "tags": ["attack surface", "subdomain enumeration", "osint"]
  },
  {
    "id": "whatweb",
    "name": "WhatWeb",
    "category": "web-security",
    "description": "A web scanner that identifies what websites are running.",
    "type": "CLI",
    "tags": ["fingerprinting", "cms detection", "reconnaissance"]
  },
  {
    "id": "wafw00f",
    "name": "WAFW00F",
    "category": "web-security",
    "description": "Allows one to identify and fingerprint Web Application Firewall (WAF) products.",
    "type": "CLI",
    "tags": ["waf detection", "fingerprinting", "firewall"]
  },
  {
    "id": "commix",
    "name": "Commix",
    "category": "web-security",
    "description": "An automated tool that can be used by web developers, penetration testers or even security researchers to test web applications with the view to find bugs, errors or vulnerabilities related to command injection attacks.",
    "type": "CLI",
    "tags": ["command injection", "vulnerability scanner", "automation"]
  },
  {
    "id": "xsser",
    "name": "XSSer",
    "category": 'web-security',
    "description": "An automatic -framework- to detect, exploit and report XSS vulnerabilities.",
    "type": "CLI",
    "tags": ["xss", "vulnerability scanner", "exploit"]
  },
  {
    "id": "beef",
    "name": "BeEF",
    "category": "web-security",
    "description": "The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser.",
    "type": "Web UI",
    "tags": ["browser exploitation", "xss", "hooking"]
  },
  {
    "id": "arachni",
    "name": "Arachni",
    "category": "web-security",
    "description": "A feature-full, modular, high-performance Ruby framework aimed towards helping penetration testers and administrators evaluate the security of modern web applications.",
    "type": "CLI / Web UI",
    "tags": ["web scanner", "framework", "ruby"]
  },
  {
    "id": "httrack",
    "name": "HTTrack",
    "category": "web-security",
    "description": "A free and easy-to-use offline browser utility. It allows you to download a World Wide Web site from the Internet to a local directory.",
    "type": "GUI",
    "tags": ["website copier", "offline browsing", "reconnaissance"]
  },
  {
    "id": "lfi-suite",
    "name": "LFI Suite",
    "category": "web-security",
    "description": "A tool that automates the process of finding and exploiting Local File Inclusion (LFI) vulnerabilities.",
    "type": "CLI",
    "tags": ["lfi", "vulnerability scanner", "automation"]
  },
  {
    "id": "nosqlmap",
    "name": "NoSQLMap",
    "category": "web-security",
    "description": "A Python tool designed to audit for and automate injection attacks and exploit default configuration weaknesses in NoSQL databases.",
    "type": "CLI",
    "tags": ["nosql injection", "database", "automation"]
  },
  {
    "id": "gittools",
    "name": "GitTools",
    "category": "web-security",
    "description": "A collection of tools for finding and exploiting websites that have their .git repository exposed.",
    "type": "CLI",
    "tags": ["git", "source code leakage", "reconnaissance"]
  }
];
