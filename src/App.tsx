import { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";

const Home = lazy(() => import("./components/home"));
const ServicosPage = lazy(() => import("@/pages/ServicosPage"));
const GaleriaPage = lazy(() => import("@/pages/GaleriaPage"));
const EquipePage = lazy(() => import("@/pages/EquipePage"));
const ContatoPage = lazy(() => import("@/pages/ContatoPage"));

import CustomCursor from "@/components/CustomCursor";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <Suspense fallback={null}>
        <>
          <CustomCursor />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/equipe" element={<EquipePage />} />
            <Route path="/contato" element={<ContatoPage />} />
          </Routes>
        </>
      </Suspense>
    </>
  );
}

export default App;
