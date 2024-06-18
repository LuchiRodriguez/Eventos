import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ListaObjetos from '../Layout/ListaObjetos'
import Perfil from '../Layout/Perfil'
import Acceso from '../Layout/Acceso'
import EventoCreate from '../Layout/EventoCreate'
import ListaEventos from '../Layout/ListaEventos'
import InscribirEvento from '../Layout/InscribirEvento'

const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route index element={<ListaObjetos />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/acceso" element={<Acceso />} />
            <Route path="/crearevento" element={<EventoCreate />} />
            <Route path="/listaeventos" element={<ListaEventos />} />
            <Route path="/inscribirevento" element={<InscribirEvento />} />
        </Routes>
    </BrowserRouter>
}

export default Router