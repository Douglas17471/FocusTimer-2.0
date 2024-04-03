import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"


export function toggleRunning() {
  state.isRunning = !state.isRunning
  
  timer.countdowm()
}

export function reset() {
  state.isRunning = false
  timer.updateDisplay()
}

export function plus() {
  timer.plus()
}

export function minus() {
  timer.minus()
}


export function musicFloresta() {
sounds.soundsFloresta()

}
export function musicChuva() {
  state.isMute = !state.isMute
  if (!state.isMute) {
    sounds.chuva.play()
  }
}
export function musicCafeteria() {
  state.isMute = !state.isMute
  sounds.cafeteria.play()

}
export function musicLareira() {
  state.isMute = !state.isMute
  sounds.lareira.play()


}