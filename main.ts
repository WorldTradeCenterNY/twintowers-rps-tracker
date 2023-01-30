function updateScores () {
    let p2 = 0
    let ties = 0
    OLED.clear()
    OLED.writeStringNewLine("player1: " + p1)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + ties)
    OLED.newLine()
    OLED.writeStringNewLine("player2: " + p2)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
let rounds = 0
let p1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("hello fool time to play me IN A GAME")
p1 = 0
rounds = 0
rounds = 0
rounds = 0
basic.pause(2000)
OLED.clear()
updateScores()
