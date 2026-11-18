function Puck () {
    game.resume()
    starto += 1
    sprite = game.createSprite(2, 2)
}
let sprite: game.LedSprite = null
let sendo = 0
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
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        starto = 0
        game.pause()
        Puck()
    }
    if (game.score() == 5) {
        music.play(music.stringPlayable("A A - F E - D C ", 120), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
