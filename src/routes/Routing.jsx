import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Perfil } from "../pages/Perfil";
import  GestionCampos  from "../pages/GestionCampos";
import  Mapstore from "../pages/Mapstore";
import {HumedadSuelo} from '../components/mapstore/HumedadSuelo'
import {PrecioCampos} from '../components/mapstore/precioCampos'
import {TemperaturaTierra} from '../components/mapstore/TemperaturaTierra'
import CrearParcelaCampo from '../components/gestion/CrearParcelaCampo'
import {PointMap} from '../components/gestion/PointMap'
import News from "../pages/news";

import SeccionParcelas from '../pages/secciones/SeccionParcelas'
import SeccionRegistro from '../pages/secciones/SeccionRegistro'
import SeccionTipodatos from '../pages/secciones/SeccionTipodatos'



export default function Routing() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path='perfil' element={<Perfil />} />

      <Route path='news' element={<News />} />

      <Route   path='/maps' >
          <Route index element={<Mapstore />} />
          
          <Route path='humedad' element={<HumedadSuelo />} />
          
          <Route path='precio-campos' element={<PrecioCampos />} />

          <Route path='departametos-temperatura-tierra' element={<TemperaturaTierra />} />
          
       {/*    <Route path='provincia-formosa' element={<ProvinciaFormosa />} />
 */}

      </Route >
      <Route path='/gestion'>
      <Route index element={<GestionCampos />}/>
      <Route path='seccion-parcelas' element={<SeccionParcelas />}/>

      <Route path='seccion-tipodatos'element={<SeccionTipodatos/>}/>

      <Route path='seccion-registro' element={<SeccionRegistro/>}/>

      
      </Route>



      <Route path='CrearParcelaCampo' element={<CrearParcelaCampo />} />
      <Route path='cargar-datos' element={<PointMap />} />


    </Routes>
  );
}
