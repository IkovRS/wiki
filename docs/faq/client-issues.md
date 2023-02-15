---
sidebar_position: 1
---
# Troubleshooting problems with the client
If your client or launcher is not launching or is misbehaving, try one of the steps below to try to resolve the issue. Also make sure to check logs for presence of any Exception or ERROR:.

To find logs, do one of the following things:

- Navigate to `%userprofile%\.ikov\logs` on Windows or `$HOME/.ikov/logs` on Linux and macOS.

# Client not launching
If you see error fetching bootstrap in launcher.log you are unable to connect to Ikov servers to get the bootstrap for startup. The error will be accompanied by an exception

- ConnectException: Connection timed out - this is caused by either a firewall blocking the connection or a routing issue, try adding an exception in your firewall for runelite, reseting/changing your current network.
- IOException: Server returned HTTP response code: 403 - this means the server has seen your request but is denying you, in our case that would be cloudflare intentionally blocking your connection for whatever reason.

### javax.net.ssl.SSLHandshakeException: PKIX path building failed
Some software or certificate installed on your computer is interrupting the secure connection to download the launcher bootstrap. This may be caused by antivirus software, a root certificate (such as those which may be installed on computers used for work), or any number of other sources. To circumvent this, you can try adjusting your antivirus settings or disabling them temporarily or, if no other workaround will work, by using the --insecure-skip-tls-verification launcher flag.

*** Option 1 ***
- Go to the ikov launcher and Right click "Properties".
- Go to "Shortcut" and type at the target bar `--insecure-skip-tls-verification` behind the URL.
- Save en retry to launch the game

*** Options 2 ***
- Download the certificate from Ikov
- Go to [ikov.io/download](https://ikov.io/download)
- Go to the Keychain (Lock) next to the URL 
- Go to Security 
- Go to Certificate is valid
- Go to Details and export the certificate
- Install the Certificate on your Local computer.
- Check if the download/install is working
- if not, remove Ikov and install it again.

### java.net.ProtocolException on Mac OSX
This is caused by having SOCKS proxy enabled on your network settings

### Deleting the cache (Last Precaution)

Navigate to `%userprofile%\.ikov\` on Windows or `$HOME/.ikov/` on Linux and macOS, then delete the `cache` folder. Do not delete anything else as you may find you'll lose RuneLite settings and saved credentials.