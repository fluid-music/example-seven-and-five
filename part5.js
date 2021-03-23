const fluid = require('fluid-music')

const { dragonflyHall } = require('./presets')
const { makeGlissTracks, makeArp6Tracks, makeArp6TLibrary } = require('./components')

const bpm = 58
const session = new fluid.FluidSession({ bpm }, [
  makeArp6Tracks(bpm),
  makeGlissTracks(),
  { name: 'verbLong', plugins: [dragonflyHall.long()] },
  { name: 'verbShort', gainDb: -25, plugins: [dragonflyHall.short()] },
])
// session.getTrackByName('verbShort').addReceiveFrom(session.getTrackByName('arp6'), -30)
// session.getTrackByName('verbLong').addReceiveFrom(session.getTrackByName('gliss'), -18)


session.insertScore({
  tLibrary: makeArp6TLibrary(bpm, 0, 0),
  r:    '12341234',
  arp6: ['aabbccdd'],
})

session.insertScore({
  tLibrary: makeArp6TLibrary(bpm, 2, 4),
  r:    '12341234',
  arp6: ['aabbccdd'],
})

session.insertScore({r: '1234', arp6: ''})

session.insertScore({
  r: '1 2 3 4 1 2 3 4 ',
  n: 'n---------------',
  p: 'b-- a-- b--   0 ',
})

session.editCursorTime = 0
session.finalize()
session.saveAsReaperFile('part5')
  .then(() => console.log('done'))
  .catch((e) => { throw e })
