# CircleCi Challenge1

## No. Curl isn't installed

During my investigation, I had to install curl with these commands
    `apt-get update`
    `apt-get install curl`
If you run `curl -v google.com` again, you will see
```
Running curl -v google.com again gets you:
* Rebuilt URL to: google.com/
* Hostname was NOT found in DNS cache
* Could not resolve proxy: myproxy.local
* Closing connection 0
curl: (5) Could not resolve proxy: myproxy.local
```

I tried running `nslookpu google.com` and received the this error
```
bash: nslookup: command not found`
root@605ba58494fc:/# nslookup google.com
bash: nslookup: command not found
```

So I installed `nslookup` by running `apt-get install lookup`.
I was still unsuccessful with my `nslookup` command.  So I attempted to add additional packages such as `utils` with `apt-get install bind-utils`.  However this was incorrect command. The correct command was `apt update && apt install dnutils`, which I found at https://chaseadams.io/posts/install-dig-and-nslookup-linux/.

`nslookup google` now provided me with information
```
Server:		192.168.65.1
Address:	192.168.65.1#53

Non-authoritative answer:
Name:	google.com
Address: 142.250.69.206
```

While researching why the domain name is not being recognized and found this stack overflow article https://stackoverflow.com/questions/24967855/curl-6-could-not-resolve-host-google-com-name-or-service-not-known and http://codeketchup.blogspot.com/2014/07/how-to-fix-curl-6-could-not-resolve.html.  I attempted to add the server to the DNS by doing the following:

- Type `cd /etc/modprobe.d/` to change directory to `/etc/modprobe.d/`
- Install `vi` by typing `apt-get install vim`.
- Type `vi disableipv6.conf` to create a new file
- Press `Esc` + `i` to insert data to or update file
- Type `reboot` to restart container

After doing this, I received an error message 
`Failed to talk to init daemon.`

### Second Attempt
Go back to root directory and restart container with `apt-get upgrade` to ensure the changes too effect and a reboot of the entire container can occur.

After research possible issues, I determined this could be a routing issue between ipv4 and ipv6.  Install `lsmod` with `apt-get install kmod` (See https://stackoverflow.com/questions/38229579/docker-container-lsmod-not-found)  As an attempt to resolve this, after reboot, open terminal and type `lsmod | grep ipv6`.  If no results occur, you have properly disabled ipv6. You can check the `resolv.conf` file to see which DNS server the container is using by typing  `cat /etc/resolv.conf`.  You may see the following note

```# This file is fetched from the host via vpnkit-bridge
nameserver 192.168.65.1```

I researched which Public DNS Servers Google has and found 
```
8.8.8.8
8.8.4.4
```
See https://developers.google.com/speed/public-dns/docs/using.

I added the Gogle public DNS servers to the resolv.conf file.  

Now it was time to try our command again . . . drum roll please . . . it was unsuccessful!

```
root@605ba58494fc:/# curl -v google.com
* Rebuilt URL to: google.com/
* Hostname was NOT found in DNS cache
* Could not resolve proxy: myproxy.local
* Closing connection 0
curl: (5) Could not resolve proxy: myproxy.local
```

I checked the resolv.conf file to ensure it was saved appropriately and it was.
```
File was saved appropriately
root@605ba58494fc:/# cat /etc/resolv.conf
# This file is fetched from the host via vpnkit-bridge
nameserver 192.168.65.1

nameserver 8.8.8.8
```
I even tried to force it to ipv4 and reset the proxy with little success.
```
root@605ba58494fc:/# curl -4 https://google.com
curl: (5) Could not resolve proxy: myproxy.local

Tried unsetting proxies with the following

`unset http_proxy`, `unset ftp_proxy` and `unset https_proxy`.  

```
root@42e4b89f4963:/# unset http_proxy
root@42e4b89f4963:/# unset ftp_proxy
root@42e4b89f4963:/# unset https_proxy
root@42e4b89f4963:/# curl -v google.com
* Rebuilt URL to: google.com/
* Hostname was NOT found in DNS cache
* Could not resolve proxy: myproxy.local
* Closing connection 0
curl: (5) Could not resolve proxy: myproxy.local

root@605ba58494fc:/# curl --noproxy 'myproxy.local' http://www.google.com
curl: (5) Could not resolve proxy: myproxy.local

(https://stackoverflow.com/questions/800805/how-do-i-make-curl-ignore-the-proxy)

root@605ba58494fc:/# export no_proxy="myproxy.local"
root@605ba58494fc:/# curl -v google.com
* Rebuilt URL to: google.com/
* Hostname was NOT found in DNS cache
* Could not resolve proxy: myproxy.local
* Closing connection 0
curl: (5) Could not resolve proxy: myproxy.local
```

### Third Attempt

I tried looking to see if the `profile`, `bash.bashrc` to see if there are any proxy settings but could not find any.

`cat etc/profile`
`cat etc/bash.bashrc` 

Alternatively, I wanted to do a `systemctl` and ended up getting a `D Bus` error.

Install sudo with ‘apt-get install sudo`
root@c868950ea821:/# sudo systemctl status
Failed to get D-Bus connection: Unknown error -1
root@c868950ea821:/# sudo systemctl status docker
Failed to get D-Bus connection: Unknown error -1



CONCLUSION:  I was unable to get the container to work properly.  However, enjoyed researching and investigating the issue.




