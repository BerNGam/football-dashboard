// On importe les données des ligues pour afficher les boutons
import { LEAGUES } from "../data/leagues"

// Ce composant reçoit 3 "props" (paramètres) :
// - activeLeague : le championnat actuellement sélectionné
// - onLeagueChange : la fonction à appeler quand on clique sur un bouton
// - accentColor : la couleur du championnat actif
function Header({ activeLeague, onLeagueChange, accentColor }) {
  return (
    <header style={{
      background: "#0d1117",
      borderBottom: "1px solid #1a2035",
      padding: "20px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",  // reste collé en haut quand on scroll
      top: 0,
      zIndex: 100,         // passe au dessus des autres éléments
    }}>

      {/* Logo + titre */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 42, height: 42, borderRadius: 10,
          background: `${accentColor}22`,
          border: `1.5px solid ${accentColor}55`,
          display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 22,
        }}>
          ⚽
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#fff" }}>
            FootStats <span style={{ color: accentColor }}>EU</span>
          </h1>
          <p style={{ margin: 0, fontSize: 12, color: "#4a5568" }}>
            Saison 2025–26 · Championnats Européens
          </p>
        </div>
      </div>

      {/* Boutons de sélection des championnats */}
      <div style={{ display: "flex", gap: 8 }}>
        {/* On boucle sur les championnats avec Object.keys() */}
        {Object.keys(LEAGUES).map(lg => (
          <button
            key={lg}                          
            onClick={() => onLeagueChange(lg)} 
            style={{
              padding: "7px 14px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              border: `1.5px solid ${
                activeLeague === lg
                  ? LEAGUES[lg].color   // bordure colorée si actif
                  : "#1e2738"           // bordure grise si inactif
              }`,
              background: activeLeague === lg
                ? `${LEAGUES[lg].color}18`  // fond légèrement coloré si actif
                : "transparent",
              color: activeLeague === lg
                ? LEAGUES[lg].color
                : "#6b7280",
              cursor: "pointer",
              transition: "all .2s",       
            }}
          >
            {lg}
          </button>
        ))}
      </div>

    </header>
  )
}

export default Header