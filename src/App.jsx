import GitHubProfile from "./GitHub/GitHubProfile"

function App() {

  return (
    <>
      <h1 className="text-center text-5xl font-bold font-mono ">Search  Your GitHub Details </h1>
      <p className="text-center  font-serif mt-2"><a className="bg-slate-200 p-1 rounded" href="https://github.com/ILhankhondaker" target="_blank" rel="noopener noreferrer">  © Ilhan Khondaker</a></p>
      <GitHubProfile />
    </>
  )
}

export default App
