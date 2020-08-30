Application for FRC scouting. Written using [Electron](http://electron.atom.io/) for easy customization.

## Development dependencies
* [Node.js](https://nodejs.org)
* [npm](https://npmjs.com)

## Development Installation
1. `cd` into `RogerHub` directory
2. Run `npm install` to install node dependencies.

## Usage in Development
While in `RogerHub` directory, run

    npm start

## Packaging
While in `RogerHub` directory, run

    npm run-script package-mac
    npm run-script package-win
    npm run-script package-linux

Choose the suffix appropriate for your target OS.

See [here](https://github.com/electron-userland/electron-packager#readme) for an explanation of how to modify your packaging settings.
