# CucumberJS and Playwright Labs

This project demonstrates how to use CucumberJS, a popular behavior-driven development (BDD) testing framework, with Playwright, a powerful automation library for testing web applications.

## About the 🥒 environment
- World - an isolated scope for each scenario, exposed to the steps and most hooks as this. It allows you to set variables in one step and recall them later. All variables set this way are discarded when the scenario concludes.
- Feature - a high-level description of a software feature, and group-related scenarios.
- Steps - a definition that maps a natural language step description to a corresponding executable code block
  
## Getting Started
```bash
git clone https://github.com/AlYord/cucumber-playwright-labs.git
cd cucumber-playwright-labs
npm install
```

## Running the Tests
```bash
npm test
```

## File structure
- playwright.config.js - all configuration settings for Playwright workers
- features/ - directory for all the Cucumber features
- features/steps/ - all testing steps according to features
- support/ - all utilities files
- support/world.ts - an environment for every scenario
