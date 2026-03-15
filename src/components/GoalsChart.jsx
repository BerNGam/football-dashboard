import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts"

function CustomTooltip({ active, payload, label }) {
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
      <p style={{ color: payload[0].stroke, fontWeight: 600 }}>
        {payload[0].value} buts
      </p>
    </div>
  )
}


function GoalsChart({ league, accentColor }) {

  // On calcule les stats résumées depuis les données
  const totalGoals = league.goalsPerMonth.reduce((sum, m) => sum + m.goals, 0)
  const avgGoals = (totalGoals / league.goalsPerMonth.length).toFixed(1)
  const maxGoals = Math.max(...league.goalsPerMonth.map(m => m.goals))
  const bestMonth = league.goalsPerMonth.reduce((a, b) => a.goals > b.goals ? a : b).month

  // Les 4 cartes résumées en bas
  const stats = [
    { label: "Total buts",     value: totalGoals },
    { label: "Moyenne / mois", value: avgGoals   },
    { label: "Record mensuel", value: maxGoals   },
    { label: "Mois le + fort", value: bestMonth  },
  ]

  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid #1a2035",
      borderRadius: 16,
      padding: 24,
    }}>
      <h2 style={{ margin: "0 0 24px", fontSize: 16, fontWeight: 700, color: "#fff" }}>
        📈 Évolution des buts — Saison 2025-26
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={league.goalsPerMonth}>

          {/* Grille de fond */}
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2035" />

          {/* Axe X : les mois */}
          <XAxis
            dataKey="month"
            tick={{ fill: "#6b7280", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Axe Y : le nombre de buts */}
          <YAxis
            tick={{ fill: "#6b7280", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Infobulle au survol */}
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="goals"
            stroke={accentColor}
            strokeWidth={3}
            dot={{ fill: accentColor, r: 5, strokeWidth: 0 }}
            activeDot={{ r: 7, fill: accentColor }}
          />

        </LineChart>
      </ResponsiveContainer>

      {/* ── 4 cartes résumées en bas ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginTop: 24,
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: "#080d14",
            borderRadius: 10,
            padding: "14px 16px",
            border: `1px solid ${accentColor}18`,
          }}>
            <div style={{
              fontSize: 11,
              color: "#4a5568",
              textTransform: "uppercase",
              letterSpacing: 1,
              marginBottom: 8,
            }}>
              {s.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: accentColor }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default GoalsChart