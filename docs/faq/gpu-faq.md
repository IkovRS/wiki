---
sidebar_position: 2
---
# GPU FAQ

## Requirements
The GPU plugin requires Windows (7, 8, or 10), MacOS, or Linux, a GPU with support for OpenGL 4.3 or newer, and 2GB of VRAM. This requires either a Nvidia GeForce 400 or newer, an AMD Radeon HD 5000 Series or newer, or Intel HD Graphics with an Intel Haswell processor or newer. Ensure your GPU drivers are up to date.

It is possible there are configurations on which the GPU plugin does not work correctly. In particular, we recommend you do not enable it in dangerous situations ingame (HCIM!) until you sufficiently test whether the plugin is stable on your system.

### The plugin keeps turning itself off!
The plugin will turn off automatically if it is not supported on your current setup. If your system meets the requirements, but the plugin still turns itself off, see the troubleshooting steps below.

### I meet the ALL the requirements, but it still won't turn on or is very laggy?
If you have a Nvidia GPU, make sure you are using the 32 or 64 bit version of Ikov, not the For All Platforms Version. Then go into NVIDIA Control Panel -> Manage 3D settings -> Program settings. Click Add and find Ikov on the list, add it. In the lower section, find the OpenGL rendering GPU option, and set it to your NVIDIA GPU. 

### When I turn on Anti Aliasing weird lines appear
If you have an AMD graphics card, roll back the driver to version 18.12.1

### I'm getting incredibly high memory usage while using the GPU!
If you have an AMD graphics card, roll back the driver to version 18.12.1

### The client crashes when I enter a new location
If you have an AMD graphics card, roll back the driver to version 18.12.1