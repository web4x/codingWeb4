Step 2: Install Git Bash, Set Up SSH Key, and Clone the Repository
1. Install Git Bash
Git Bash is a command-line shell for Windows that provides Git and Unix commands.

Download Git Bash from the official website:
https://git-scm.com/downloads

Run the installer and follow the setup instructions.

After installation, open Git Bash (e.g. from the Start menu).

2. Generate SSH Key and Start SSH Agent
SSH keys allow secure authentication with GitHub without typing your password every time.

2.1 Check for existing SSH keys
Open Git Bash and run:

<pre> ls ~/.ssh </pre>
If you see files like id_ed25519 and id_ed25519.pub, you already have an SSH key and can skip to step 2.4.
If you don’t, continue with the next step.

2.2 Generate a new SSH key
Run this command to create a new SSH key using the Ed25519 algorithm:

<pre> ssh-keygen -t ed25519 -C "your_email@example.com" </pre>
Press Enter to accept the default file location, then (optionally) enter a secure passphrase.

2.3 Start the SSH agent
Start the SSH agent in the background with:

<pre> eval "$(ssh-agent -s)" </pre>
2.4 Add your SSH key to the agent
Now add your private key to the agent:

<pre> ssh-add ~/.ssh/id_ed25519 </pre>
You should see confirmation like:

Identity added: /c/Users/YOUR_NAME/.ssh/id_ed25519 (your_email@example.com)

3. Add the SSH key to your GitHub account
Copy the contents of your public key file:

<pre> cat ~/.ssh/id_ed25519.pub </pre>
Go to GitHub > Settings > SSH and GPG keys

Click New SSH key, give it a name (e.g. "My Laptop")

Paste the key into the "Key" field and click Add SSH key

4. Test your SSH connection to GitHub
Verify everything is working:

<pre> ssh -T git@github.com </pre>
You should see:

Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.

5. Clone the Repository
Now that SSH is set up, you can clone the repository:

<pre> git clone git@github.com:Cerulean-Circle-GmbH/WODA.2023.git </pre>
You should see output like:

<pre> Cloning into 'WODA.2023'... remote: Enumerating objects: ... ... Resolving deltas: ... </pre>
