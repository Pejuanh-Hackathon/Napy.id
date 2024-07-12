const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'trans-setup-394516', location: 'us-central1'});
const model = 'gemini-1.5-pro-001';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 1,
    'topP': 0.95,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
  systemInstruction: {
    parts: [textsi_1]
  },
});


const chat = generativeModel.startChat({});

async function sendMessage(message) {
  const streamResult = await chat.sendMessageStream(message);
  process.stdout.write('stream result: ' + JSON.stringify((await streamResult.response).candidates[0].content) + '\n');
}

async function generateContent() {
  await sendMessage([
    {text: `Hi John`}
  ]);
  await sendMessage([
    {text: `Mental Health Support`}
  ]);
  await sendMessage([
    {text: `I am feeeling a little bit down`}
  ]);
}

generateContent();
// Assuming you have an element with id "output" in your index.html
const outputElement = document.getElementById('output');

// Function to display the generated content in the HTML
function displayContent(content) {
    const messageElement = document.createElement('p');
    messageElement.textContent = content;
    outputElement.appendChild(messageElement);
}

// Call the displayContent function to show the generated content
async function generateContent() {
    await sendMessage([
        {text: `Hi John`}
    ]);
    await sendMessage([
        {text: `Mental Health Support`}
    ]);
    await sendMessage([
        {text: `I am feeling a little bit down`}
    ]);
}

generateContent().then(() => {
    console.log('Content generation completed.');
}).catch((error) => {
    console.error('Error generating content:', error);
});