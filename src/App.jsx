import { useState } from "react"

// On importe tous nos composants
import Header      from "./components/Header"
import KpiCards    from "./components/KpiCards"
import Classement  from "./components/Classement"
import Buteurs     from "./components/Buteurs"
import GoalsChart  from "./components/GoalsChart"
import RadarPlayer from "./components/RadarPlayer"

// importation des données
import { LEAGUES } from "./data/leagues"

function App() {

  /*
    2 états globaux gérés ici et passés aux composants enfants :
    - activeLeague : le championnat affiché
    - activeTab    : l'onglet affiché
  */
  const [activeLeague, setActiveLeague] = useState("La Liga")
  const [activeTab, setActiveTab]       = useState("classement")

  // On récupère les données du championnat actif
  const league      = LEAGUES[activeLeague]
  const accentColor = league.color

  // Les 4 onglets de navigation
  const tabs = [
    { id: "classement", label: "📋 Classement"   },
    { id: "buteurs",    label: "⚽ Buteurs"       },
    { id: "buts",       label: "📈 Buts / Mois"  },
    { id: "radar",      label: "🎯 Comparaison"  },
  ]

  return (
    <div style={{ minHeight: "100vh", background: "#070b13", color: "#e2e8f0" }}>

      {/* ── Header avec sélecteur de championnat ── */}
      <Header
        activeLeague={activeLeague}
        onLeagueChange={setActiveLeague}  // on passe directement setActiveLeague
        accentColor={accentColor}
      />

      {/* ── Contenu principal ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px 40px" }}>

        {/* ── KPI Cards ── */}
        <KpiCards league={league} accentColor={accentColor} />

        {/* ── Barre d'onglets ── */}
        <div style={{
          display: "flex",
          gap: 4,
          marginBottom: 24,
          background: "#0d1117",
          borderRadius: 10,
          padding: 4,
          width: "fit-content",
          border: "1px solid #1a2035",
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "9px 18px",
                borderRadius: 7,
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "all .2s",
                // onglet actif → fond coloré, texte noir
                // onglet inactif → transparent, texte gris
                background: activeTab === tab.id ? accentColor : "transparent",
                color:      activeTab === tab.id ? "#000"       : "#6b7280",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>


        {/* On affiche le composant uniquement si l'onglet correspond */}
        {activeTab === "classement" && (
          <Classement league={league} accentColor={accentColor} />
        )}

        {activeTab === "buteurs" && (
          <Buteurs league={league} accentColor={accentColor} />
        )}

        {activeTab === "buts" && (
          <GoalsChart league={league} accentColor={accentColor} />
        )}

        {activeTab === "radar" && (
          <RadarPlayer accentColor={accentColor} />
        )}

      </div>
    </div>
  )
}

export default App
