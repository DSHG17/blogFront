import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { FilteredPostList } from "./components/FilteredPostList";
import { PostDetail } from "./components/PostDetail";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-screen bg-[#FFFFF0]">
        <Routes>
          {/* Página principal con botones de filtro */}
          <Route path="/" element={<FilteredPostList />} />

          {/* Detalle de publicación */}
          <Route path="/post/:id" element={<PostDetail />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
