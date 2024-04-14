import { AuthButtonServer } from '@/ui/Button/auth-button.server'

export default function Login () {
  return (
    <section className="grid place-content-center min-h-screen">
      <div className='bg-gray-200 p-8 rounded-lg justify-center items-center'>
        <h1 className="text-xl font-bold mb-4 text-gray-900">Login in CalendarChatApp</h1>
        <AuthButtonServer />
      </div>
    </section>
  )
}
