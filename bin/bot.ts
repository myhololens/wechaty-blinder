// import {
//   log as logWechaty,
// }                     from 'wechaty'
// import {
//   log as logHotImport,
// }                       from 'hot-import'
import {
  log,
  VERSION,
}         from '../src/config'
import {
  Brain,
}         from '../src/brain'

async function main(): Promise<number> {
  // logWechaty.level('verbose')
  // logHotImport.level('verbose')
  log.level('verbose')
  log.info('Bot', `main() wechaty-blinder v${VERSION}`)

  const brain = new Brain()
  try {
    await brain.start()
  } catch (e) {
    log.error('Bot', e)
    return 1
  } finally {
    await brain.stop()
  }
  return 0
}

main()
.then(process.exit)
.catch(e => {
  console.error(e)
  process.exit(1)
})
