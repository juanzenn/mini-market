import SignInButton from "@/components/sign-in-button";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  return (
    <>
      <SignInButton />
    </>
  );
}
