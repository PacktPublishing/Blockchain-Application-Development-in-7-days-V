# Blockchain Application Development in 7 days
Blockchain Application Development in 7 days [video], published by Packt

# Blockchain Application Development in 7 Days [Video]
This is the code repository for [Blockchain Application Development in 7 Days [Video]](https://www.packtpub.com/application-development/blockchain-application-development-7-days-video?utm_source=github&utm_medium=repository&utm_campaign=9781789341942), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the video course from start to finish.
## About the Video Course
For those who are brand new to blockchain it is best to become familiarized with some basic terminology and use cases for blockchain technology. After the viewer has been instructed on basic blockchain terms and uses, we
will then begin coding a mock blockchain using JavaScript. This exercise will show how exactly the blockchain works and how it is quite resistant to fraud and hacking.

The viewer will then begin learning the Solidity coding language which is essential for developing various blockchain dApps. We will go over the basic data types and functions with Solidity as we start to showcase to the viewer how exactly these functions can be used. The viewer will see their code work in action through the Remix IDE and get introduced to the MetaMask virtual wallet.

Our first task with the Solidity coding language will be to conduct token generation. The viewer will first get insight to the Web3 library before diving into the development for our token generation. Using the Remix IDE, we will be able to see our token be produced and then view various transactions which use our tokens.

DApps or “decentralized applications” are basically apps that are built on the blockchain and use a specific cryptocurrency. Here, we will use our newly found Solidity skills to create our first smart contract. We will then use our JavaScript coding skills to create two scripts to compile and deploy our smart contract from scratch. We also will get our first experience using the Web3 library with Ganache to write tests for our smart contract along
with the Mocha test suite as a part of test driven development. Finally we will compile and deploy our script live to the ethereum blockchain where we will interact with it live through the Remix IDE and using the MetaMask wallet, send transactions to various accounts.

Now that our dApp has been deployed live on the blockchain we will now create a simple front-end which will allow for our users to see and interact with our smart contract. We will use our JavaScript, HTML and CSS skills to design a simple front-end and then test sending transactions using our MetaMask wallet.

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
