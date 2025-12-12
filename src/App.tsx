import "./scss/app.scss";

import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { MusicPage } from "./pages/Music";
import { MediaPage } from "./pages/Media";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";
import { NewsPage } from "./pages/News";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/photos" element={<MediaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
