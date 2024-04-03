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
  setMinutes()
}

export function plus() {
  timer.plus()
  state.isRunning = false
}

export function minus() {
  timer.minus()
  state.isRunning = false
}


export function musicFloresta() {
  floresta()
}
export function musicChuva() {
  chuva()
}
export function musicCafeteria() {
  caffe()
}
export function musicLareira() {
  lareira()
}


// controls
function floresta() {
  state.isMute = !state.isMute
  if(!state.isMute){
  sounds.floresta.play()
  sounds.chuva.pause()
  sounds.cafeteria.pause()
  sounds.lareira.pause()
 } else {
  sounds.floresta.pause()
 }
}

function chuva() {
  state.isMute = !state.isMute
  if(!state.isMute){
    sounds.chuva.play()
    sounds.cafeteria.pause()
    sounds.lareira.pause()
    sounds.floresta.pause()
  } else {
     sounds.chuva.pause()
   }
}

function caffe() {
  state.isMute = !state.isMute
  if(!state.isMute){
    sounds.cafeteria.play()
    sounds.chuva.pause()
    sounds.lareira.pause()
    sounds.floresta.pause()
  } else {
     sounds.cafeteria.pause()
   }
}

function lareira() {
  state.isMute = !state.isMute
  if(!state.isMute){
    sounds.lareira.play()
    sounds.chuva.pause()
    sounds.cafeteria.pause()
    sounds.floresta.pause()
   } else {
    sounds.lareira.pause()
   }
}