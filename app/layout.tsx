import { Links } from './components/links'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Links />
        {children}
      </body>
    </html>
  )
}
