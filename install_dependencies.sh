#!/bin/bash

# Update apt package lists
apt-get update

# Install dependencies
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb


# Clean up
rm -rf /var/lib/apt/lists/*
