import './globals.css'

export const metadata = {
  title: 'Hello world',
  description: 'Best website ever.',
}

export default function RootLayout({children}: {children: React.ReactNode}): JSX.Element {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
