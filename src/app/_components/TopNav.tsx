'use client';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../_libs/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex justify-between gap-4">
      <h1>Gallery</h1>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
