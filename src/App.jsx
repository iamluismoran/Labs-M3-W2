import { Routes, Route, NavLink } from "react-router-dom"
import Home from "./components/Home/Home.jsx";
import SongList from "./components/SongList/SongList.jsx";

export default function App() {
  const linkBase = {
    textDecoration: "none",
    padding: "0.45rem 0.9rem",
    borderRadius: "999px",
    border: "1px solid transparent",
    transition: "background 1s, color 1.2s, border-color 1s",
    fontWeight: 500,
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <NavLink
          to="/home"
          style={({ isActive }) =>
            isActive
              ? { ...linkBase, color: "#111827",
                background: "#e5e7eb",
                borderColor: "#e5e7eb" }
              : { ...linkBase, color: "#e5e7eb" }
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/canciones"
          style={({ isActive }) =>
            isActive
              ? { ...linkBase, color: "#111827", background: "#e5e7eb", borderColor: "#e5e7eb" }
              : { ...linkBase, color: "#e5e7eb" }
          }
        >
          Canciones
        </NavLink>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/canciones" element={<SongList />} />
      </Routes>
    </>
  );
}