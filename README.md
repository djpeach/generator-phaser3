# Phaser 3 Generator

This is another generator for Phaser 3 games. This one does not force you to use yarn or Typescript, and lets you add those later on your own if you wish. 

It does come with electron support (just run `npm run app`), and is ready to be built and deployed to github pages (run `npm run build`, then setup gh pages to source from `./docs`)

## Installation

```npm i -g yo generator-phaser3```

## Usage

```yo phaser3```

Follow the prompts...

```cd <gameName>```
```npm install && npm start```


## Explanation

### Building the game:

To build your game, just create scenes, sprites, groups, animations, etc as you normally would with Phaser3. Then run `npm start` to use webpack-dev's live server to view your game in the browser and hot reload on changes.

### To deploy:

Run `npm run build` to build your project using webpack. By default, this template builds to your root directory's `./docs/` folder. This allows you to easily deploy your game on GitHub pages. To deploy, just push your code to GitHub after you build it. Then navigate to the settings for your repo on GitHub and turn on GitHub Pages, telling it to use the `docs/` folder in the master branch. 

### To run Eleectron:

You may also want to run your game locally as a desktop app. (We do this for our arcade cabinet). In order to do this, simply run `npm run build`, and then `npm run app`. Basically, just make sure you build before running the electron app, because electron looks at the `./docs/` folder to load it's files. There is currently no hot reloading for electron.

## TODO://

* Auto-run build when `npm run app` runs.
* Better docs
* More options for phaser game
  * Physics engine
