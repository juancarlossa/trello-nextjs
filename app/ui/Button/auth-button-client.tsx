'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from '../icons'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'https://trelionjuancarlossa.vercel.app/auth/callback'
      }
    })
  }

  const SignInButton = () => {
    return (
      <Button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 me-2 mb-2">
        <GithubIcon />
        Sign in with Github
      </Button>
    )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const SignOutButton = () => {
    return (
      <Button color="primary" variant="ghost" onClick={handleSignOut}>Sign Out</Button>
    )
  }

  return (
    <header>
      {
        session === null
          ? <SignInButton />
          : <SignOutButton />
      }
    </header>
  )
}
