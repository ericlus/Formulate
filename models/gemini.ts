import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
});
const config = {
  responseMimeType: "application/json",
  systemInstruction: [
    {
      text: `Can you structure the response in JSON format like listed below and using these available options as a template.
  
  [{"id":"vqlzAYLK","type":"TitleField","extraAttributes":{"title":"Title field"}},{"id":"O1J0175i","type":"SubtitleField","extraAttributes":{"title":"Subtitle field"}},{"id":"Xz39wXh2","type":"ParagraphField","extraAttributes":{"text":"Text here"}},{"id":"iQ3lujFw","type":"SeparatorField"},{"id":"8tPadzMi","type":"SpacerField","extraAttributes":{"height":20}},{"id":"HHL16eIA","type":"TextField","extraAttributes":{"label":"Text field","helperText":"Helper text","required":false,"placeHolder":"Value here..."}},{"id":"RZLar8BQ","type":"NumberField","extraAttributes":{"label":"Number field","helperText":"Helper text","required":false,"placeHolder":"0"}},{"id":"84be8DOp","type":"TextareaField","extraAttributes":{"label":"Text area","helperText":"Helper text","required":false,"placeHolder":"Value here...","rows":3}},{"id":"j1yaZTBk","type":"DateField","extraAttributes":{"label":"Date field","helperText":"Pick a date","required":false}},{"id":"CR6IPtko","type":"SelectField","extraAttributes":{"label":"Select field","helperText":"Helper text","placeHolder":"Value here...","required":false,"options":["Option 1","Option 2"]}},{"id":"v9gk4yhq","type":"CheckboxField","extraAttributes":{"label":"Checkbox field","helperText":"Helper text","required":false}}]`,
    },
  ],
};
const model = "gemini-2.0-flash";

export const AiChatSession = async (input: string, jsonContent?: string) => {
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${
            jsonContent &&
            `Optional context this is my current form: ${jsonContent}`
          }
          
          ${input}`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  const responseText = response?.text;

  let jsonData = null;
  let processingError = null;

  if (typeof responseText === "string" && responseText.length > 0) {
    try {
      jsonData = JSON.parse(responseText);
    } catch (error) {
      console.error("Failed to parse JSON from model response text:", error);
      console.log("Text that failed to parse:", responseText);
      processingError = new Error("Invalid JSON format received from model");
    }
  } else {
    console.warn(
      "Received an empty, null, or non-string response from the model.",
      responseText
    );
    processingError = new Error(
      "Empty or invalid response received from model"
    );
  }

  if (processingError) {
    throw processingError;
  }

  return jsonData;
};
