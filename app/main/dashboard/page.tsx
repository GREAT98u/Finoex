import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Dashboard(){
    return(
        <ClerkProvider
        
        appearance={{
          cssLayerName: 'clerk',
        }}
      >
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <h1>this is dashboard</h1>
      </ClerkProvider>
    )
}