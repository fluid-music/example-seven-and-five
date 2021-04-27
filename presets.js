const fs = require('fs')
const path = require('path')
const { plugins } = require('fluid-music')

const zebraletteCPopFilename = path.join(__dirname, 'presets', 'zebralette-cpop.fxp')
const zebraletteCPopFxpB64 = fs.readFileSync(zebraletteCPopFilename).toString('base64')

const zebraletteCPop2Filename = path.join(__dirname, 'presets', 'zebralette-cpop2.fxp')
const zebraletteCPop2FxpB64 = fs.readFileSync(zebraletteCPop2Filename).toString('base64')

const zebraletteCMonoFilename = path.join(__dirname, 'presets', 'zebralette-cmono.FXP')
const zebraletteCMonoFxpB64 = fs.readFileSync(zebraletteCMonoFilename).toString('base64')

const zebraletteCMonoSyncFilename = path.join(__dirname, 'presets', 'zebralette-cmono-sync.FXP')
const zebraletteCMonoSyncFxpB64 = fs.readFileSync(zebraletteCMonoSyncFilename).toString('base64')

const dfHallLong = path.join(__dirname, 'presets', 'dfhall-long.FXP')
const dfHallLongFxpB64 = fs.readFileSync(dfHallLong)
const dfHallShort = path.join(__dirname, 'presets', 'dfhall-short.FXP')
const dfHallShortFxpB64 = fs.readFileSync(dfHallShort)

module.exports = {
  zebralette: {
    /** @param args {import('fluid-music').plugins.ZebraletteVst2Parameters} */
    cPop(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCPopFxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
    cPop2(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCPop2FxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
    cMono(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCMonoFxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
    cMonoSync(params) {
      const zebralette = new plugins.ZebraletteVst2()
      zebralette.vst2.presetBase64 = zebraletteCMonoSyncFxpB64
      if (params) zebralette.parameters = params
      return zebralette
    },
  },

  dragonflyHall: {
    long(params) {
      const plugin = new plugins.DragonflyHallVst2(params)
      plugin.vst2.presetBase64 = dfHallLongFxpB64
      return plugin
    },
    short(params) {
      const plugin  = new plugins.DragonflyHallVst2(params)
      plugin.vst2.presetBase64 = dfHallShortFxpB64
      return plugin
    },
  },

  tStereoDelay: {
    sixteenth(bpm) {
      const plugin = new plugins.TStereoDelayVst2({ ...tStereoDelayBase })
      plugin.parameters.lDelayMs = 60000 / bpm / 4
      plugin.parameters.rDelayMs = (60000 / bpm / 4) + 1.5
      return plugin
    },
    stereo8and16(bpm) {
      const plugin = new plugins.TStereoDelayVst2({ ...tStereoDelayBase })
      plugin.parameters.lDelayMs = 60000 / bpm / 2
      plugin.parameters.rDelayMs = 60000 / bpm / 4
      return plugin
    }
  }
}

const tStereoDelayBase = {
  dryDb: -50,
  wetDb: 0,
  sync: 0,
  lFeedbackPercent: 54,
  rFeedbackPercent: 54,
  lCrossFbPercent: 12,
  rCrossFbPercent: 12,
  lLowCutHz: 200,
  rLowCutHz: 200,
  lHighCutHz: 9000,
  rHighCutHz: 11000,
}