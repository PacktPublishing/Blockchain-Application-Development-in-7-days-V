# Blockchain Application Development in 7 days
Blockchain Application Development in 7 days [video], published by Packt

# Learning Blockchain Application Development [Video]
This is the code repository for [Learning Blockchain Application Development [Video]](https://www.packtpub.com/application-development/learning-blockchain-application-development-video?utm_source=github&utm_medium=repository&utm_campaign=9781789345728), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the video course from start to finish.
## About the Video Course
Blockchain disrupts many different aspects of our life including finance, retail, merchandising, identity, and more. Ethereum is a platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference. This is the perfect guide to help you learn the basics of building decentralized applications with the Ethereum network. You’ll learn the core concepts of decentralized applications as we build an online marketplace, connecting buyers and sellers together to exchange goods and services. In doing so, you’ll deploy your code to the Ethereum network, and build a user Interface to expose your decentralized application to the world.

The focus of this course is learning blockchain and using it for application development by building applications, where each application should do something useful. You’ll learn how to create smart contracts, implement business logic using Solidity, and test your code. By the end of this course, you’ll have the skills necessary to build, test, and deploy applications in the Ethereum network. You’ll also have a solid understanding of blockchain application development, with skills that readily transfer to application development on other blockchains such as NEO, EOS, Cardano, and more.


<H2>What You Will Learn</H2>
<DIV class=book-info-will-learn-text>
<UL>
<LI>Create Decentralized Applications (DApps) that utilize blockchain technologies 
<LI>Find out how to program Smart Contracts using Solidity 
<LI>Implement business logic in the form of functions to execute tasks on the blockchain 
<LI>Build a local Ethereum network to test and mine your applications 
<LI>Write tests to ensure your applications behave properly 
<LI>Send Ethereum tokens to and from Smart Contracts as payments 
<LI>Deploy your application to Ethereum Test Networks and the Ethereum Main Network 
<LI>Use React to create a user interface for interacting with your Ethereum DApp </LI></UL></DIV>

## Instructions and Navigation
### Assumed Knowledge
To fully benefit from the coverage included in this course, you will need:<br/>
This course is suitable for IT Professionals and Software Engineers at all levels seeking to learn Blockchain Application Development. No prerequisite skills in blockchain technology are required though some familiarity with writing code and applications will be helpful.
### Technical Requirements
This course has the following software requirements:<br/>
Minimum Hardware Requirements
For successful completion of this course, students will require the computer systems with at least the following:


OS: Mac OS X, Microsoft Windows, Linux



Processor: Intel Core i5 or higher



Memory: 8 GB



Storage: 100 GB free space


Recommended Hardware Requirements
For an optimal experience with hands-on labs and other practical activities, we recommend the following configuration:


OS: Mac OS X



Processor: Intel Core i7






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
