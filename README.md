# Jekyll Curate Premium Theme

Jekyll Curate is a premium portfolio theme for Jekyll.

## Documentation

* Live Docs: https://www.zerostatic.io/docs/jekyll-curate
* Demo: https://jekyll-curate.netlify.app/

## Screenshot

![Jekyll Curate Theme screenshot](https://www.zerostatic.io/theme/jekyll-curate/jekyll-curate-screenshot.png)

## Install

### Install Jekll

Make sure you have Ruby & Jekyll installed - For a step-by-step guide, read Jekyll docs [installation](https://jekyllrb.com/docs/installation/)

### Install Theme

Extract the theme .zip file to your local computer. Navigate to the project root (it contains the README.md)

Run `bundle install` to install gems.

Then run `bundle exec jekyll serve` to start the Jekyll local development server.

To build the Jekyll site run `bundle exec jekyll build`

## Deploy

### Netlify

This theme comes with a working `netlify.toml` which will pre-configure your Netlify deployment for Jekyll. The Netlify docs have a great guide to [creating a site with Netlify](https://docs.netlify.com/site-deploys/create-deploys/).

> 💡 If you experience bundle install issues during the Netlify deployment, deleting the Gemfile.lock can sometimes help

### GitHub Pages

This theme is tested to work on Github Pages. Jekyll has a [guide to deploying on Github pages](https://jekyllrb.com/docs/github-pages/).

If you are creating a GitHub Pages "Project site" then your site will be in a sub-folder with a url like `http://username.github.io/repository`. You will need to update the `baseurl` and `url` in the `_config.yml` for the asset paths to work correctly.

## Credits

This theme uses open-source libraries and assets.

- **Bootstrap 5.3.2** https://unsplash.com/license
- **Font Awesome 6 Free:** https://fontawesome.com/
- **Unsplash Images** https://unsplash.com/
