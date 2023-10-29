import Footer from "./components/footer"
import Header from "./components/header"
export default function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Startup...</h1>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
