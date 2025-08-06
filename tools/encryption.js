const encryptionTools = [
  {
    "id": "gnupg",
    "name": "GnuPG",
    "category": "encryption",
    "description": "A complete and free implementation of the OpenPGP standard as defined by RFC4880. GnuPG allows you to encrypt and sign your data and communications.",
    "type": "CLI",
    "tags": ["pgp", "email encryption", "file encryption"]
  },
  {
    "id": "veracrypt",
    "name": "VeraCrypt",
    "category": "encryption",
    "description": "A free open source disk encryption software for Windows, macOS, and Linux. It can create a virtual encrypted disk within a file or encrypt a partition or the entire storage device.",
    "type": "GUI",
    "tags": ["disk encryption", "plausible deniability", "on-the-fly"]
  },
  {
    "id": "openssl",
    "name": "OpenSSL",
    "category": "encryption",
    "description": "A robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols. Also a general-purpose cryptography library.",
    "type": "CLI",
    "tags": ["ssl", "tls", "certificate management"]
  },
  {
    "id": "bitlocker",
    "name": "BitLocker",
    "category": "encryption",
    "description": "A full disk encryption feature included with Microsoft Windows versions starting with Windows Vista. It is designed to protect data by providing encryption for entire volumes.",
    "type": "GUI",
    "tags": ["windows", "full disk encryption", "tpm"]
  },
  {
    "id": "luks",
    "name": "LUKS",
    "category": "encryption",
    "description": "Linux Unified Key Setup is a disk encryption specification created by Clemens Fruhwirth in 2004 and was originally intended for Linux.",
    "type": "CLI",
    "tags": ["linux", "disk encryption", "dm-crypt"]
  },
  {
    "id": "7zip",
    "name": "7-Zip",
    "category": "encryption",
    "description": "A file archiver with a high compression ratio that supports AES-256 encryption for archives.",
    "type": "GUI/CLI",
    "tags": ["archive encryption", "compression", "aes-256"]
  },
  {
    "id": "axcrypt",
    "name": "AxCrypt",
    "category": "encryption",
    "description": "A simple file encryption software for Windows, macOS, Android, and iOS. It integrates seamlessly with Windows to compress, encrypt, decrypt, store, send and work with individual files.",
    "type": "GUI",
    "tags": ["file encryption", "integration", "cloud sync"]
  },
  {
    "id": "cryptomator",
    "name": "Cryptomator",
    "category": "encryption",
    "description": "Free client-side encryption for your cloud files. Open source software: No backdoors, no registration.",
    "type": "GUI",
    "tags": ["cloud encryption", "client-side", "open source"]
  },
  {
    "id": "age",
    "name": "age",
    "category": "encryption",
    "description": "A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.",
    "type": "CLI",
    "tags": ["modern encryption", "simple", "composable"]
  },
  {
    "id": "ccrypt",
    "name": "ccrypt",
    "category": "encryption",
    "description": "A utility for encrypting and decrypting files and streams. It was designed as a replacement for the standard unix crypt utility.",
    "type": "CLI",
    "tags": ["file encryption", "stream encryption", "unix"]
  },
  {
    "id": "encfs",
    "name": "EncFS",
    "category": "encryption",
    "description": "Provides an encrypted filesystem in user-space. It runs in userspace, using the FUSE library for the filesystem interface.",
    "type": "CLI",
    "tags": ["filesystem encryption", "fuse", "userspace"]
  },
  {
    "id": "gocryptfs",
    "name": "gocryptfs",
    "category": "encryption",
    "description": "An encrypted overlay filesystem written in Go. It is conceptually similar to EncFS, but faster and with a few security improvements.",
    "type": "CLI",
    "tags": ["filesystem encryption", "go", "performance"]
  },
  {
    "id": "tomb",
    "name": "Tomb",
    "category": "encryption",
    "description": "A simple tool to manage encrypted storage on GNU/Linux, written in code that is easy to review and links commonly shared components.",
    "type": "CLI",
    "tags": ["encrypted storage", "linux", "steganography"]
  },
  {
    "id": "kleopatra",
    "name": "Kleopatra",
    "category": "encryption",
    "description": "A certificate manager and GUI for GnuPG. The software stores your OpenPGP certificates and keys.",
    "type": "GUI",
    "tags": ["certificate manager", "gnupg gui", "key management"]
  },
  {
    "id": "seahorse",
    "name": "Seahorse",
    "category": "encryption",
    "description": "A GNOME application for managing encryption keys and passwords in the GNOME Keyring.",
    "type": "GUI",
    "tags": ["gnome", "key management", "keyring"]
  },
  {
    "id": "cryptsetup",
    "name": "cryptsetup",
    "category": "encryption",
    "description": "A utility used to conveniently set up disk encryption based on the DMCrypt kernel module.",
    "type": "CLI",
    "tags": ["disk encryption", "dm-crypt", "luks"]
  },
  {
    "id": "steghide",
    "name": "Steghide",
    "category": "encryption",
    "description": "A steganography program that is able to hide data in various kinds of image- and audio-files.",
    "type": "CLI",
    "tags": ["steganography", "image hiding", "audio hiding"]
  },
  {
    "id": "outguess",
    "name": "OutGuess",
    "category": "encryption",
    "description": "A universal steganographic tool that allows the insertion of hidden information into the redundant bits of data sources.",
    "type": "CLI",
    "tags": ["steganography", "data hiding", "redundant bits"]
  },
  {
    "id": "hashicorp-vault",
    "name": "HashiCorp Vault",
    "category": "encryption",
    "description": "A tool for securely accessing secrets. A secret is anything that you want to tightly control access to, such as API keys, passwords, or certificates.",
    "type": "Server/CLI",
    "tags": ["secret management", "api keys", "enterprise"]
  },
  {
    "id": "keybase",
    "name": "Keybase",
    "category": "encryption",
    "description": "A key directory that maps social media identities to encryption keys in a publicly auditable manner.",
    "type": "GUI/CLI",
    "tags": ["identity verification", "social proof", "encrypted chat"]
  }
];
