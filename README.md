# TIC-80 PWA Export
This template allows users to install your
exported TIC-80 cartridges to their devices
and run them offline.

It will also allow users to install your cart
on mobile, meaning you won't have to pull
dark magic in order to export your game for
them.

You can check it out in action here:
https://carbonatedfennec.github.io/TIC-80-PWA-Export/src/

# How to use
Just copy and paste the cartridge as cart.tic.
More information on how to customize your app's
appearance below.

After that, if you're uploading to sites like
itch.io or Game Jolt, you might need to direct
the user to where your PWA export is located
for the install pop-up to show up, such as a
nekoweb or github page.

You might need to also copy tic80.wasm and
tic80.js for future updates

# Customize your app
You can change the appearance of your app by
modifying `src/manifest.json` and
`src/icon.png`. You can check the Web
Application Manifest documentation to add
custom features, but the defaults are:

`name`: The name of your application

`background_color`: The color that appears at
startup.

`icons`: Your app's icons, you can add
different resolutions here.

# Known issues
* Config is not saved after closing the app
(`pmem` works fine)
