//  Create the components of the messages
const adverbs = [
  "Strategically", "Boldly", "Resiliently", "Authentically", "Efficiently",
  "Relentlessly", "Nimbly", "Holistically", "Proactively", "Intuitively",
  "Purposefully", "Disruptively", "Scalably", "Transformatively", "Synergistically",
  "Leanly", "Agilely", "Visionarily", "Empoweringly", "Focusfully"
];

const verbs = [
  "Drive", "Ignite", "Empower", "Leverage", "Optimize",
  "Elevate", "Streamline", "Disrupt", "Reframe", "Execute",
  "Scale", "Reinvent", "Reimagine", "Enable", "Innovate",
  "Transform", "Sustain", "Unleash", "Pivot", "Mobilize"
];

const nouns = [
  "Growth", "Impact", "Performance", "Excellence", "Agility",
  "Innovation", "Efficiency", "Leadership", "Value", "Culture",
  "Results", "Strategy", "Momentum", "Change", "Alignment",
  "Vision", "Execution", "Synergy", "Success", "Purpose"
];

// Randomly create a sentence from the words
const adverb = adverbs[Math.floor(Math.random() * adverbs.length)]
const verb = verbs[Math.floor(Math.random() * verbs.length)]
const noun = nouns[Math.floor(Math.random() * nouns.length)]
const message = `${adverb} ${verb} ${noun}!`

console.log(message)
