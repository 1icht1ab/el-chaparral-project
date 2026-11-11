CREATE TABLE public.ai_gateway_access_state (
  feature text PRIMARY KEY,
  status integer NOT NULL,
  message text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.ai_gateway_access_state TO service_role;
ALTER TABLE public.ai_gateway_access_state ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.ai_gateway_access_state IS 'Server-only AI access circuit breaker; stores no customer order data.';