/**
 * Listeners for the main game screen
 */

import $ from 'jquery'
import { STATS, STATES } from '../../friendo/constants'
import { performAction } from './ui-update'
import {
  setEnterButton,
  setNumberInput,
  unsetEnterButton,
  unsetNumberInput,
} from './key-listeners'
import {
  ENERGY_EXPLAIN_CONTENT,
  ENERGY_EXPLAIN_TITLE,
  HUNGER_EXPLAIN_CONTENT,
  HUNGER_EXPLAIN_TITLE,
  LOCKED_STAT_CONTENT,
  lockedStatTitle, STAT_EXPLAIN, STAT_TITLES,
} from '../../friendo/text/game-text'
import { saveFriendo } from '../game-util'

export default (friendo) => {
  // save friendo whenever window loses focus or is unloaded
  $(window).on('blur unload', () => {
    saveFriendo(friendo)
  })

  // pet button
  $('#pet-button').click(() => {
    performAction(friendo, STATES.PET)
  })

  // feed button
  $('#feed-button').click(() => {
    performAction(friendo, STATES.FEED, friendo.foodPref)
  })

  $('#cancel-exercise').click(() => {
    performAction(friendo, STATES.CANCEL)
  })

  // training buttons
  /* eslint-disable-next-line compat/compat */
  Object.values(STATS).forEach((v) => {
    $(`#start-${v}`).click(() => {
      const reps = $(`#${v}-trainamnt`).val()

      performAction(friendo, `state_${v}`, reps)

      // hide modal
      $(`#train-${v}`).modal('hide')
    })
  })

  // enter button management for stat training
  /* eslint-disable-next-line compat/compat */
  Object.values(STATS).forEach((v) => {
    $(`#train-${v}`)
      .on('shown.bs.modal', () => {
        // mount enter button
        if ($(`#start-${v}`).prop('disabled')) {
          setEnterButton(`#cancel-${v}`)
        } else {
          setEnterButton(`#start-${v}`)
        }

        // mount up and down keys to number input
        setNumberInput(`#${v}-trainamnt`)
      })
      .on('hidden.bs.modal', () => {
        unsetEnterButton()
        unsetNumberInput()
      })
  })

  /** Tutorial Listeners */
  $('#max-energy-emoji')
    .popover({
      trigger: 'hover focus',
      content: ENERGY_EXPLAIN_CONTENT,
      title: ENERGY_EXPLAIN_TITLE,
      offset: '0, 2',
    })
  $('#no-energy-emoji')
    .popover({
      trigger: 'hover focus',
      content: ENERGY_EXPLAIN_CONTENT,
      title: ENERGY_EXPLAIN_TITLE,
      placement: 'left',
      offset: '0, 2',
    })
  $('#full-belly-emoji')
    .popover({
      trigger: 'hover focus',
      content: HUNGER_EXPLAIN_CONTENT,
      title: HUNGER_EXPLAIN_TITLE,
      offset: '0, 2',
    })
  $('#empty-belly-emoji')
    .popover({
      trigger: 'hover focus',
      content: HUNGER_EXPLAIN_CONTENT,
      title: HUNGER_EXPLAIN_TITLE,
      placement: 'left',
      offset: '0, 2',
    })

  /** Locked stat popovers */
  $('.lock-emoji').popover({
    trigger: 'hover focus',
    title: lockedStatTitle(friendo.name),
    content: LOCKED_STAT_CONTENT,
    offset: '0, 2',
  })

  /** New food unlocked popover */
  $('#food-selector')
    .popover({
      trigger: 'manual',
      title: 'Your Friendo\'s taste expanded!',
      content: 'A new meal is available.',
      offset: '0, 2',
    })
    .on('hover click', () => {
      $('#food-selector').popover('hide')
    })

  /** Stat explaination popovers */
  /* eslint-disable-next-line compat/compat */
  Object.values(STATS).forEach((v) => {
    $(`#${v}-icon`).popover({
      trigger: 'hover focus',
      title: STAT_TITLES[v],
      content: STAT_EXPLAIN[v](friendo),
      offset: '0, 2',
      placement: 'left',
    })
  })
}
