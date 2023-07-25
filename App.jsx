import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Homecrud } from "./Components/Homecrud"
import { CreateUser } from "./Components/CreateUser"
import { Users } from "./Components/Users"
import EditUsers from "./Components/EditUsers"
// import Delete from "./Components/Delete"
const App=()=>{
    return(
        <div>
         <BrowserRouter> 
         <Homecrud></Homecrud>
         <Routes>
            <Route path="/createuser" element={<CreateUser></CreateUser>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/edit/:index" element={<EditUsers/>}/>
            {/* <Route path="/delete" element={<Delete></Delete>}/> */}
         </Routes>
         </BrowserRouter>
        </div>
    )
}

export default App