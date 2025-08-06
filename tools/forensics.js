const forensicsTools = [
    {
        "id": "autopsy",
        "name": "Autopsy",
        "category": "forensics",
        "description": "A digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools.",
        "type": "GUI",
        "tags": ["disk forensics", "file system analysis", "incident response"]
    },
    {
        "id": "the-sleuth-kit",
        "name": "The Sleuth Kit",
        "category": "forensics",
        "description": "A library and collection of command-line tools that allow you to investigate disk images.",
        "type": "CLI",
        "tags": ["disk forensics", "command-line", "library"]
    },
    {
        "id": "volatility-framework",
        "name": "Volatility Framework",
        "category": "forensics",
        "description": "An open-source memory forensics framework for incident response and malware analysis.",
        "type": "CLI",
        "tags": ["memory forensics", "malware analysis", "incident response"]
    },
    {
        "id": "wireshark",
        "name": "Wireshark",
        "category": "forensics",
        "description": "A widely-used network protocol analyzer for traffic analysis and network forensics.",
        "type": "GUI",
        "tags": ["network forensics", "pcap analysis", "protocol analyzer"]
    },
    {
        "id": "ftk-imager",
        "name": "FTK Imager",
        "category": "forensics",
        "description": "A data preview and imaging tool that creates forensic images of computer data.",
        "type": "GUI",
        "tags": ["disk imaging", "data preview", "evidence acquisition"]
    },
    {
        "id": "caine",
        "name": "CAINE",
        "category": "forensics",
        "description": "Computer Aided INvestigative Environment, a Linux distribution created as a digital forensics project.",
        "type": "OS/Live CD",
        "tags": ["live forensics", "linux distro", "investigation"]
    },
    {
        "id": "sift-workstation",
        "name": "SIFT Workstation",
        "category": "forensics",
        "description": "The SANS Investigative Forensic Toolkit (SIFT) is a VMware appliance pre-configured with the necessary tools to perform detailed digital forensic examinations.",
        "type": "OS/Appliance",
        "tags": ["sans", "linux distro", "forensic toolkit"]
    },
    {
        "id": "bulk-extractor",
        "name": "bulk_extractor",
        "category": "forensics",
        "description": "A tool that scans a disk image, a file, or a directory of files and extracts useful information without parsing the file system.",
        "type": "CLI",
        "tags": ["data carving", "feature extraction", "triage"]
    },
    {
        "id": "exiftool",
        "name": "ExifTool",
        "category": "forensics",
        "description": "A platform-independent Perl library plus a command-line application for reading, writing and editing meta information in a wide variety of files.",
        "type": "CLI",
        "tags": ["metadata analysis", "exif", "file analysis"]
    },
    {
        "id": "binwalk",
        "name": "Binwalk",
        "category": "forensics",
        "description": "A fast, easy to use tool for analyzing, reverse engineering, and extracting firmware images.",
        "type": "CLI",
        "tags": ["firmware analysis", "reverse engineering", "extraction"]
    },
    {
        "id": "foremost",
        "name": "Foremost",
        "category": "forensics",
        "description": "A console program to recover files based on their headers, footers, and internal data structures. This process is commonly referred to as data carving.",
        "type": "CLI",
        "tags": ["data carving", "file recovery", "command-line"]
    },
    {
        "id": "scalpel",
        "name": "Scalpel",
        "category": "forensics",
        "description": "An open-source and cross-platform file carver that is an overhaul of Foremost.",
        "type": "CLI",
        "tags": ["data carving", "file recovery", "high performance"]
    },
    {
        "id": "guymager",
        "name": "Guymager",
        "category": "forensics",
        "description": "A free forensic imager for media acquisition with an easy-to-use graphical interface.",
        "type": "GUI",
        "tags": ["disk imaging", "linux", "evidence acquisition"]
    },
    {
        "id": "regripper",
        "name": "RegRipper",
        "category": "forensics",
        "description": "An open-source tool, written in Perl, for extracting and parsing information from the Windows Registry.",
        "type": "CLI",
        "tags": ["windows registry", "registry analysis", "perl"]
    },
    {
        "id": "log2timeline",
        "name": "log2timeline/plaso",
        "category": "forensics",
        "description": "A tool designed to extract timestamps from various files found on a typical computer system and aggregate them.",
        "type": "CLI",
        "tags": ["timeline analysis", "event correlation", "super timeline"]
    },
    {
        "id": "xplico",
        "name": "Xplico",
        "category": "forensics",
        "description": "An Open Source Network Forensic Analysis Tool (NFAT) that reconstructs the contents of acquisitions performed with a packet sniffer.",
        "type": "Web UI",
        "tags": ["network forensics", "pcap analysis", "data reconstruction"]
    },
    {
        "id": "networkminer",
        "name": "NetworkMiner",
        "category": "forensics",
        "description": "An open source Network Forensic Analysis Tool (NFAT) for Windows. Can be used to analyze pcap files for extracted artifacts.",
        "type": "GUI",
        "tags": ["network forensics", "pcap analysis", "windows"]
    },
    {
        "id": "photorec",
        "name": "PhotoRec",
        "category": "forensics",
        "description": "File data recovery software designed to recover lost files including video, documents and archives from hard disks, CD-ROMs, and lost pictures.",
        "type": "CLI",
        "tags": ["file recovery", "data carving", "cross-platform"]
    },
    {
        "id": "x-ways-forensics",
        "name": "X-Ways Forensics",
        "category": "forensics",
        "description": "A comprehensive digital forensics software suite for professional investigators and law enforcement.",
        "type": "GUI",
        "tags": ["disk imaging", "evidence analysis", "digital forensics"]
    },
    {
        "id": "testdisk",
        "name": "TestDisk",
        "category": "forensics",
        "description": "Powerful free data recovery software primarily designed to help recover lost partitions and/or make non-booting disks bootable again.",
        "type": "CLI",
        "tags": ["partition recovery", "boot sector repair", "data recovery"]
    },
    {
        "id": "ddrescue",
        "name": "ddrescue",
        "category": "forensics",
        "description": "A data recovery tool that copies data from one file or block device to another, trying to rescue the good parts first in case of read errors.",
        "type": "CLI",
        "tags": ["disk imaging", "data recovery", "failing drives"]
    }
];
