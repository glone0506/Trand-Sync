"use server";

import { OpenAI } from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API,
    });

    // API 호출
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 또는 사용하려는 모델
      messages: [
        {
          role: "user",
          content: `이모티콘을 사용해가며 앞으로 할말에 대해 정리해줘. 그리고 IT와 관련된 대답만 해야해. 이제 질문할게. ${message}`,
        },
      ],
    });

    console.log(process.env.OPENAI_API);

    return new Response(
      JSON.stringify({ response: response.choices[0].message.content }),
      { status: 200 }
    );
  } catch (error) {
    console.log("api: ", process.env.OPENAI_API);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
