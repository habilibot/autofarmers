import { z } from 'zod';

export const agentSchema = z.object({
  name: z.string(),
  role: z.string(),
  profileImage: z.string(),
  state: z.string(), // 'idle' | 'working' | 'waiting'
});

export const agentsInfoSchema = z.record(z.string(), agentSchema);
