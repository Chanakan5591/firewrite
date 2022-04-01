/**
 * @module preload
 */

import './nodeCrypto'
import './versions'
import { Color, Titlebar } from 'custom-electron-titlebar'
import { join } from 'path'

window.addEventListener('DOMContentLoaded', () => {
  new Titlebar({
    backgroundColor: Color.TRANSPARENT,
    itemBackgroundColor: Color.fromHex("#555555"),
  })
  document.getElementsByClassName('cet-window-icon')[0].remove()
})
