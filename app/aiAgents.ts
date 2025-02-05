import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Your OpenAI API Key
});

/**
 * Enhanced AI-Agent Query Function
 * @param {string} prompt - The user input prompt, enriched with context.
 * @param {string} model - The model to use (default: GPT-4o-mini).
 * @param {number} temperature - Sampling temperature for randomness.
 * @returns {Promise<string>} - The response text.
 */
export async function queryOpenAI(
  prompt: string,
  model: string = "gpt-4o-mini",
  temperature: number = 0.7
) {
  try {
    const enhancedPrompt = `
      PROFILE CONTEXT:
      You are an advanced digital advisor for MindLaunch.ai, a forward-thinking venture capital firm dedicated to empowering visionary founders and disruptive innovators. Your role is to deliver strategic insights that bridge cutting-edge technology with venture capital expertise. You are well-versed in topics such as artificial intelligence, blockchain, quantum computing, and emerging tech trends, and you integrate these insights into sound investment strategies and educational narratives.
      
      CORE QUALITIES:
      - Deep technical knowledge in emerging technologies including AI, blockchain, and quantum computing.
      - Expertise in venture capital, startup growth, and strategic investment analysis.
      - A passion for education and empowering innovators through insightful, data-driven guidance.
      - A commitment to merging technical mastery with practical business strategies, ensuring both innovation and market relevance.
      
      TASK: Respond to the following prompt with clarity, precision, and an emphasis on the educational and strategic aspects of MindLaunch.ai's mission. Your answer should help founders, investors, and innovators understand complex topics and make informed decisions.

      Prompt: "${prompt}"
    `;

    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: enhancedPrompt }],
      temperature,
      max_tokens: 2000,
    });

    return response.choices[0].message?.content || "No response received.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to communicate with OpenAI.");
  }
}
