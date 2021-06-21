# Fluid Music - Seven and Five

Experimental composition created with the [Fluid Music](https://fluid-music.github.io/) framework.

First, install the prerequisites:

- [RoughRider 3](https://www.audiodamage.com/pages/free-downloads) (free compressor plugin)
- [Podolski](https://u-he.com/products/podolski/) (free synthesizer plugin)
- [Dragonfly Room Reverb](https://michaelwillis.github.io/dragonfly-reverb/) (free reverb plugin. [See MacOS Catalina+ help](https://github.com/michaelwillis/dragonfly-reverb/issues/70))
- [Valhalla Freq Echo](https://valhalladsp.com/shop/delay/valhalla-freq-echo/) (free delay plugin)
- [cybr](https://github.com/fluid-music/cybr) (the Fluid Music audio server)

This example configures VST presets, so you need to run the cybr server. After installing the plugins, scan them, and then start an instance of the `cybr` server. If `cybr` crashes when scanning plugins, try running the scan again. Most of the time, it will skip over the plugins that caused the crash.

```
cybr --scan-plugins
cybr --list-plugins # verify plugins were found
cybr -f             # start the fluid music server
```

Leave `cybr` running, open a new terminal tab, and run the following:

```
git clone https://github.com/fluid-music/example-seven-and-five.git
cd example-seven-and-five
npm install
node run.js
```

This will generate `seven-and-five.RPP` which can be opened in [Reaper](https://reaper.fm).
