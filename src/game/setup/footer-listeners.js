/**
 * Listeners for footer
 */

import $ from 'jquery'
import { version } from '../../../package.json'

export default () => {
  $('#vernum').html(`[ v${version} ]`).attr('href', `https://github.com/mattdelsordo/friendo/releases/tag/v${version}`)

  $('#game-info-icon').mouseenter(() => {
    $('#game-info').css('visibility', 'visible')
  })

  $('#footer').mouseleave(() => {
    $('#game-info').css('visibility', 'hidden')
  })
}