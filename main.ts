function Puck () {
    starto += 1
    sprite = game.createSprite(2, 2)
}
let sprite: game.LedSprite = null
let starto = 0
radio.setGroup(9)
Puck()
game.setScore(0)
loops.everyInterval(500, function () {
    pauseUntil(() => starto == 1)
    sprite.move(1)
})
basic.forever(function () {
    pauseUntil(() => starto == 1)
    sprite.ifOnEdgeBounce()
})
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        sprite.turn(Direction.Right, 45)
    }
})
basic.forever(function () {
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        starto = 0
        game.pause()
        game.startCountdown(10000)
        Puck()
    }
})
