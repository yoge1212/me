import { Geist, Geist_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jetBrains = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Yogesh Sampathkumar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrains.variable} antialiased`}
      >
        <div className="flex flex-col mt-15 justify-start items-center min-h-screen  w-full">
          <div className="w-full max-w-screen-md mx-auto px-4">
            <nav className="flex gap-x-5 px-4 py-2 justify-start bg-[#414868]">
              <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/`}>
                home
              </Link>
              <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/blog`}>
                blog
              </Link>
              <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/projects`}>
                projects
              </Link>
            </nav>

            {children}

            <footer className="flex gap-x-5 px-2 py-1 justify-start mt-30 mb-5 bg-[#414868]">
              <a
                className="text-[#2ac3de] underline hover:font-semibold"
                target="_blank"
                href="https://github.com/yoge1212"
              >
                github
              </a>
              <a
                className="text-[#2ac3de] underline hover:font-semibold"
                target="_blank"
                href="https://www.linkedin.com/in/yogeshsampathkumar/"
              >
                linkedin
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
