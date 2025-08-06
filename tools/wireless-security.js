const wirelessSecurityTools = [
  {
    "id": "aircrack-ng",
    "name": "Aircrack-ng",
    "category": "wireless-security",
    "description": "A complete suite of tools to assess Wi-Fi network security. It focuses on different areas of Wi-Fi security: monitoring, attacking, testing, and cracking.",
    "type": "CLI",
    "tags": ["wep", "wpa/wpa2-psk", "packet sniffing"]
  },
  {
    "id": "kismet",
    "name": "Kismet",
    "category": "wireless-security",
    "description": "A wireless network detector, sniffer, and intrusion detection system. Kismet works with Wi-Fi, Bluetooth, some SDRs, and other wireless protocols.",
    "type": "Web UI",
    "tags": ["wardriving", "ids", "sniffer"]
  },
  {
    "id": "wifite",
    "name": "WiFite",
    "category": "wireless-security",
    "description": "An automated wireless attack tool. It is designed to be a 'set it and forget it' script for auditing wireless networks.",
    "type": "CLI",
    "tags": ["automation", "wep", "wps"]
  },
  {
    "id": "reaver",
    "name": "Reaver",
    "category": "wireless-security",
    "description": "Implements a brute force attack against Wi-Fi Protected Setup (WPS) registrar PINs in order to recover WPA/WPA2 passphrases.",
    "type": "CLI",
    "tags": ["wps", "brute-force", "pin attack"]
  },
  {
    "id": "bully",
    "name": "Bully",
    "category": "wireless-security",
    "description": "A new implementation of the WPS brute force attack, written in C. It is conceptually identical to other WPS implementations.",
    "type": "CLI",
    "tags": ["wps", "brute-force", "c implementation"]
  },
  {
    "id": "pixiewps",
    "name": "Pixiewps",
    "category": "wireless-security",
    "description": "An offline Wi-Fi Protected Setup brute-force utility that exploits the low or non-existing entropy of some Access Points.",
    "type": "CLI",
    "tags": ["wps", "offline attack", "pixie dust"]
  },
  {
    "id": "wash",
    "name": "Wash",
    "category": "wireless-security",
    "description": "A utility for identifying WPS enabled access points. It can survey from a live interface or read from a pcap capture file.",
    "type": "CLI",
    "tags": ["wps scanning", "reconnaissance", "survey"]
  },
  {
    "id": "fern-wifi-cracker",
    "name": "Fern Wifi Cracker",
    "category": "wireless-security",
    "description": "A Wireless security auditing and attack software program written using the Python Programming Language and the Python Qt GUI library.",
    "type": "GUI",
    "tags": ["gui", "python", "wireless auditing"]
  },
  {
    "id": "wifiphisher",
    "name": "Wifiphisher",
    "category": "wireless-security",
    "description": "A rogue Access Point framework for conducting red team engagements or Wi-Fi security testing.",
    "type": "CLI",
    "tags": ["rogue ap", "evil twin", "captive portal"]
  },
  {
    "id": "fluxion",
    "name": "Fluxion",
    "category": "wireless-security",
    "description": "A security auditing and social-engineering research tool. It is a remake of linset by vk496 with fewer bugs and more functionality.",
    "type": "CLI",
    "tags": ["evil twin", "captive portal", "social engineering"]
  },
  {
    "id": "mdk3",
    "name": "MDK3",
    "category": "wireless-security",
    "description": "A proof of concept tool to exploit common IEEE 802.11 protocol weaknesses. It implements various attacks to test 802.11 networks.",
    "type": "CLI",
    "tags": ["802.11 attacks", "deauth", "beacon flood"]
  },
  {
    "id": "mdk4",
    "name": "MDK4",
    "category": "wireless-security",
    "description": "A new version of MDK3. This tool is used for IEEE 802.11 penetration testing and includes various attack modes.",
    "type": "CLI",
    "tags": ["802.11 attacks", "penetration testing", "wireless"]
  },
  {
    "id": "aireplay-ng",
    "name": "Aireplay-ng",
    "category": "wireless-security",
    "description": "A packet injector that is part of the Aircrack-ng suite. It is used to generate traffic for the later use in aircrack-ng for cracking the WEP and WPA-PSK keys.",
    "type": "CLI",
    "tags": ["packet injection", "traffic generation", "aircrack-ng"]
  },
  {
    "id": "airodump-ng",
    "name": "Airodump-ng",
    "category": "wireless-security",
    "description": "A packet sniffer that places air traffic into pcap or IVS compatible files and shows information about wireless networks.",
    "type": "CLI",
    "tags": ["packet sniffing", "monitoring", "aircrack-ng"]
  },
  {
    "id": "airmon-ng",
    "name": "Airmon-ng",
    "category": "wireless-security",
    "description": "A script that can be used to enable monitor mode on wireless interfaces. It may also be used to go back from monitor mode to managed mode.",
    "type": "CLI",
    "tags": ["monitor mode", "interface management", "aircrack-ng"]
  },
  {
    "id": "cowpatty",
    "name": "coWPAtty",
    "category": "wireless-security",
    "description": "An implementation of an offline dictionary attack against WPA/WPA2 networks using PSK-based authentication.",
    "type": "CLI",
    "tags": ["wpa/wpa2", "dictionary attack", "offline"]
  },
  {
    "id": "pyrit",
    "name": "Pyrit",
    "category": "wireless-security",
    "description": "A WPA/WPA2-PSK attack tool that takes advantage of the computational power of many-core and other platforms through ATI-Stream, Nvidia CUDA and OpenCL.",
    "type": "CLI",
    "tags": ["wpa/wpa2", "gpu acceleration", "cuda"]
  },
  {
    "id": "hashcat-wifi",
    "name": "Hashcat",
    "category": "wireless-security",
    "description": "Advanced password recovery utility supporting WPA/WPA2 handshake cracking with GPU acceleration.",
    "type": "CLI",
    "tags": ["wpa/wpa2", "gpu cracking", "handshake"]
  },
  {
    "id": "wpaclean",
    "name": "WPAclean",
    "category": "wireless-security",
    "description": "A tool to clean cap files from unnecessary packets, leaving only the 4-way handshake and removing duplicate frames.",
    "type": "CLI",
    "tags": ["handshake cleaning", "cap files", "aircrack-ng"]
  },
  {
    "id": "besside-ng",
    "name": "Besside-ng",
    "category": "wireless-security",
    "description": "An automated tool that cracks WEP encryption and also captures WPA handshakes. It's designed to be a 'fire and forget' wireless auditing tool.",
    "type": "CLI",
    "tags": ["automated", "wep cracking", "wpa capture"]
  }
];
