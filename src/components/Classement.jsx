
function FormBadge({ result }) {
  const colors = {
    W: "#22c55e",  // vert pour victoire
    D: "#facc15",  // jaune pour nul
    L: "#ef4444",  // rouge pour défaite
  }

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 22,
      height: 22,
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 700,
      background: colors[result],          
      color: result === "D" ? "#111" : "#fff", 
      marginRight: 3,
    }}>
      {result}
    </span>
  )
}



function Classement({ league, accentColor }) {

  // Les en-têtes du tableau
  const headers = ["#", "Équipe", "J", "G", "N", "P", "BP", "BC", "Pts", "Forme"]

  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid #1a2035",
      borderRadius: 16,
      overflow: "hidden",  // pour que le tableau respecte le borderRadius
    }}>

      {/* Titre du tableau */}
      <div style={{ padding: "18px 24px", borderBottom: "1px solid #1a2035" }}>
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" }}>
          Classement
        </h2>
      </div>

      {/* Le tableau HTML */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>

        {/* En-têtes */}
        <thead>
          <tr style={{ background: "#080d14" }}>
            {headers.map(h => (
              <th key={h} style={{
                padding: "12px 16px",
                fontSize: 12,
                color: "#4a5568",
                textAlign: h === "Équipe" ? "left" : "center",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>

        {/* Lignes de données */}
        <tbody>
          {league.standings.map((row, i) => (
            <tr key={row.team} style={{
              borderTop: "1px solid #111827",
              // fond légèrement coloré pour le leader
              background: i === 0 ? `${accentColor}08` : "transparent",
            }}>

              {/* Position avec badge coloré pour le 1er */}
              <td style={{ padding: "14px 16px", textAlign: "center" }}>
                <span style={{
                  display: "inline-block",
                  width: 26, height: 26,
                  lineHeight: "26px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 700,
                  textAlign: "center",
                  background: i === 0 ? accentColor : "#1a2035",
                  color: i === 0 ? "#000" : "#6b7280",
                }}>
                  {row.pos}
                </span>
              </td>

              {/* Nom de l'équipe */}
              <td style={{ padding: "14px 16px", fontWeight: 700, color: "#e2e8f0", fontSize: 14 }}>
                {row.team}
              </td>

              {/* Stats numériques : J, G, N, P, BP, BC */}
              {[row.played, row.won, row.drawn, row.lost, row.gf, row.ga].map((v, j) => (
                <td key={j} style={{ padding: "14px 16px", textAlign: "center", fontSize: 13, color: "#9ca3af" }}>
                  {v}
                </td>
              ))}

              {/* Points — mis en valeur pour le leader */}
              <td style={{ padding: "14px 16px", textAlign: "center" }}>
                <span style={{ fontWeight: 800, fontSize: 15, color: i === 0 ? accentColor : "#fff" }}>
                  {row.pts}
                </span>
              </td>

              
              <td style={{ padding: "14px 16px", textAlign: "center" }}>
                {row.form.map((f, fi) => (
                  <FormBadge key={fi} result={f} />
                ))}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Classement