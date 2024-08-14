<!DOCTYPE html>
<html lang=\en\<head>
<link rel=\stylesheet\ href=\styles.css\</head>
<body>
<h1>Setting Up Development, QA, UAT, and PROD Environments</h1>
<h2>Using WSL 2 and Ubuntu on Your Windows Laptop</h2>

<section id=\introduction\ <h2>Is it Possible?</h2>
<p><strong>Yes, it's possible</strong> to set up multiple environments like Dev, QA, UAT, and PROD on a Windows laptop using WSL 2 with an Ubuntu distribution. WSL 2 allows you to run a Linux kernel on Windows, providing a Linux environment without the need for a virtual machine.</p>
</section>

<section id=\setup-steps\ <h2>Steps to Set Up</h2>

<article>
<h3>1. Install WSL 2</h3>
<p><strong>What:</strong> Install WSL 2 on your Windows machine.</p>
<p><strong>How:</strong> Use PowerShell with admin privileges and run:</p>
<pre><code>wsl --install</code></pre>
<p>After installing WSL 2, install Ubuntu from the Microsoft Store.</p>
</article>

<article>
<h3>2. Environment Segregation</h3>
<p><strong>What:</strong> Create separate directories or use separate WSL distributions for each environment (Dev, QA, UAT, PROD).</p>
<p><strong>How:</strong> Use the <code>wsl --list --online</code> command to see available distributions and install them using <code>wsl --install &lt;DistributionName&gt;</code>. Each environment can have its configurations.</p>
</article>

<article>
<h3>3. Install Required Tools</h3>
<p><strong>What:</strong> Install development tools, databases, web servers, etc., required for your application in each environment.</p>
<p><strong>How:</strong> Use package managers like <code>apt</code> within Ubuntu to install software, e.g.,</p>
<pre><code>sudo apt install nodejs</code></pre>
</article>

<article>
<h3>4. Environment Configuration</h3>
<p><strong>What:</strong> Configure each environment with different environment variables, configuration files, and databases.</p>
<p><strong>How:</strong> Set environment variables in <code>.bashrc</code> or <code>.profile</code>.</p>
</article>

<article>
<h3>5. Containerization (Optional)</h3>
<p><strong>What:</strong> Use Docker within WSL 2 to containerize each environment.</p>
<p><strong>How:</strong> Install Docker in WSL 2 and create Docker Compose files to manage multi-container setups.</p>
</article>
</section>

<section id=\developer-workflows\ <h2>Support for Developer Workflows</h2>

<article>
<h3>1. VS Code</h3>
<p><strong>What:</strong> Set up VS Code as the primary IDE for development.</p>
<p><strong>How:</strong> Install the WSL extension for VS Code to seamlessly work with files and run commands in the WSL 2 environment.</p>
</article>

<article>
<h3>2. Remote Development Containers</h3>
<p><strong>What:</strong> Use Docker containers as development environments.</p>
<p><strong>How:</strong> Configure <code>.devcontainer.json</code> to define the development container.</p>
</article>

<article>
<h3>3. Local Kubernetes Clusters</h3>
<p><strong>What:</strong> Set up a local Kubernetes cluster for testing and development.</p>
<p><strong>How:</strong> Use <code>minikube</code> or <code>kind</code> within WSL 2 to create a local Kubernetes cluster.</p>
</article>
</section>

<footer>
<p>This setup provides a robust environment on a local machine, allowing the Platform Engineering team to simulate different stages of the software lifecycle while supporting developers with the necessary tools and configurations.</p>
</footer>
</body>
</html>