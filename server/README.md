## rPi setup

###Firstly, we need to install a Python module, RPi.GPIO, to enable software control of the GPIO pins for the Raspberry Pi.
sudo apt-get install python-rpi.gpio

### Download latest nodejs build for Raspberry Pi:
wget https://nodejs.org/download/release/v0.10.0/node-v0.10.0-linux-arm-pi.tar.gz
cd /usr/local
sudo tar xzvf ~/node-v0.10.0-linux-arm-pi.tar.gz --strip=1

Next we'll install a tool called forever. It's a simple command line tool that runs your script and restarts it when it finishes running for any reason such as if it crashes out.

sudo npm install forever -g