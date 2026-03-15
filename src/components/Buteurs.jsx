// On importe les composants Recharts dont on a besoin
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts"


function StatBar({ value, max = 30, color }) {
  return (
    // Fond gris de la barre
    <div style={{
      background: "#1a1f2e",
      borderRadius: 4,
      height: 6,
      width: "100%",
      overflow: "hidden",
    }}>
      {/* Partie colorée proportionnelle à la valeur */}
      <div style={{
        width: `${(value / max) * 100}%`,  // ex: 22/30 = 73%
        height: "100%",
        background: `linear-gradient(90deg, ${color}88, ${color})`,
        borderRadius: 4,
        transition: "width 1s ease",       // animation à l'apparition
      }} />
    </div>
  )
}

function CustomTooltip({ active, payload, label }) {
  // active = true quand on survole une barre
  // payload = les données de la barre survolée
  if (!active || !payload?.length) return null

  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid #2a3042",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 13,
    }}>
      <p style={{ color: "#8892a4", marginBottom: 4 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill, fontWeight: 600 }}>
          {p.value} {p.dataKey === "goals" ? "buts" : "passes D"}
        </p>
      ))}
    </div>
  )
}


function Buteurs({ league, accentColor }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",  // 2 colonnes égales
      gap: 20,
    }}>

      {/* ── Colonne gauche : liste des buteurs ── */}
      <div style={{
        background: "#0d1117",
        border: "1px solid #1a2035",
        borderRadius: 16,
        padding: 24,
      }}>
        <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#fff" }}>
          🏅 Top Buteurs
        </h2>

        {league.topScorers.map((player, i) => (
          <div key={player.name} style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
          }}>

            {/* Drapeau du joueur */}
            <span style={{
              width: 36, height: 36,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i === 0 ? `${accentColor}22` : "#131b28",
              fontSize: 20,
              flexShrink: 0,  // empêche le drapeau de rétrécir
            }}>
              {player.flag}
            </span>

            {/* Infos + barre de progression */}
            <div style={{ flex: 1 }}>

              {/* Nom + nb de buts */}
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: "#e2e8f0" }}>
                  {player.name}
                </span>
                <span style={{
                  fontWeight: 800,
                  fontSize: 15,
                  color: i === 0 ? accentColor : "#fff"
                }}>
                  {player.goals} ⚽
                </span>
              </div>

              {/* Barre de progression */}
              <StatBar value={player.goals} max={30} color={accentColor} />

              {/* Équipe + passes décisives */}
              <span style={{ fontSize: 12, color: "#4a5568", marginTop: 4, display: "block" }}>
                {player.team} · {player.assists} passes D
              </span>

            </div>
          </div>
        ))}
      </div>

      {/* ── Colonne droite : graphique ── */}
      <div style={{
        background: "#0d1117",
        border: "1px solid #1a2035",
        borderRadius: 16,
        padding: 24,
      }}>
        <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, color: "#fff" }}>
          📊 Buts vs Passes D
        </h2>

        {/*
          ResponsiveContainer : rend le graphique responsive
          width="100%" height={280} → s'adapte à son conteneur
        */}
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={league.topScorers}
            layout="vertical"          // barres horizontales
            margin={{ left: 20 }}
          >
            {/* Grille de fond */}
            <CartesianGrid
              strokeDasharray="3 3"   // pointillés
              stroke="#1a2035"
              horizontal={false}      // seulement les lignes verticales
            />

            {/* Axe X (valeurs numériques) */}
            <XAxis
              type="number"
              tick={{ fill: "#4a5568", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Axe Y (noms des joueurs) */}
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={90}
            />

            {/* Infobulle au survol */}
            <Tooltip content={<CustomTooltip />} />

            {/* Barre des buts */}
            <Bar
              dataKey="goals"
              fill={accentColor}
              radius={[0, 4, 4, 0]}  // coins arrondis à droite
              name="goals"
            />

            {/* Barre des passes D (plus transparente) */}
            <Bar
              dataKey="assists"
              fill={`${accentColor}55`}  
              radius={[0, 4, 4, 0]}
              name="assists"
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default Buteurs