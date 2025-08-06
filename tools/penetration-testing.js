const penetrationTestingTools = [
  {
    "id": "metasploit",
    "name": "Metasploit Framework",
    "category": "penetration-testing",
    "description": "The world's most used penetration testing framework. It provides information about security vulnerabilities and aids in developing and executing exploit code against a remote target machine.",
    "type": "CLI / GUI",
    "tags": ["exploit", "payload", "framework"]
  },
  {
    "id": "cobalt-strike",
    "name": "Cobalt Strike",
    "category": "penetration-testing",
    "description": "A commercial, full-featured, post-exploitation framework that allows an attacker to deploy a beacon on the victim machine, which can be used to execute commands and other malicious activities.",
    "type": "GUI",
    "tags": ["post-exploitation", "c2", "red team"]
  },
  {
    "id": "powershell-empire",
    "name": "PowerShell Empire",
    "category": "penetration-testing",
    "description": "A post-exploitation framework that includes a pure PowerShell2.0 Windows agent, and is now merged with Starkiller. It's the king of all-things-PowerShell.",
    "type": "CLI / GUI",
    "tags": ["powershell", "post-exploitation", "c2"]
  },
  {
    "id": "responder",
    "name": "Responder",
    "category": "penetration-testing",
    "description": "A LLMNR, NBT-NS and MDNS poisoner, with built-in HTTP/SMB/MSSQL/FTP/LDAP rogue authentication server supporting NTLMv1/NTLMv2/LMv2, Extended Security NTLMSSP and Basic HTTP authentication.",
    "type": "CLI",
    "tags": ["mitm", "llmnr poisoning", "hash grabbing"]
  },
  {
    "id": "bloodhound",
    "name": "BloodHound",
    "category": "penetration-testing",
    "description": "Uses graph theory to reveal the hidden and often unintended relationships within an Active Directory environment.",
    "type": "GUI",
    "tags": ["active directory", "graph analysis", "privilege escalation"]
  },
  {
    "id": "crackmapexec",
    "name": "CrackMapExec",
    "category": "penetration-testing",
    "description": "A swiss army knife for pentesting networks. It helps automate assessing the security of large Active Directory networks.",
    "type": "CLI",
    "tags": ["active directory", "lateral movement", "credential spraying"]
  },
  {
    "id": "impacket",
    "name": "Impacket",
    "category": "penetration-testing",
    "description": "A collection of Python classes for working with network protocols. Impacket is focused on providing low-level programmatic access to the packets.",
    "type": "CLI/Library",
    "tags": ["network protocols", "python", "windows protocols"]
  },
  {
    "id": "covenant",
    "name": "Covenant",
    "category": "penetration-testing",
    "description": "A .NET command and control framework that aims to highlight the attack surface of .NET, make the use of offensive .NET tradecraft easier.",
    "type": "Web UI",
    "tags": [".net", "c2 framework", "post-exploitation"]
  },
  {
    "id": "sliver",
    "name": "Sliver",
    "category": "penetration-testing",
    "description": "An open source cross-platform adversary emulation/red team framework, it can be used by organizations to perform security testing.",
    "type": "CLI",
    "tags": ["c2 framework", "cross-platform", "red team"]
  },
  {
    "id": "havoc",
    "name": "Havoc",
    "category": "penetration-testing",
    "description": "A modern and malleable post-exploitation command and control framework, created by @C5pider.",
    "type": "GUI",
    "tags": ["c2 framework", "post-exploitation", "modern"]
  },
  {
    "id": "mythic",
    "name": "Mythic",
    "category": "penetration-testing",
    "description": "A cross-platform, post-exploit, red teaming framework built with python3, docker, docker-compose, and a web browser UI.",
    "type": "Web UI",
    "tags": ["c2 framework", "cross-platform", "docker"]
  },
  {
    "id": "armitage",
    "name": "Armitage",
    "category": "penetration-testing",
    "description": "A scriptable red team collaboration tool for Metasploit that visualizes targets, recommends exploits, and exposes the advanced post-exploitation features.",
    "type": "GUI",
    "tags": ["metasploit gui", "collaboration", "visualization"]
  },
  {
    "id": "beef-framework",
    "name": "BeEF Framework",
    "category": "penetration-testing",
    "description": "The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser.",
    "type": "Web UI",
    "tags": ["browser exploitation", "client-side", "xss"]
  },
  {
    "id": "social-engineer-toolkit",
    "name": "Social-Engineer Toolkit",
    "category": "penetration-testing",
    "description": "An open-source penetration testing framework designed for social engineering with a number of custom attack vectors.",
    "type": "CLI",
    "tags": ["social engineering", "phishing", "attack vectors"]
  },
  {
    "id": "empire-starkiller",
    "name": "Starkiller",
    "category": "penetration-testing",
    "description": "A Frontend for PowerShell Empire. It is an Electron application written in VueJS.",
    "type": "GUI",
    "tags": ["empire frontend", "gui", "electron"]
  },
  {
    "id": "pupy",
    "name": "Pupy",
    "category": "penetration-testing",
    "description": "An opensource, cross-platform (Windows, Linux, OSX, Android) remote administration and post-exploitation tool mainly written in python.",
    "type": "CLI",
    "tags": ["rat", "cross-platform", "python"]
  },
  {
    "id": "koadic",
    "name": "Koadic",
    "category": "penetration-testing",
    "description": "A Windows post-exploitation rootkit similar to other penetration testing tools such as Meterpreter and Powershell Empire.",
    "type": "CLI",
    "tags": ["windows", "post-exploitation", "jscript"]
  },
  {
    "id": "villain",
    "name": "Villain",
    "category": "penetration-testing",
    "description": "A Windows & Linux backdoor generator and multi-session handler that allows users to connect with sibling servers.",
    "type": "CLI",
    "tags": ["backdoor generator", "multi-session", "cross-platform"]
  },
  {
    "id": "caldera",
    "name": "CALDERA",
    "category": "penetration-testing",
    "description": "A cyber security platform designed to easily automate adversary emulation, assist manual red-teams, and automate incident response.",
    "type": "Web UI",
    "tags": ["adversary emulation", "mitre att&ck", "automation"]
  },
  {
    "id": "atomic-red-team",
    "name": "Atomic Red Team",
    "category": "penetration-testing",
    "description": "Small and highly portable detection tests based on MITRE's ATT&CK framework. Each test is designed to map to a single tactic.",
    "type": "CLI/Scripts",
    "tags": ["mitre att&ck", "detection tests", "red team"]
  }
];
