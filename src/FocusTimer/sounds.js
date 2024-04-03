import state from "./state"

export const floresta = new Audio('./sounds/Floresta.wav')
export const chuva = new Audio('./sounds/Chuva.wav')
export const cafeteria = new Audio('./sounds/Cafeteria.wav')
export const lareira = new Audio('./sounds/Lareira.wav')


export function soundsFloresta() {
  state.isMute = !state.isMute
  floresta.play()
  if(!state.isMute) {
    floresta.play()
    chuva.pause()
    cafeteria.pause()
    lareira.pause()

  } else {
    floresta.pause()
  }
}