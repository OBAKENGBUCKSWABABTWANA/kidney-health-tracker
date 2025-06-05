async function handler({ preferences = [], restrictions = [] }) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return {
      error: "OpenAI API key is not configured",
    };
  }

  const prompt = `Generate 3 kidney-friendly meal suggestions (breakfast, lunch, and dinner) considering these dietary preferences: ${preferences.join(
    ", "
  )} and restrictions: ${restrictions.join(
    ", "
  )}. The meals should be low in sodium, potassium, and phosphorus. Format the response as a JSON object with breakfast, lunch, and dinner properties. Each meal should include the name and a brief description.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: "Failed to generate meal suggestions",
      };
    }

    try {
      const suggestions = JSON.parse(data.choices[0].message.content);
      return {
        suggestions,
      };
    } catch (e) {
      return {
        error: "Failed to parse meal suggestions",
      };
    }
  } catch (error) {
    return {
      error: "Failed to connect to OpenAI API",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}