
export const endpointsTableHeaders = [
    {
      title: "PARAMETERS",
    },
    {
      title: "TYPE",
    },
    {
      title: "DESCRIPTION",
    },
  ];
  
  export const endpointsTable = [
    {
      title: "api",
      subtitle: "string",
      description: 'The API provider to use. Options: "openai" or "together"',
    },
    {
      title: "topic",
      subtitle: "string",
      description: 'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
    },
    {
      title: "model",
      subtitle: "string",
      description: "The main topic or theme of the book",
    },
    {
      title: "language",
      subtitle: "string",
      description: "The language in which the book should be generated",
    },
    {
      title: "word_count",
      subtitle: "integer",
      description: "The approximate number of words for the generated book",
    },
  ];

  