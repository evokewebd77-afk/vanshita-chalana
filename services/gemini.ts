
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const MODEL_NAME = 'gemini-3-flash-preview';

export async function getSecurityAdvice(history: Message[]): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: contents as any,
      config: {
        systemInstruction: "You are the Cyber Guard Security Specialist. Your role is to assist users with their security scanning queries. You specialize in Web & Mobile App security, CWE Top 25 vulnerabilities, and automated reporting. Your tone is professional, helpful, and technically precise.",
        temperature: 0.6,
      },
    });

    return response.text || "Connection to Cyber Guard core interrupted. Retrying handshake...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Cyber Guard network error. Please verify your connection protocols.";
  }
}
