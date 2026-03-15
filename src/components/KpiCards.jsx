function KpiCards({ league, accentColor }) {

  // On calcule les stats dynamiquement depuis les données
  const leader = league.standings[0]
  const topScorer = league.topScorers[0]

  // .reduce() compare chaque équipe et garde la meilleure
  const bestAttack = league.standings.reduce((a, b) => a.gf > b.gf ? a : b)
  const bestDefense = league.standings.reduce((a, b) => a.ga < b.ga ? a : b)

  // On définit nos 4 cartes dans un tableau
  const cards = [
    {
      label: "Leader",
      value: leader.team,
      sub: `${leader.pts} points`,
      icon: "🏆"
    },
    {
      label: "Meilleur buteur",
      value: topScorer.name,
      sub: `${topScorer.goals} buts`,
      icon: "⚽"
    },
    {
      label: "Meilleure attaque",
      value: bestAttack.team,
      sub: `${bestAttack.gf} buts marqués`,
      icon: "🎯"
    },
    {
      label: "Meilleure défense",
      value: bestDefense.team,
      sub: `${bestDefense.ga} buts encaissés`,
      icon: "🛡️"
    },
  ]

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)", // 4 colonnes égales
      gap: 16,
      marginBottom: 28,
    }}>
      {/* On boucle sur nos 4 cartes */}
      {cards.map((card, index) => (
        <div key={index} style={{
          background: "linear-gradient(135deg, #0f1520, #131b28)",
          border: `1px solid ${accentColor}22`,
          borderRadius: 14,
          padding: "18px 20px",
        }}>
          {/* Ligne du haut : label + icône */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: 12, color: "#4a5568", textTransform: "uppercase", letterSpacing: 1 }}>
              {card.label}
            </span>
            <span style={{ fontSize: 20 }}>{card.icon}</span>
          </div>

          {/* Valeur principale */}
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", margin: "8px 0 4px" }}>
            {card.value}
          </div>

          {/* Sous-titre coloré */}
          <div style={{ fontSize: 13, color: accentColor, fontWeight: 600 }}>
            {card.sub}
          </div>
        </div>
      ))}
    </div>
  )
}

export default KpiCards