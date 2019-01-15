// maximum level in a given element
export const STAT_MAX = 100
// egg stat has different max
export const MAX_EGG_LEVEL = 30

// cumulative levels at which you unlock certain stats
export const LEG_LEVEL = 2
export const ARM_LEVEL = 3
export const HAIR_LEVEL = 5
export const DOG_LEVEL = 10

// maximum amount of dogs on the screen
export const MAX_DOGS = 5
export const LICK_CHANCE = 0.5

// time spent doing actions, in cycles of the game
// (currently 4/sec)
export const BLINK_TIME = 1
export const SPEAK_TIME = 20

// chance to blink or speak
export const TOTAL_EVENT_CHANCE = 100
export const BLINK_CHANCE = 5
export const SPEAK_CHANCE = 5

// default rep length in MS - related to value in UI
export const REP_LENGTH = 12000 // 12 seconds/.2 minutes
export const FEED_REP_LENGTH = 2750
export const PET_REP_LENGTH = 2000

// 'enum' of stat indices
export const STATS = Object.freeze({
  CORE: 'core',
  LEG: 'leg',
  ARM: 'arm',
  SIGHT: 'sight',
  HAIR: 'hair',
  TASTE: 'taste',
  DOG: 'dog',
  MEME: 'meme',
  EGG: 'egg',
})

// array of stats to actually include in level calculations
export const LVL_CALC_WHITELIST = [
  STATS.CORE,
  STATS.LEG,
  STATS.ARM,
  STATS.SIGHT,
  STATS.HAIR,
  STATS.TASTE,
  STATS.DOG,
  STATS.MEME,
]

// 'enum' of potential actions
export const ACTIONS = Object.freeze({
  CORE: `state_${STATS.CORE}`,
  LEG: `state_${STATS.LEG}`,
  ARM: `state_${STATS.ARM}`,
  SIGHT: `state_${STATS.SIGHT}`,
  HAIR: `state_${STATS.HAIR}`,
  TASTE: `state_${STATS.TASTE}`,
  DOG: `state_${STATS.DOG}`,
  MEME: `state_${STATS.MEME}`,
  EGG: `state_${STATS.EGG}`,
  SLEEP: 'state_sleep',
  PET: 'state_pet',
  FEED: 'state_feed',
})

// maximum total level
export const LEVEL_MAX = (LVL_CALC_WHITELIST.length * 99) + 1

/**
 * Defines the amount of exp needed to level up a given stat
 * This probably needs fiddled with
 */
/* eslint-disable */
export const EXP_CURVE = [10,15,23,35,53,80,120,180,270,405,608,912,1368,2052,3078,4617,6926,10389,15584,23376,35064,52596,78894,118341,177512,266268,399402,599103,898655,1347983,2021975,3032963,4549445,6824168,10236252,15354378,23031567,34547351,51821027,77731541,116597312,174895968,262343952,393515928,590273892,885410838,1328116257,1992174386,2988261579,4482392369,6723588554,10085382831,15128074247,22692111371,34038167057,51057250586,76585875879,114878813819,172318220729,258477331094,387715996641,581573994962,872360992443,1308541488665,1962812232998,2944218349497,4416327524246,6624491286369,9936736929554,14905105394331,22357658091497,33536487137246,50304730705869,75457096058804,113185644088206,169778466132309,254667699198464,382001548797696,573002323196544,859503484794816,1289255227192224,1933882840788336,2900824261182504,4351236391773756,6526854587660634,9790281881490952,14685422822236428,22028134233354640,33042201350031960,49563302025047940,74344953037571900,111517429556357860,167276144334536770,250914216501805150,376371324752707700,564556987129061570,846835480693592300,1270253221040388600,1905379831560583000,2858069747340874000]

export const EGG_EXP = Array.from(Array(31), n => 2)

// returns the exp curve for a given stat
export const getExpCurve = (stat) => {
  switch (stat) {
    case STATS.EGG:
      return EGG_EXP
    default:
      return EXP_CURVE
  }
}
