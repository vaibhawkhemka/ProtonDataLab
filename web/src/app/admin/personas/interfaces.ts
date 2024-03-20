import { DocumentSet } from "@/lib/types";

export interface StarterMessage {
  name: string;
  description: string | null;
  message: string;
}

export interface Prompt {
  id: number;
  name: string;
  shared: boolean;
  description: string;
  system_prompt: string;
  task_prompt: string;
  include_citations: boolean;
  datetime_aware: boolean;
  default_prompt: boolean;
}

export interface Persona {
  id: number;
  name: string;
  shared: boolean;
  is_visible: boolean;
  display_priority: number | null;
  description: string;
  document_sets: DocumentSet[];
  prompts: Prompt[];
  num_chunks?: number;
  llm_relevance_filter?: boolean;
  llm_filter_extraction?: boolean;
  llm_model_version_override?: string;
  starter_messages: StarterMessage[] | null;
  default_persona: boolean;
}
