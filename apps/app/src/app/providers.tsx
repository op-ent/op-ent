"use client";

import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";

function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default api.withTRPC(Providers);
