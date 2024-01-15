export interface RequestToken {
  request_token: string;
  success: boolean;
  expires_at: string;
}

export interface Session {
  session_id: string;
  success: boolean;
}
