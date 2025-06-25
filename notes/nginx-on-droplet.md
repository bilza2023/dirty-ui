# Installing Nginx on a DigitalOcean Droplet

This guide provides step-by-step instructions for installing and configuring **Nginx** on a fresh Ubuntu server hosted on DigitalOcean. We'll cover how to serve content on multiple ports, resolve potential configuration conflicts, and explain SSL certificate installation for future use.

---

## Prerequisites

- A DigitalOcean droplet with Ubuntu installed.
- SSH access to the server.

---

## Step 1: Update and Install Nginx

1. **Update the package list:**
   ```bash
   sudo apt update
   ```

2. **Upgrade existing packages (optional):**
   ```bash
   sudo apt upgrade -y
   ```

3. **Install Nginx:**
   ```bash
   sudo apt install nginx -y
   ```

4. **Verify Nginx installation:**
   Check if Nginx is running:
   ```bash
   sudo systemctl status nginx
   ```
   You should see `active (running)`.

---

## Step 2: Configure Nginx for Multiple Ports

### Create Directories and Test Files

To test the configuration, create two directories and add simple HTML files:

```bash
sudo mkdir -p /var/www/port3000 /var/www/port5000

echo "This is port 3000" | sudo tee /var/www/port3000/index.html

echo "This is port 5000" | sudo tee /var/www/port5000/index.html
```

### Create an Nginx Configuration File

1. **Create a new configuration file:**
   ```bash
   sudo nano /etc/nginx/sites-available/taleemhelp
   ```

2. **Add the following content:**

   ```bash
   GNU nano 8.1                                 /etc/nginx/sites-available/taleemhelp                                          
server {
    listen 80;
    server_name _;

    root /var/www/port3000;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

server {
    listen 5000;
    server_name _;

    root /var/www/port5000;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
   ```

### Enable the Configuration

1. **Create a symbolic link in `sites-enabled`:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/taleemhelp /etc/nginx/sites-enabled/
   ```

2. **Remove the default configuration if it causes conflicts:**
   ```bash
   sudo rm /etc/nginx/sites-enabled/default
   ```

3. **Test the configuration:**
   ```bash
   sudo nginx -t
   ```

4. **Reload Nginx to apply changes:**
   ```bash
   sudo systemctl reload nginx
   ```

---

## Step 3: Serve Content on Default Port (80)

To serve `/var/www/port3000` on the default port **80**:

1. **Edit the configuration file:**
   ```bash
   sudo nano /etc/nginx/sites-available/taleemhelp
   ```

2. **Update the server block for port 3000:**
   Replace:
   ```nginx
   listen 3000;
   ```
   With:
   ```nginx
   listen 80;
   ```

3. **Test and reload Nginx:**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

Now, visiting `http://<your-server-ip>` serves the content from `/var/www/port3000`.

---

## Step 4: Adding SSL Certificates

### Can You Add SSL Without a Domain?

No, services like **Let’s Encrypt** require a valid domain pointing to your server to issue SSL certificates. However, once your domain is set up, you can easily install and configure SSL using Certbot. For temporary testing, you can create a **self-signed certificate**, though browsers will show a security warning.

### Adding SSL Later

When your domain (e.g., `taleem.help`) is configured, follow these steps:
1. Install Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```
2. Run Certbot to configure SSL:
   ```bash
   sudo certbot --nginx -d taleem.help
   ```
3. Verify SSL renewal:
   ```bash
   sudo certbot renew --dry-run
   ```

---

## Key Takeaways

Configuring Nginx mainly involves:
1. Creating a configuration file in `sites-available`.
2. Creating a symbolic link in `sites-enabled`.
3. Removing the default configuration if it creates conflicts.

With these steps, you now have a fully functional Nginx setup ready to serve content efficiently and securely!

