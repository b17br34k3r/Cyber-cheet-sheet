const osintTools = [
  {
    "id": "shodan",
    "name": "Shodan",
    "category": "osint",
    "description": "A search engine for Internet-connected devices. It can be used to find servers, webcams, routers, and more.",
    "type": "Web UI",
    "tags": ["search engine", "iot", "device discovery"]
  },
  {
    "id": "theharvester",
    "name": "theHarvester",
    "category": "osint",
    "description": "A tool for gathering open-source intelligence (OSINT) on a company or domain. It gathers emails, names, subdomains, IPs, and URLs.",
    "type": "CLI",
    "tags": ["email harvesting", "subdomain enumeration", "reconnaissance"]
  },
  {
    "id": "recon-ng",
    "name": "Recon-ng",
    "category": "osint",
    "description": "A full-featured Web Reconnaissance framework written in Python. Complete with independent modules, database interaction, built in convenience functions, interactive help, and command completion.",
    "type": "CLI",
    "tags": ["reconnaissance framework", "osint", "automation"]
  },
  {
    "id": "maltego",
    "name": "Maltego",
    "category": "osint",
    "description": "An interactive data mining tool that renders directed graphs for link analysis. The tool is used in online investigations for finding relationships between pieces of information.",
    "type": "GUI",
    "tags": ["link analysis", "data mining", "visualization"]
  },
  {
    "id": "spiderfoot",
    "name": "SpiderFoot",
    "category": "osint",
    "description": "An open source intelligence (OSINT) automation tool. It integrates with just about every data source available and utilises a range of methods for data analysis.",
    "type": "Web UI",
    "tags": ["automation", "data sources", "intelligence gathering"]
  },
  {
    "id": "osrframework",
    "name": "OSRFramework",
    "category": "osint",
    "description": "A set of libraries developed by i3visio to perform Open Source Intelligence tasks. They include references to a bunch of different applications related to username checking, DNS lookups, information leaks research, deep web search, regular expressions extraction, and many others.",
    "type": "CLI",
    "tags": ["username checking", "information leaks", "deep web"]
  },
  {
    "id": "sherlock",
    "name": "Sherlock",
    "category": "osint",
    "description": "Hunt down social media accounts by username across social networks.",
    "type": "CLI",
    "tags": ["username search", "social media", "account hunting"]
  },
  {
    "id": "twint",
    "name": "Twint",
    "category": "osint",
    "description": "An advanced Twitter scraping tool written in Python that allows for scraping Tweets from Twitter profiles without using Twitter's API.",
    "type": "CLI",
    "tags": ["twitter scraping", "social media", "no api"]
  },
  {
    "id": "photon",
    "name": "Photon",
    "category": "osint",
    "description": "A lightning fast web crawler which extracts URLs, files, intel & endpoints from a target.",
    "type": "CLI",
    "tags": ["web crawler", "url extraction", "endpoint discovery"]
  },
  {
    "id": "metagoofil",
    "name": "Metagoofil",
    "category": "osint",
    "description": "An information gathering tool designed for extracting metadata of public documents (pdf,doc,xls,ppt,docx,pptx,xlsx) belonging to a target company.",
    "type": "CLI",
    "tags": ["metadata extraction", "document analysis", "information leakage"]
  },
  {
    "id": "foca",
    "name": "FOCA",
    "category": "osint",
    "description": "A tool used mainly to find metadata and hidden information in the documents its scans. These documents may be on web pages, and can be downloaded and analyzed with FOCA.",
    "type": "GUI",
    "tags": ["metadata analysis", "document scanning", "hidden information"]
  },
  {
    "id": "creepy",
    "name": "Creepy",
    "category": "osint",
    "description": "A geolocation OSINT tool. Offers geolocation information gathering through social networking platforms.",
    "type": "GUI",
    "tags": ["geolocation", "social networks", "location tracking"]
  },
  {
    "id": "exifread",
    "name": "ExifRead",
    "category": "osint",
    "description": "Easy to use Python library to extract Exif metadata from tiff and jpeg files.",
    "type": "CLI/Library",
    "tags": ["exif data", "metadata", "image analysis"]
  },
  {
    "id": "dmitry",
    "name": "DMitry",
    "category": "osint",
    "description": "Deepmagic Information Gathering Tool. A UNIX/(GNU)Linux Command Line Application coded in C. DMitry can find possible subdomains, email addresses, uptime information, tcp port scan, whois lookups, and more.",
    "type": "CLI",
    "tags": ["information gathering", "subdomain enumeration", "port scanning"]
  },
  {
    "id": "fierce",
    "name": "Fierce",
    "category": "osint",
    "description": "A semi-lightweight scanner that helps locate non-contiguous IP space and hostnames against specified domains.",
    "type": "CLI",
    "tags": ["domain scanner", "ip enumeration", "hostname discovery"]
  },
  {
    "id": "dnsrecon",
    "name": "DNSRecon",
    "category": "osint",
    "description": "A Python script that provides the ability to perform: Check all NS Records for Zone Transfers, Enumerate General DNS Records for a given Domain, Perform common SRV Record Enumeration, and more.",
    "type": "CLI",
    "tags": ["dns enumeration", "zone transfer", "srv records"]
  },
  {
    "id": "dnsenum",
    "name": "DNSEnum",
    "category": "osint",
    "description": "A perl script that enumerates DNS information from a domain and attempts zone transfers.",
    "type": "CLI",
    "tags": ["dns enumeration", "zone transfer", "perl"]
  },
  {
    "id": "urlcrazy",
    "name": "URLCrazy",
    "category": "osint",
    "description": "Generate and test domain typos and variations to detect and perform typo squatting, URL hijacking, phishing, and corporate espionage.",
    "type": "CLI",
    "tags": ["typo squatting", "domain variations", "phishing detection"]
  },
  {
    "id": "waybackurls",
    "name": "waybackurls",
    "category": "osint",
    "description": "Fetch all the URLs that the Wayback Machine knows about for a domain.",
    "type": "CLI",
    "tags": ["wayback machine", "historical urls", "archive"]
  },
  {
    "id": "gau",
    "name": "gau (GetAllUrls)",
    "category": "osint",
    "description": "Fetches known URLs from AlienVault's Open Threat Exchange, the Wayback Machine, and Common Crawl for any given domain.",
    "type": "CLI",
    "tags": ["url collection", "multiple sources", "domain reconnaissance"]
  }
];
