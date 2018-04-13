# Evidence Database SharePoint Project

## Before you Get Started

There are a couple of things that need configuring before you get started. Most important is to change the paths where you would like your files to upload to.

webpack.dev.js: Replace `\\\\uat-ext.kier.group@SSL\\DavWWWRoot\\kiera\\Pages\\Library` with the path to your UAT sharepoint folder.

You will also need to run `npm install` - **this only works off the work network**.

## Summary

This is a base project to start SharePoint development with. It uses Typescript and Scss for scripts and styling.

To start developing, run `npm start`. This will watch your files and compile anytime a change is made. The result appears in `./dist`.

Html goes in `./static/main.aspx`.

To build your production bundle run `npm run build`. If you would like this to deploy to production as well then uncomment and customize the relevant lines in webpack.prod.js.

