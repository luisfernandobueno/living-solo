import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
import RoutePage from "./pages/Route";
import Checklist from "./pages/Checklist";
import Tools from "./pages/Tools";
import Glossary from "./pages/Glossary";
import FAQ from "./pages/FAQ";

export default function App(){
  return <Routes><Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/ruta" element={<RoutePage/>}/>
    <Route path="/capitulo/:id" element={<Chapter/>}/>
    <Route path="/checklist" element={<Checklist/>}/>
    <Route path="/herramientas" element={<Tools/>}/>
    <Route path="/glosario" element={<Glossary/>}/>
    <Route path="/preguntas" element={<FAQ/>}/>
    <Route path="*" element={<div className="py-24 text-center"><h1 className="text-4xl font-extrabold">Página no encontrada</h1><a href="#/" className="mt-4 inline-block text-forest">Volver al inicio</a></div>}/>
  </Route></Routes>;
}
