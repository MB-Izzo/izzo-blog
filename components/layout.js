import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-light-black mt-8 py-4">
        <div className="container mx-auto text-light-gray flex justify-center">
          &copy; 2022 IzzoDev
        </div>
      </footer>
    </div>
  );
}
