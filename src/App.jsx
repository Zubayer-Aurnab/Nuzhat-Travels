import { Outlet } from "react-router-dom"
import SideBar from "./components/ui/SideBar/SideBar"
import NavBar from "./components/shared/NavBar/NavBar"


function App() {


  return (
    <>
      <div className="flex flex-col lg:flex-row gap-1 ">
        <div>
          <SideBar />
        </div>
        <div className="h-[100vh] overflow-y-scroll  lg:w-[85%] mt-[1px] absolute lg:relative lg:flex lg:flex-col ">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
