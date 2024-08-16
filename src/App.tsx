import { generateApiKey } from "generate-api-key";
import { useState } from "react";
import Table from "./components/Table";
import { endpointsTable, endpointsTableHeaders } from "./data/endpoints";
import { tutorials } from "./data/tutorials";
import { pricingTable, pricingTableHeaders } from "./data/pricing";
import Code from "./components/Code";
import ThemeToggle from "./components/ThemeToggle";

const navItems = [
  {
    href: "#overview",
    text: "OVERVIEW",
  },
  {
    href: "#authentication",
    text: "AUTHENTICATION",
  },
  {
    href: "#endpoints",
    text: "ENDPOINTS",
  },
  {
    href: "#tutorial",
    text: "TUTORIAL",
  },
  {
    href: "#code",
    text: "CODE EXAMPLES",
  },
  {
    href: "#pricing",
    text: "PRICING",
  },
];

function App() {
  const [key, setKey] = useState("");
  return (
    <div className="bg-background">
      <div className="bg-primary text-center p-10">
        <h1 className="text-white lg:text-5xl md:text-4xl text-2xl font-bold">
          Book Generator API
        </h1>
        <ThemeToggle />
      </div>
      <nav className="bg-section justify-center flex md:flex-row flex-col gap-7 p-5">
        {navItems.map((navItem) => (
          <a
            key={navItem.href}
            className="text-text hover:text-accent"
            href="#{navItem.href}"
          >
            {navItem.text}
          </a>
        ))}
      </nav>

      <div id="overview" className="mx-auto max-w-screen-lg mt-8 ">
        <div className="bg-section pt-14 pb-8 px-10 text-balance md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold mb-5">
            Overview
          </h2>
          <p className="text-text">
            The Book Generator API allows you to generate books on various
            topics using different language models. This documentation provides
            details on how to use the API, including authentication, available
            endpoints, and code examples.
          </p>
        </div>
      </div>

      <div id="authentication" className="mx-auto max-w-screen-lg mt-8">
        <div className="bg-section pt-14 pb-8 px-10 text-balance  md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold mb-4">
            Authentication
          </h2>
          <p className="text-text mb-2">
            To use the API, you need to include your API key in the header of
            each request:
          </p>

          <Code code="X-API-Key: YOUR_API_KEY" />

          <p className="text-text mb-4">
            To use the API, you need to include your API key in the header of
            each request:
          </p>
          <button
            className="bg-accent rounded-md p-3 px-6 mb-4"
            onClick={() => setKey(generateApiKey() as string)}
          >
            Generate API Key
          </button>
          <Code code={`Your API Key: ${key}`} />
        </div>
      </div>

      <div id="endpoints" className="mx-auto max-w-screen-lg mt-8">
        <div className="bg-section pt-14 pb-8 px-10 text-balance md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold mb-6">
            Endpoints
          </h2>
          <h3 className="text-secondary text-lg font-semibold mb-4">
            Generate Book
          </h3>
          <div className="flex gap-5 mb-4">
            <span className="bg-accent p-2 rounded">POST</span>
            <span className="bg-primary text-text p-2 rounded">
              /api/generate-book
            </span>
          </div>

          <h4 className="text-lg font-semibold text-secondary mb-3">
            Request Body
          </h4>
          <Table values={endpointsTable} headers={endpointsTableHeaders} />

          <Code
            heading="Response"
            code={{
              message: "Book generation started",
              status: "processing",
              job_id: "unique-job-identifier",
            }}
          />
        </div>
      </div>

      <div id="tutorial" className="mx-auto max-w-screen-lg mt-8">
        <div className="bg-section pt-14 pb-8 px-10 text-balance md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold mb-4">
            Tutorial
          </h2>
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="mb-7">
              <h3 className="text-secondary text-xl font-semibold ">
                {tutorial.step}
              </h3>
              <p className="text-text">{tutorial.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="code" className="mx-auto max-w-screen-lg mt-8">
        <div className="bg-section pt-14 pb-8 px-10 text-balance md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold mb-7">
            Code Examples
          </h2>

          <Code
            heading="Python"
            code={`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
          />

          <Code
            heading="JavaScript (Node.js)"
            code={`
const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
   `}
          />
        </div>
      </div>

      <div id="pricing" className="mx-auto max-w-screen-lg mt-8 pb-10">
        <div className="bg-section pt-14 pb-8 px-10 md:rounded-md border-2 border-border">
          <h2 className="text-secondary text-2xl font-semibold">API Pricing</h2>
          <p className="text-text mb-4">
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
          <Table values={pricingTable} headers={pricingTableHeaders} />

          <h3 className="text-secondary text-xl font-semibold mb-4">
            Token Estimation
          </h3>
          <p className="w-full text-text mb-6">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>

          <h3 className="text-secondary text-xl font-semibold mb-4">Billing</h3>
          <p className="w-full text-text mb-6">
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
