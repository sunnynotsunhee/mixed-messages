//predict your next friendship
const possibleOutcomes = {
    zodiacSign : ["♈ Aries", "♉ Taurus", "♊ Gemini ", "♋ Cancer", "♌ Leo", "♍ Virgo", "♎ Libra", "♏ Scorpius", "♐ Sagittarius", "♑ Capricornus", "♒ Aquarius", "♓ Pisces"],
    vibe : ["😇", "🥵", "🤪", "😩", "🙄", "🥰", "😁"],
    friendshipDuration : ["a few weeks", "a few months", "a few years", "a long time", "a lifetime"]
}
//store the complete prediction
let yourFate = []

function randomize(number) {
    return Math.floor(Math.random() * number)
}

//iterate through the posssible outcomes
for (let item in possibleOutcomes) {
    let option = randomize(possibleOutcomes[item].length)

    switch(item) {
        case "zodiacSign" :
            yourFate.push(`Your next friend is a : ${possibleOutcomes[item][option]}`)
            break
        case "vibe" :
            yourFate.push(`Their vibe : ${possibleOutcomes[item][option]}`)
            break
        case "friendshipDuration" :
            yourFate.push(`You will be friends for: ${possibleOutcomes[item][option]}`)
            break
        default:
            yourFate.push(`More information needed`)
    }
}

function predictor(predictions) {
    const prediction = yourFate.join("\n")
    console.log(prediction)
}

predictor(yourFate);