import { useState } from "react"
import {
  RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer
} from "recharts"
import { PLAYER_STATS } from "../data/leagues"


function StatBar({ value, color }) {
  return (
    <div style={{
      background: "#1a1f2e",
      borderRadius: 4,
      height: 6,
      width: "100%",
      overflow: "hidden",
    }}>
      <div style={{
        width: `${value}%`,  // value est déjà sur 100
        height: "100%",
        background: `linear-gradient(90deg, ${color}88, ${color})`,
        borderRadius: 4,
        transition: "width 0.8s ease",
      }} />
    </div>
  )
}


function RadarPlayer({ accentColor }) {

  // useState pour savoir quel joueur est sélectionné
  const [selectedPlayer, setSelectedPlayer] = useState("K. Mbappé")

  // On récupère les stats du joueur sélectionné
  const stats = PLAYER_STATS[selectedPlayer]

  /*
    On transforme l'objet stats en tableau pour Recharts
    Object.entries() transforme un objet en tableau de paires [clé, valeur]

    Exemple :
    { pace: 97, shooting: 94 }
    → [ ["pace", 97], ["shooting", 94] ]
    → [ { stat: "Pace", value: 97 }, { stat: "Shooting", value: 94 } ]
  */
  const radarData = Object.entries(stats).map(([key, value]) => ({
    stat: key.charAt(0).toUpperCase() + key.slice(1), 
    value,
  }))

  // Fonction pour choisir la couleur selon la valeur
  function getStatColor(value) {
    if (value >= 90) return accentColor  
    if (value >= 75) return "#22c55e"    
    return "#6b7280"                     
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
    }}>

      
      <div style={{
        background: "#0d1117",
        border: "1px solid #1a2035",
        borderRadius: 16,
        padding: 24,
      }}>
        <h2 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#fff" }}>
          🎯 Profil Joueur
        </h2>
        <p style={{ margin: "0 0 20px", fontSize: 13, color: "#4a5568" }}>
          Sélectionne un joueur pour voir ses stats
        </p>

        {/* Boutons de sélection des joueurs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {Object.keys(PLAYER_STATS).map(player => (
            <button
              key={player}
              onClick={() => setSelectedPlayer(player)}
              style={{
                padding: "7px 14px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                border: `1.5px solid ${
                  selectedPlayer === player ? accentColor : "#1e2738"
                }`,
                background: selectedPlayer === player
                  ? `${accentColor}18`
                  : "transparent",
                color: selectedPlayer === player ? accentColor : "#6b7280",
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {player}
            </button>
          ))}
        </div>

        {/* Graphique Radar */}
        <ResponsiveContainer width="100%" height={260}>
          <RadarChart data={radarData}>

            {/*
              PolarGrid : la toile d'araignée de fond
              PolarAngleAxis : les labels autour (Pace, Shooting...)
              PolarRadiusAxis : les cercles concentriques (0 à 100)
            */}
            <PolarGrid stroke="#1a2035" />
            <PolarAngleAxis
              dataKey="stat"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />

            {/* La surface colorée du radar */}
            <Radar
              dataKey="value"
              stroke={accentColor}
              fill={accentColor}
              fillOpacity={0.2}  
              strokeWidth={2}
            />

          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Colonne droite : stats détaillées ── */}
      <div style={{
        background: "#0d1117",
        border: "1px solid #1a2035",
        borderRadius: 16,
        padding: 24,
      }}>
        <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#fff" }}>
          📊 Stats détaillées — {selectedPlayer}
        </h2>

        {/* On boucle sur chaque stat du joueur */}
        {Object.entries(stats).map(([statName, value]) => (
          <div key={statName} style={{ marginBottom: 18 }}>

            {/* Nom de la stat + valeur */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}>
              <span style={{
                fontSize: 13,
                color: "#9ca3af",
                textTransform: "capitalize",  
              }}>
                {statName}
              </span>
              <span style={{
                fontWeight: 800,
                fontSize: 14,
                color: getStatColor(value),  
              }}>
                {value}
              </span>
            </div>

            {/* Barre de progression */}
            <StatBar value={value} color={getStatColor(value)} />

          </div>
        ))}
      </div>

    </div>
  )
}

export default RadarPlayer