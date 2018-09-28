
# Blockchain Application Development in 7 Days [Video]
This is the code repository for [Blockchain Application Development in 7 Days [Video]](https://www.packtpub.com/application-development/blockchain-application-development-7-days-video?utm_source=github&utm_medium=repository&utm_campaign=9781789341942), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the video course from start to finish.
## About the Video Course
Blockchain is a revolutionary technology. Bitcoin is an example of it but far from the only one, just as email is one particular use of the Internet. Ethereum is a decentralized Blockchain platform that runs smart contracts.

Our course will teach you to build an online gaming application using the Ethereum Blockchain. Each 30 minute section will introduce fundamental Blockchain programming concepts as they relate to creating an online game, followed by practical exercises that customers can implement as homework assignments. With this course, you will learn core Blockchain application development skills, creating smart contracts, interacting with the Ethereum network, building user interfaces, and deploying your application to the Internet.

This course supplies seven self-contained lessons taught in a practical, hands-on way. By the end of the course, you will be amazed how much you have learned about Blockchain application development on the Ethereum network in just one week.

<H2>What You Will Learn</H2>
<DIV class=book-info-will-learn-text>
<UL>
<LI><SPAN style="BACKGROUND-COLOR: transparent">Creating and using variables in smart contracts</SPAN> 
<LI>Implementing logic in smart contracts with functions 
<LI>Eliminating mistakes and errors in code through the use of automated tests 
<LI>Interacting with the Ethereum network from a User Interface 
<LI>Building a User Interface for smart contracts using React 
<LI>Sending and receiving funds in smart contracts using wallets 
<LI>Deploying Blockchain applications </LI></UL></DIV>

## Instructions and Navigation
### Assumed Knowledge
To fully benefit from the coverage included in this course, you will need:<br/>
Developers who are familiar with coding who want to learn about blockchain development, or programmers who know JavaScript that are curious about blockchain.
### Technical Requirements
This course has the following software requirements:<br/>
SETUP AND INSTALLATION
This will vary on a product-by-product basis, but should be a standard PI element for ILT products. This example is relatively basic.

Minimum Hardware Requirements
For successful completion of this course, students will require the computer systems with at least the following:


OS: OS X, Windows, Linux



Processor: Intel Core i5 or higher



Memory: 8 GB RAM



Storage: > 100 GB


Recommended Hardware Requirements
For an optimal experience with hands-on labs and other practical activities, we recommend the following configuration:


OS: OS X



Processor: Intel Core i7 or higher



Memory: 16 GB RAM



Storage: > 100 GB


Software Requirements

Operating system: Mac OS X, Microsoft Windows, or Linux



Browser: Chrome https://www.google.com/chrome/browser/



Visual Code IDE, Latest Version https://code.visualstudio.com/



Node.js LTS 8.11.1 Installed https://nodejs.org/



Truffle Framework http://truffleframework.com/


Provide links/instructions so that the customer can easily find out where to download the required softwar

## Related Products
* [Blockchain Development for Beginners [Video]](https://www.packtpub.com/big-data-and-business-intelligence/blockchain-development-beginners-video?utm_source=github&utm_medium=repository&utm_campaign=9781788830911)

* [Learning Blockchain Application Development [Video]](https://www.packtpub.com/application-development/learning-blockchain-application-development-video?utm_source=github&utm_medium=repository&utm_campaign=9781789345728)

* [Ethereum Projects [Video]](https://www.packtpub.com/big-data-and-business-intelligence/ethereum-projects-video?utm_source=github&utm_medium=repository&utm_campaign=9781788623261)



## React, Redux, Truffle, and Material-UI Dapp

In addition to Webpack and React, this box adds: React-Router, Redux and Material-UI for easy skinning of a Dapp.

## Installation

1. Install node.js (version 8.9.x)

1. Install webpack globally
    ```
    npm install -g webpack
    npm install -g webpack-cli
    ```

1. Install truffle and Ganache, both available from [Truffle](https://truffleframework.com/).

1. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

1. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm start
    ```

## Docker

1. Build the docker container.
    ```
    docker build -t etherslist .
    ```

1. Launch the docker container.
    ```
    docker run -p 3000:3000 etherslist:latest
    ```

1. Browse to http://localhost:3000

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.
