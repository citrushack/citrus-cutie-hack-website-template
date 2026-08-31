# Citrus/Cutie Hack Website Template

## Description and tech stack
Latest website template for ACM at UCR's hackathons (Citrus and Cutie Hack)

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
<br/>
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Figma

[Citrus/Cutie Hack Website Template Figma Design File](https://www.figma.com/design/wKhzYUoL2wSCRad9KruuTF/Citrus-Cutie-Hack--Hackathon-Website-Template?node-id=0-1&p=f&t=TlBxs0HbdU8TPzgL-0)

## Features
* Header
  * Sticky header (logo, nav bar, socials)
  * Nav bar: drop down for about & people buttons
* Hero
  * Countdown timer
    * Update to when any category reaches solely 1 (e.g. 1 day), it will change to remove the "s" temporarily
* Register
  * Role information cards
    * Smooth animation when hovering over them
    * Flippable by clicking on them
      * Front: name, back: description
  * Sponsor button → pop up card (for info about hackathon + "Why sponsor Cutie Hack?")
* About
  * Value cards (flippable)
    * Same as register section interaction
  * Make the stats assets look "floaty"
* Past Projects
  * Each past projects button is clickable + changes the central viewing of the slide
    * See rectangle in lo-fi design
* Tracks
  * Track cards (flippable)
    * Same as register section interaction
* Schedule
  * Handle logic for Google Calendar API
    * Handle different colors of each mini event
  * Toggle buttons for types of mini events
  * The current events that are displayed is automatically set to the next upcoming date
    * Ex: if today is 7/18 and the next set of dates is 10/6, it'll display 10/6 by default since that's the earliest next date for an event
  * Clicking on an event expands it
  * (Add additional functionality here)
* Sponsors
  * Sponsor interactions
    * Same as register section interaction
* Industry
  * Toggle buttons for types of industry professionals/representatives
    * Same as schedule section
  * Industry cards (pop up)
    * Same as register section
    * Name, position at company, photo, quick bio, LinkedIn, etc.
* Team
  * Toggle buttons for each leads team
    * Possibly also for general organizers
    * Same logic as schedule section
  * Hover interaction
  * Team cards (pop up)
    * Same as register section
    * Name, position, photos (2) - leads headshot + fun photo, quick bio, LinkedIn, GitHub, etc.
* FAQ
  * Clicking on a question drop down will open up the answer
* Footer
  * Year automatically updates

## What to install and how to build + run locally

## Node.js

Citrus/Cutie Hack Website Template runs on Node.js Version 20.9.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Next.js

This project is built using [Next.js](https://nextjs.org), a React framework. Next.js is automatically installed when you install all dependencies for this project.

## Commands

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Website Locally

```bash
# Open a browser at localhost:3000
npm run dev
```

### Linting Code via Eslint

```bash
npm run lint
```

### Build the Website

```bash
npm run build
```
