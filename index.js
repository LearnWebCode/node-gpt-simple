const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: "your-openai-key-goes-here"
})
const openai = new OpenAIApi(configuration)

async function go() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Describe a happy purple elephant in 50 words.",
    temperature: 0,
    max_tokens: 500
  })
  console.log(completion.data.choices[0].text)
}

go()
