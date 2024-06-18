import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from '../pages/Perfil'
import Acceso from '../pages/Acceso'
import EventoCreate from '../pages/EventoCreate'
import ListaEventos from '../pages/ListaEventos'
import InscribirEvento from '../pages/InscribirEvento'

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route index element={<ListaEventos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/crearevento" element={<EventoCreate />} />
            <Route path="/inscribirevento" element={<InscribirEvento />} />
        </Routes>
    </BrowserRouter>
}

export default Router