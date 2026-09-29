import { Agent } from '@strands-agents/sdk';

// Bedrock is the default, so no model object is needed.
const agent = new Agent();
const result = await agent.invoke('エージェントハーネスとは何ですか？一文で説明してください。');
console.log(result.lastMessage);
