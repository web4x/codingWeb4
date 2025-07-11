# Step 04 – Run and Manage Project Containers

This step covers starting the project containers, verifying they run correctly, and managing their lifecycle.

---

## 🧭 Overview

| Step | Action |  
|-------|---------|  
| 4.1   | Run the project containers with `./up` |  
| 4.2   | Verify container startup and logs |  
| 4.3   | Stop or restart containers |  
| 4.4   | Next steps and troubleshooting |

---

## 🧩 Detailed Steps

### 4.1 Run the project containers

1. Open your terminal (Git Bash or Ubuntu WSL, whichever you prefer)  
2. Navigate to your project directory:  

<pre>
cd path/to/your/project
</pre>  

3. Run the startup script:  

<pre>
./up
</pre>  

4. You will be prompted to provide some configuration info (e.g., your name, email). Fill in as needed.  
5. Confirm the prompts by typing `yes` or `y` to start the containers.  

*The script will pull necessary images, configure SSH keys inside the containers, and launch your project services.*

---

### 4.2 Verify container startup and logs

- After starting, watch the terminal output for any errors.  
- If everything goes well, you should see container logs indicating success, e.g.:  

<pre>
SUCCESS> root ssh is settup
Cloning into 'EAMD.ucp'...
...
</pre>

- You can list running containers in a new terminal with:  

<pre>
docker ps
</pre>

- To view logs of a specific container:  

<pre>
docker logs &lt;container_name_or_id&gt;
</pre>

---

### 4.3 Stop or restart containers

- To stop the running containers, press `Ctrl + C` in the terminal running `./up`, or open a new terminal and run:  

<pre>
docker-compose down
</pre>  

- To start the containers again later, just rerun:  

<pre>
./up
</pre>  

- Note: If your `./up` script supports a detached mode (running containers in background), check the script or ask your team about using:  

<pre>
./up -d
</pre>

---

### 4.4 Next steps and troubleshooting

- If you encounter errors during container startup, check the terminal logs for clues.  
- Verify your SSH keys are properly set up, as some containers depend on SSH for cloning repos.  
- Ensure Docker Desktop is running and WSL integration is enabled.  
- For any container networking issues, try restarting Docker Desktop and your WSL distro.  
- Consult the project README or internal docs for specific service URLs or API endpoints once containers are up.  

---

## ✅ Outcome

- Project containers are running and ready for development or testing.  
- You know how to start, stop, and check logs for the containers.  
- You have basic troubleshooting knowledge for common startup issues.  
