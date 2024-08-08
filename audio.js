const INIT_AUDIOS = [
{

    key: 'goomba-stomp', 
    path: 'assets/sound/effects/goomba-stomp.wav'

   
},

{

  key: 'gameover', 
  path: 'assets/sound/music/gameover.mp3'
},

{
  key: 'coin-pickup',
  path: 'assets/sound/effects/coin.mp3'
}
]




export const initAudio = ({load}) =>{
   INIT_AUDIOS.forEach(({key, path}) => {
    load.audio(key,path)
   })
}


export const playAudio = (id, {sound}, {volume = 1} = {}) => {
    return sound.add(id, {volume}).play()
}
