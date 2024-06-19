import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'
import Perfil from '../pages/Perfil'
import EventoCreate from '../pages/EventoCreate'
import ListaEventos from '../pages/ListaEventos'
import InscribirEvento from '../pages/InscribirEvento'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<PrivateRoute component={<ListaEventos />} />} /> */}
                <Route index element={<ListaEventos/>}/>
                <Route path="/perfil" element={<Perfil/>}/>
                <Route path="/crearevento" element={<EventoCreate/>}/>
                <Route path="/inscribirevento" element={<InscribirEvento/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router