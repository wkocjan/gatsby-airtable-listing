# Airtable listing theme for Gatsby

### Gatsby starter theme integrated with [Airtable](https://airtable.com/)

## Demo

Live demo is available at: https://gatsby-airtable-listing.netlify.com/

## Screenshot

![The home page](screenshot.png?raw=true)

## Features

- Integration with [Airtable](https://airtable.com/)
- Item details displayed in a modal with navigation (previous / next)
- Responsive/adaptive images via [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/)
- Uses utility-first [TailwindCSS](https://tailwindcss.com/) framework
- Responsive design (desktop / mobile)
- Generic newsletter form
- Dark Mode support 🌙

## 🚀 Getting started

Install [Node package manager (NPM)](https://nodejs.org/) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:wkocjan/gatsby-airtable-listing.git
$ npm install
```

### Create Airtable base

To use this project you have to have a Airtable account.

Once you have it, go to [this base](https://airtable.com/shrlYuICEwEdAUir3) and click `Copy base` button located in the top right corner.

Included columns:

- `name` (single line text)
- `slug` (single line text, should be unique)
- `summary` (single line text)
- `image` (attachment)
- `descrition` (long text)
- `country` (single select)
- `tags` (multiple select)
- `url` (single line text)

### Set up Airtable API keys

Copy included `.env.example` file to `.env` and fill it with your unique values:

```
AIRTABLE_API_KEY=""
AIRTABLE_BASE_ID=""
AIRTABLE_TABLE_NAME="Destinations"
```

You can find your API key and Base ID by clicking "Help" and then "API Documentation". Table name in the example is "Destinations" (case sensitive name).

You're now ready to go. If you want to customize the Airtable base, please refer to [`gatsby-source-airtable` plugin documentation](https://www.gatsbyjs.org/packages/gatsby-source-airtable/).

### Data update

The data from Airtable **does not** update automatically, even when you're running the `develop` process.

If you modified any data in your Airtable base, please be sure to restart the development process, so the new data can be downloaded.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

#### `gatsby develop`

Run in the project locally.

#### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.
