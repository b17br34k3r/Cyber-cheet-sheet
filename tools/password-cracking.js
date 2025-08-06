const passwordCrackingTools = [
    {
        "id": "john-the-ripper",
        "name": "John the Ripper",
        "category": "password-cracking",
        "description": "A fast password cracker, available for many platforms. Primarily used to detect weak Unix passwords.",
        "type": "CLI",
        "tags": ["hash cracking", "offline attack", "dictionary attack"]
    },
    {
        "id": "hashcat",
        "name": "Hashcat",
        "category": "password-cracking",
        "description": "The world's fastest and most advanced password recovery utility, supporting GPU-based cracking.",
        "type": "CLI",
        "tags": ["gpu cracking", "hash cracking", "brute-force"]
    },
    {
        "id": "hydra",
        "name": "Hydra",
        "category": "password-cracking",
        "description": "A parallelized login cracker which supports numerous protocols to attack online services.",
        "type": "CLI",
        "tags": ["online attack", "brute-force", "login cracker"]
    },
    {
        "id": "cain-and-abel",
        "name": "Cain & Abel",
        "category": "password-cracking",
        "description": "A password recovery tool for Microsoft Windows that can recover passwords by sniffing the network and cracking hashes.",
        "type": "GUI",
        "tags": ["windows", "sniffer", "arp spoofing"]
    },
    {
        "id": "medusa",
        "name": "Medusa",
        "category": "password-cracking",
        "description": "A speedy, parallel, modular, login brute-forcer. Supports many services that allow remote authentication.",
        "type": "CLI",
        "tags": ["online attack", "brute-force", "modular"]
    },
    {
        "id": "ophcrack",
        "name": "Ophcrack",
        "category": "password-cracking",
        "description": "A free Windows password cracker based on rainbow tables. It comes with a GUI and runs on multiple platforms.",
        "type": "GUI",
        "tags": ["windows", "rainbow tables", "lm hashes"]
    },
    {
        "id": "l0phtcrack",
        "name": "L0phtCrack",
        "category": "password-cracking",
        "description": "A password auditing and recovery application, famous for its ability to crack Windows passwords from hashes.",
        "type": "GUI",
        "tags": ["windows", "auditing", "password recovery"]
    },
    {
        "id": "samdump2",
        "name": "SAMDUMP2",
        "category": "password-cracking",
        "description": "A command-line tool that can dump Windows password hashes from the SAM file.",
        "type": "CLI",
        "tags": ["windows", "hash dumping", "sam file"]
    },
    {
        "id": "pwdump",
        "name": "pwdump",
        "category": "password-cracking",
        "description": "Various Windows tools that dump the LM and NTLM password hashes of local user accounts from the SAM.",
        "type": "CLI",
        "tags": ["windows", "hash dumping", "ntlm"]
    },
    {
        "id": "fgdump",
        "name": "fgdump",
        "category": "password-cracking",
        "description": "An improved version of pwdump that can extract LanMan and NTLM password hashes from Windows.",
        "type": "CLI",
        "tags": ["windows", "hash dumping", "ntlm"]
    },
    {
        "id": "cewl",
        "name": "CeWL",
        "category": "password-cracking",
        "description": "A custom wordlist generator that spiders a given URL to a specified depth, optionally following external links, and returns a list of words.",
        "type": "CLI",
        "tags": ["wordlist generator", "osint", "custom dictionary"]
    },
    {
        "id": "crunch",
        "name": "Crunch",
        "category": "password-cracking",
        "description": "A wordlist generator where you can specify a standard character set or a character set you specify.",
        "type": "CLI",
        "tags": ["wordlist generator", "brute-force", "permutations"]
    },
    {
        "id": "patator",
        "name": "Patator",
        "category": "password-cracking",
        "description": "A multi-purpose brute-forcer, with a modular design and a flexible usage.",
        "type": "CLI",
        "tags": ["brute-force", "modular", "multi-purpose"]
    },
    {
        "id": "ncrack",
        "name": "Ncrack",
        "category": "password-cracking",
        "description": "A high-speed network authentication cracking tool. It was built to help companies secure their networks by proactively testing all their hosts and networking devices for poor passwords.",
        "type": "CLI",
        "tags": ["online attack", "network", "nmap"]
    },
    {
        "id": "crowbar",
        "name": "Crowbar",
        "category": "password-cracking",
        "description": "A brute-forcing tool that can be used during penetration tests. It is developed to brute force some protocols in a different way than other popular tools.",
        "type": "CLI",
        "tags": ["brute-force", "rdp", "ssh keys"]
    },
    {
        "id": "thc-pptp-bruter",
        "name": "THC-PPTP-Bruter",
        "category": "password-cracking",
        "description": "A brute force program against PPTP VPN endpoints (TCP port 1723).",
        "type": "CLI",
        "tags": ["vpn", "pptp", "brute-force"]
    },
    {
        "id": "mimikatz",
        "name": "Mimikatz",
        "category": "password-cracking",
        "description": "A tool that makes it possible to view and save authentication credentials like cleartext passwords and Kerberos tickets from memory.",
        "type": "CLI",
        "tags": ["credential dumping", "windows", "post-exploitation"]
    },
    {
        "id": "dsniff",
        "name": "dsniff",
        "category": "password-cracking",
        "description": "A collection of tools for network auditing and penetration testing. dsniff, filesnarf, mailsnarf, msgsnarf, urlsnarf, and webspy monitor a network for interesting data.",
        "type": "CLI",
        "tags": ["sniffer", "network analysis", "mitm"]
    },
    {
        "id": "sucrack",
        "name": "sucrack",
        "category": "password-cracking",
        "description": "A multithreaded Linux/UNIX tool for brute-force cracking of local user accounts via su.",
        "type": "CLI",
        "tags": ["linux", "brute-force", "su"]
    },
    {
        "id": "rainbowcrack",
        "name": "RainbowCrack",
        "category": "password-cracking",
        "description": "A computer program which cracks hashes with rainbow tables. It is a time-memory tradeoff attack.",
        "type": "CLI",
        "tags": ["rainbow tables", "hash cracking", "offline attack"]
    }
];
