import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateAd from "./pages/CreateAd";
import TextAd from "./pages/TextAd";
import MediaAd from "./pages/MediaAd";
import AdSubmitted from "./pages/AdSubmitted";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "40px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="create-ad" element={<CreateAd />} />
          <Route path="text-ad" element={<TextAd />} />
          <Route path="media-ad" element={<MediaAd />} />
          <Route path="ad-submitted" element={<AdSubmitted />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
