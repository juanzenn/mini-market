import SignInButton from "@/components/sign-in-button";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const session = await getCurrentUser();

  return (
    <>
      <SignInButton />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
