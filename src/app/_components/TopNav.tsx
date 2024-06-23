import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex justify-between gap-4">
      <h1>Gallery</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default TopNav;
