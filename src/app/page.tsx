import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <SignedOut>
        <div className="w-full flex justify-center">
          Please sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
