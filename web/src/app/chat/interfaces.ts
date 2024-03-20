import { DanswerDocument, Filters } from "@/lib/search/interfaces";

export enum RetrievalType {
  None = "none",
  Search = "search",
  SelectedDocs = "selectedDocs",
}

export interface RetrievalDetails {
  run_search: "always" | "never" | "auto";
  real_time: boolean;
  filters?: Filters;
  enable_auto_detect_filters?: boolean | null;
}

type CitationMap = { [key: string]: number };

export interface ChatSession {
  id: number;
  name: string;
  persona_id: number;
  time_created: string;
}

export interface Message {
  messageId: number | null;
  message: string;
  type: "user" | "assistant" | "error";
  retrievalType?: RetrievalType;
  query?: string | null;
  documents?: DanswerDocument[] | null;
  citations?: CitationMap;
}

export interface BackendChatSession {
  chat_session_id: number;
  description: string;
  persona_id: number;
  messages: BackendMessage[];
}

export interface BackendMessage {
  message_id: number;
  parent_message: number | null;
  latest_child_message: number | null;
  message: string;
  rephrased_query: string | null;
  context_docs: { top_documents: DanswerDocument[] } | null;
  message_type: "user" | "assistant" | "system";
  time_sent: string;
  citations: CitationMap;
}

export interface DocumentsResponse {
  top_documents: DanswerDocument[];
  rephrased_query: string | null;
}

export interface StreamingError {
  error: string;
}
