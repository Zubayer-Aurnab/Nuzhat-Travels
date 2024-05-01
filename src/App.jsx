import MainPage from "./components/ui/MainPage/MainPage"
import SideBar from "./components/ui/SideBar/SideBar"


function App() {


  return (
    <>
      <div className="flex gap-1">
        <SideBar />
        <MainPage />
      </div>
    </>
  )
}

export default App
