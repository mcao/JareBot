var flips = ["You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **heads**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You flipped **tails**!",
    "You, ah, hm, the coin landed on its side, neat.",
    "*[He begins to hurriedly shove a $20 bill into a change machine.]*\nChill out, man, I can only carry so many coins at a time."]

module.exports = {
name: 'coinflip',
permission: 1,
main: function (bot, msg) {
    msg.channel.send(`${flips[Math.floor(Math.random() * flips.length)]}`)
}
};