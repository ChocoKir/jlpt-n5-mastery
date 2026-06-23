// features/ai-sensei/domain/entities/chat.entity.ts
export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}