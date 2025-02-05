import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
});

// Handle POST request for AI queries and pitch reviews
export async function POST(req: NextRequest) {
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  try {
    const body = await req.json();
    // Accept either a "prompt" or "pitch" field from the client
    const {
      prompt,
      pitch,
      model = 'gpt-4o-mini',
      temperature = 0.7,
      taskType: providedTaskType,
    } = body;

    // Use pitch if provided; otherwise, fall back to prompt
    const effectivePrompt = pitch || prompt;
    if (!effectivePrompt) {
      return NextResponse.json({ error: 'A prompt or pitch is required.' }, { status: 400 });
    }

    // Default to "analyze" when reviewing a pitch submission, unless overridden
    const taskType = providedTaskType || (pitch ? 'analyze' : 'query');

    // Define the task context based on the task type
    let taskContext = '';
    switch (taskType) {
      case 'query':
        taskContext = `Answer the user's query with clarity and precision, leveraging expertise in AI, blockchain, and quantum technologies.`;
        break;
      case 'analyze':
        taskContext = `Evaluate the submitted pitch in the context of disruptive innovation. Identify strengths, potential risks, and actionable recommendations that align with MindLaunch.ai's investment philosophy in AI, blockchain, and quantum technologies.`;
        break;
      case 'summarize':
        taskContext = `Summarize the key points from the user's input in a concise manner, ensuring the summary reflects advanced technical insights.`;
        break;
      case 'recommend':
        taskContext = `Provide step-by-step recommendations based on the user's input, grounded in your knowledge of emerging technologies and market trends.`;
        break;
      case 'compose':
        taskContext = `Craft a coherent narrative that combines technical precision with creative insight, suitable for storytelling in the tech startup space.`;
        break;
      default:
        taskContext = `Provide a thoughtful and informed response using your technical expertise.`;
        break;
    }

    // Enhanced prompt aligning with the MindLaunch.ai narrative
    const enhancedPrompt = `
PROFILE CONTEXT:
You are the MindLaunch.ai AI Agent—an advanced analytical and strategic tool dedicated to empowering disruptive startups. MindLaunch.ai is a venture capital firm focused on fueling innovation in AI, blockchain, and quantum technologies.

BACKGROUND:
- At MindLaunch.ai, we identify and nurture visionary startups that are set to redefine the future of technology.
- We pride ourselves on a deep understanding of emerging technologies and market trends, empowering entrepreneurs to transform innovative ideas into market-leading solutions.
- Our commitment is to drive breakthrough progress by combining strategic investment with technical excellence.

CORE EXPERTISE:
- Deep knowledge in artificial intelligence, blockchain ecosystems, and quantum computing.
- Expertise in evaluating technology-driven innovations with an eye for scalability and impact.
- A forward-thinking approach that merges technical analysis with strategic investment insights.

TASK TYPE: "${taskType}"
TASK CONTEXT: ${taskContext}
USER INPUT: "${effectivePrompt}"
`;

    // Call the OpenAI API with the enhanced prompt
    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: enhancedPrompt }],
      temperature,
      max_tokens: 2000,
    });

    return NextResponse.json({
      success: true,
      response: response.choices[0]?.message?.content || 'No response received.',
    });
  } catch (error: any) {
    console.error('Error communicating with OpenAI:', error);

    let statusCode = 500;
    let errorMessage = 'Failed to communicate with OpenAI.';

    if (error.response?.status) {
      statusCode = error.response.status;
      errorMessage = `OpenAI API Error: ${error.response.data?.error?.message || 'Unknown error'}`;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
