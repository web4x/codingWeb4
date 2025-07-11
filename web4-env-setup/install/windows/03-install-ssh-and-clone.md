# Step 3: Install Git Bash, Set Up SSH Key, and Clone the Repository

## 1. Install Git Bash

Git Bash is a command-line shell for Windows that provides Git and Unix commands.

- Download Git Bash here:  
  [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Run the installer and follow the setup instructions.
- After installation, open Git Bash (e.g., from the Start menu).

## 2. Generate SSH Key and Start SSH Agent

SSH keys allow secure authentication with GitHub without entering your password every time.

### 2.1 Check for existing SSH keys

Open Git Bash and run:

```bash
ls ~/.ssh

If you see files like id_ed25519 and id_ed25519.pub, you already have an SSH key. If not, continue to step 2.2.

2.2 Generate a new SSH key
Create a new SSH key using the recommended Ed25519 algorithm:

bash
Kopieren
Bearbeiten
ssh-keygen -t ed25519 -C "your.email@example.com"
Press Enter to accept the default file location (/c/Users/YourUsername/.ssh/id_ed25519).

Optionally enter a passphrase for added security, or press Enter to leave it empty.

2.3 Start the SSH agent
Start the SSH agent which manages your keys:

bash
Kopieren
Bearbeiten
eval "$(ssh-agent -s)"
2.4 Add your SSH key to the agent
Add the SSH private key you just created to the agent:

bash
Kopieren
Bearbeiten
ssh-add ~/.ssh/id_ed25519
2.5 Copy your public SSH key
Display your public SSH key and copy its entire content:

bash
Kopieren
Bearbeiten
cat ~/.ssh/id_ed25519.pub
It should look like this:

bash
Kopieren
Bearbeiten
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK2ohzmAhDaTtegkkRluKcpXo2ecGlLOV/pCFbprh5Ro your.email@example.com
3. Add the SSH key to your GitHub account
Log in to GitHub: https://github.com

Click on your profile picture (top-right) → Settings

Select SSH and GPG keys from the sidebar

Click New SSH key

Give your key a descriptive title (e.g., "My Laptop")

Paste your copied public SSH key into the "Key" field

Click Add SSH key

4. Test your SSH connection to GitHub
Run:

bash
Kopieren
Bearbeiten
ssh -T git@github.com
You should see a message like:

vbnet
Kopieren
Bearbeiten
Hi YourGitHubUsername! You've successfully authenticated, but GitHub does not provide shell access.
5. Clone the repository
Now you can clone the repository:

bash
Kopieren
Bearbeiten
git clone git@github.com:Cerulean-Circle-GmbH/WODA.2023.git
This will download the repository into your current folder.

Summary of important commands
bash
Kopieren
Bearbeiten
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add SSH key to agent
ssh-add ~/.ssh/id_ed25519

# Show public SSH key
cat ~/.ssh/id_ed25519.pub

# Test GitHub SSH connection
ssh -T git@github.com

# Clone repository
git clone git@github.com:Cerulean-Circle-GmbH/WODA.2023.git
