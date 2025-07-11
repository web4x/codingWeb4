# Step 01 – Install & Configure Docker Desktop (Windows)

This step walks through downloading, installing, and initializing Docker Desktop on a Windows machine, including WSL integration. The goal is to get Docker ready for use in a development environment that can later be replicated or adapted cross-platform.

---

## 🧭 Overview

| Step | Action |  
|------|--------|  
| [1.1](#11-download-docker-desktop) | Download Docker Desktop for Windows (Intel/AMD) |  
| [1.2](#12-run-the-installer--reboot) | Run the installer and reboot when prompted |  
| [1.3](#13-first-launch--docker-login) | Launch Docker Desktop and log in |  
| [1.4](#14-update-the-windows-subsystem-for-linux-wsl) | Update the Windows Subsystem for Linux (WSL) via PowerShell |  
| [1.5](#15-restart-docker-desktop) | Restart Docker to finalize the WSL integration |

---

## 🧩 Detailed Steps

### 1.1 Download Docker Desktop

- Go to: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
- Choose the version labeled: **Windows (Intel/AMD)**
- Click to download the `.exe` installer

> 💡 Note: The “Intel/AMD” version refers to the standard x86-64 architecture. This is the correct version for most Windows laptops and desktops, regardless of whether the CPU is from Intel or AMD. Do **not** choose the ARM version unless you're running Windows on ARM.

---

### 1.2 Run the Installer & Reboot

- Launch the downloaded installer
- Follow the prompts and agree to any optional configuration Docker may suggest
- When prompted, **reboot your system**

---

### 1.3 First Launch & Docker Login

- After reboot, Docker Desktop will start automatically
- Sign in using your Docker Hub credentials  
  > If you don’t have an account, you can create one at [https://hub.docker.com/signup](https://hub.docker.com/signup)

---

### 1.4 Update the Windows Subsystem for Linux (WSL)

Docker Desktop will notify you that WSL needs to be updated. To do so:

1. Open **PowerShell** as administrator
2. Run the following command:

   ```powershell
   wsl --update
