import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Home | Tribal Scholarship Program',
  description: 'The Scholarship Program pledges to provide high-quality, pre-college counseling by: helping students explore majors and assisting with admission, housing and financial aid applications and the registration process at nearby colleges; making on-campus visits to monitor student progress and to assist in resolving problems; and providing financial assistance by using the Title IV Cost of Attendance from each college or university to set the scholarship award amount for each individual student.',
}

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
    </div>
  )
}
