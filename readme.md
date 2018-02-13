# Boilerplate SharePoint Project

## Before you Get Started

There are a couple of things that need configuring before you get started. Most important is to change the paths where you would like your files to upload to.

webpack.dev.js: Replace `\\\\uat-ext.kier.group@SSL\\DavWWWRoot\\kiera\\Pages\\Library` with the path to your UAT sharepoint folder.

You will also need to run `npm install` - **this only works off the work network**.

## Summary

This is a base project to start SharePoint development with. It uses Typescript and Scss for scripts and styling.

To start developing, run `npm start`. This will watch your files and compile anytime a change is made. The result appears in `./dist`.

Html goes in `./static/main.aspx`.

To build your production bundle run `npm run build`. If you would like this to deploy to production as well then uncomment and customize the relevant lines in webpack.prod.js.

### SP-PnP-JS

Included is an example of how to use SP-PnP-JS, a library for interacting with the SharePoint API. Because we are using typescript, using a library like this allows us to take advantage of intellisense and similar tools to speed up development.

 For more info head over to [https://github.com/SharePoint/PnP-JS-Core](https://github.com/SharePoint/PnP-JS-Core).

### Source Maps

Source maps are also generated. This means that when debugging in your browser the errors will link to the correct line in the typescript file, not something indecipherable in the bundle.

### Linting

To enforce consistent programming practices, this setup includes both scss and ts linters. These check that your code follow a preset programming style - if it picks any issues up you will see errors in the terminal.

The styles enforced are the [AirBnB JS Style Guide](https://github.com/airbnb/javascript) and their [SCSS Style Guide](https://github.com/airbnb/css).

This should help with code maintainability and readability.

## Dev vs Production

Minification and unique variables are the differences between the dev and prod bundle.