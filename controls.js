export function checkControls ({keys, mario}){
   
    const isMarioTouchingFloor = mario.body.touching.down


    if(mario.isDead) return

    
    if(keys.left.isDown){
       isMarioTouchingFloor && mario.anims.play('mario-walk',true)
        mario.x -= 2
       mario.flipX = true
    }else if (keys.right.isDown){
        isMarioTouchingFloor && mario.anims.play('mario-walk',true)
        mario.x += 2
        mario.flipX = false
    } else if(isMarioTouchingFloor){
        mario.anims.play('mario-idle', true)
    }
     if(keys.up.isDown && isMarioTouchingFloor){
        mario.setVelocityY(-300)
        mario.anims.play('mario-jump', true)

     }
}