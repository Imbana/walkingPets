import "../style/ui.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import LayoutPage from '../pages/layoutPage/LayoutPage'
import LoginPage from "../pages/loginPage/LoginPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          {/* <Route path="portafolio" element={<PortafolioPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="teams" element={<Teams />}>
             <Route path=":teamId" element={<Team />} />
             <Route path="new" element={<NewTeamForm />} />
             <Route index element={<LeagueStandings />} />
          </Route> */}
       </Route>
       <Route path="/login" element={<LoginPage />}/>
    </Routes>
 </BrowserRouter>
  )
}

export default AppRoutes