# Fonty: NodeJS server that provides fonts
A server implemented using node and express that provides fonts for web pages.

### Table of Contents
- <a href='#installation'>Installation</a>
- <a href="#usage">Usage</a>

## Installation
### Installation using Node
- Install [NodeJS](https://nodejs.org/en/download) by selecting your Operating System.
- clone this repo using ``git clone https://github.com/Arnj121/fonty.git``
- Install all dependencies using ``npm install``.
- Start the server using ``node server``.
### Installation using docker
- Install [Docker](https://www.docker.com/products/docker-desktop/) by selecting your OS.
- start docker desktop and docker engine.
- using docker hub. search for the image and run it as a container
- the container should run on port 2045.
## Usage
- To use the fonts, include the following tag in your ``<header>`` tag
``<link href="http://localhost:2045/public/fontawesome.css" rel="stylesheet" type="text/css"/>``
- And use the syntax to use the fonts in your webpage
``<i class="fal fa-arrow-right></i>``
- Refer the [Font Awesome](https://fontawesome.com/icons) website for more icons and how to use them.
- The default port is 2045, this can be changed by editing the [server.js](https://github.com/Arnj121/fonty/blob/master/server.js) file.
