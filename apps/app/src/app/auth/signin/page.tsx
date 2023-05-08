import { getCsrfToken } from "next-auth/react";
import { headers } from "next/headers";

export default async function SignIn() {
  const csrfToken = await getCsrfToken({
    req: { headers: { cookie: headers().get("cookie") || undefined } },
  });

  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
