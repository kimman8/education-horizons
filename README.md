# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Education Horizons

## Introduction

This document presents the requirements for the challenge sent to aspiring
Education Horizons developers during the interview process.

## The Challenge

For this challenge, we would like to see an application that will produce an image in
which each colour occurs exactly once — with no repition and no unused colours.
For the purpose of this challenge; colours are made up of three components — red,
green, and blue. We require you to break each colour component into 32 steps — 8,
16, 24 .. 256 — this means when combined, you will have 32,768 discrete colours to
utilise.

## Criteria of Acceptance

There should be no reuse and or repition of a single colour.
Each colour component should have 32 steps.
Your colour pallette should be made up of 32,768 unique colours.
You are required to use all 32,768 unique colours.
Do not make use of existing graphics or files.

## Nice-To-Haves

The result should be aesthetically pleasing (or at least interesting).
Elegance in algorithms and data structures.
Clean and well documented code.
A README.md file explaining your process.

## FAQ

### Are third-party open source libraries such as React, MUI, Ionic, ImageMagick

allowed in my submission?
Yes, but please include dependencies and instructions with your
submission.

### What browsers need to be supported?

If your submittion is web-based; then all modern browsers should be
supported.

### What version of Java/JavaScript/Python?

Any is fine, please provide information regarding so.

## colourSteps

This function generates an array which represents the 32 steps from 8 to 256. We will use this function 3 times for Red, Green and Blue.

## generateColours

This function will loop through each index of all 3 of the Red, Green and Blue colour step arrays and populate the allColours array which is made up of 32 x 32 x 32 = 32,768 unique colours.

### mixColours

This function will randomly mix/shuffle whatever array we pass through it, in this case we are passing the allColours array. This basic algorithm will start at the last index of the allColours array and decrement to the first index, with each iteration it will swap the location of the value at the currentIndex with a random index value thus providing us with a very custom, unique and aesthetically pleasing piece of colourful art.

## App.css

This file was used to implement some basic css to liven up our art.
