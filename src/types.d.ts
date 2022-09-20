export interface ApiHook {
  response: { [key: string]: any };
  error: boolean;
  loading: boolean;
}
