import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-light-black text-white mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href='/'>
            <a>Home</a>
          </Link>
          <span className="mx-auto">Izzo devblog</span>{' '} 
          <span>Github | Twitter | Instagram | Twitch</span>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>    
      <footer className="bg-light-black mt-8 py-4">
        <div className="container mx-auto text-light-gray flex justify-center">
          &copy; 2022 IzzoDev
        </div>
      </footer>
  </div>
  )
}
