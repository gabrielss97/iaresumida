export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const APP_ROUTES = {
  HOME: '/',
  CHAT: '/chat',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const AI_PROVIDERS = {
  OPENAI: 'openai',
  ANTHROPIC: 'anthropic',
  GOOGLE: 'google',
} as const; 