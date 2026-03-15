export const LEAGUES = {
  "Ligue 1": {
    color: "#00D4FF",
    standings: [
      { pos: 1, team: "PSG", played: 28, won: 21, drawn: 4, lost: 3, gf: 68, ga: 24, pts: 67, form: ["W","W","W","D","W"] },
      { pos: 2, team: "Monaco", played: 28, won: 18, drawn: 5, lost: 5, gf: 54, ga: 32, pts: 59, form: ["W","W","L","W","D"] },
      { pos: 3, team: "Marseille", played: 28, won: 16, drawn: 6, lost: 6, gf: 50, ga: 35, pts: 54, form: ["D","W","W","L","W"] },
      { pos: 4, team: "Lyon", played: 28, won: 14, drawn: 7, lost: 7, gf: 45, ga: 38, pts: 49, form: ["W","D","D","W","L"] },
      { pos: 5, team: "Lens", played: 28, won: 13, drawn: 6, lost: 9, gf: 42, ga: 40, pts: 45, form: ["L","W","W","D","W"] },
      { pos: 6, team: "Nice", played: 28, won: 12, drawn: 7, lost: 9, gf: 40, ga: 37, pts: 43, form: ["W","L","D","W","D"] },
    ],
    topScorers: [
      { name: "M. Dembélé", team: "PSG", goals: 22, assists: 10, flag: "🇫🇷" },
      { name: "B. Barcola", team: "PSG", goals: 18, assists: 8, flag: "🇫🇷" },
      { name: "L. Mikautadze", team: "Lyon", goals: 13, assists: 5, flag: "🇬🇪" },
      { name: "A. Laborde", team: "Marseille", goals: 12, assists: 9, flag: "🇫🇷" },
      { name: "W. Ben Yedder", team: "Monaco", goals: 11, assists: 4, flag: "🇫🇷" },
    ],
    goalsPerMonth: [
      { month: "Août", goals: 42 }, { month: "Sep", goals: 55 },
      { month: "Oct", goals: 61 }, { month: "Nov", goals: 58 },
      { month: "Dec", goals: 70 }, { month: "Jan", goals: 48 },
      { month: "Fév", goals: 63 }, { month: "Mar", goals: 67 },
    ],
  },
  "Premier League": {
    color: "#9B59B6",
    standings: [
      { pos: 1, team: "Man City", played: 28, won: 20, drawn: 5, lost: 3, gf: 65, ga: 28, pts: 65, form: ["W","W","D","W","W"] },
      { pos: 2, team: "Arsenal", played: 28, won: 19, drawn: 5, lost: 4, gf: 62, ga: 27, pts: 62, form: ["W","D","W","W","L"] },
      { pos: 3, team: "Liverpool", played: 28, won: 18, drawn: 6, lost: 4, gf: 70, ga: 35, pts: 60, form: ["W","W","W","D","W"] },
      { pos: 4, team: "Chelsea", played: 28, won: 15, drawn: 6, lost: 7, gf: 55, ga: 42, pts: 51, form: ["L","W","D","W","W"] },
      { pos: 5, team: "Tottenham", played: 28, won: 13, drawn: 5, lost: 10, gf: 50, ga: 48, pts: 44, form: ["W","L","W","L","D"] },
      { pos: 6, team: "Newcastle", played: 28, won: 12, drawn: 7, lost: 9, gf: 46, ga: 40, pts: 43, form: ["D","W","D","L","W"] },
    ],
    topScorers: [
      { name: "E. Haaland", team: "Man City", goals: 25, assists: 7, flag: "🇳🇴" },
      { name: "M. Salah", team: "Liverpool", goals: 21, assists: 14, flag: "🇪🇬" },
      { name: "B. Saka", team: "Arsenal", goals: 19, assists: 12, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "C. Palmer", team: "Chelsea", goals: 16, assists: 11, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "A. Isak", team: "Newcastle", goals: 15, assists: 4, flag: "🇸🇪" },
    ],
    goalsPerMonth: [
      { month: "Août", goals: 55 }, { month: "Sep", goals: 70 },
      { month: "Oct", goals: 75 }, { month: "Nov", goals: 68 },
      { month: "Dec", goals: 88 }, { month: "Jan", goals: 60 },
      { month: "Fév", goals: 72 }, { month: "Mar", goals: 78 },
    ],
  },
  "La Liga": {
    color: "#FF6B35",
    standings: [
      { pos: 1, team: "Real Madrid", played: 28, won: 22, drawn: 3, lost: 3, gf: 72, ga: 25, pts: 69, form: ["W","W","W","W","D"] },
      { pos: 2, team: "Barcelone", played: 28, won: 20, drawn: 4, lost: 4, gf: 69, ga: 30, pts: 64, form: ["W","W","L","W","W"] },
      { pos: 3, team: "Atletico", played: 28, won: 17, drawn: 5, lost: 6, gf: 52, ga: 33, pts: 56, form: ["D","W","W","L","W"] },
      { pos: 4, team: "Athletic", played: 28, won: 14, drawn: 6, lost: 8, gf: 44, ga: 38, pts: 48, form: ["W","D","D","W","L"] },
      { pos: 5, team: "Villarreal", played: 28, won: 13, drawn: 5, lost: 10, gf: 47, ga: 44, pts: 44, form: ["L","W","W","D","W"] },
      { pos: 6, team: "Betis", played: 28, won: 12, drawn: 6, lost: 10, gf: 43, ga: 45, pts: 42, form: ["W","L","D","W","L"] },
    ],
    topScorers: [
      { name: "K. Mbappé", team: "Real Madrid", goals: 27, assists: 9, flag: "🇫🇷" },
      { name: "R. Lewandowski", team: "Barcelone", goals: 20, assists: 6, flag: "🇵🇱" },
      { name: "A. Griezmann", team: "Atletico", goals: 16, assists: 10, flag: "🇫🇷" },
      { name: "G. Simeone", team: "Atletico", goals: 14, assists: 3, flag: "🇦🇷" },
      { name: "A. Danjuma", team: "Villarreal", goals: 12, assists: 5, flag: "🇳🇱" },
    ],
    goalsPerMonth: [
      { month: "Août", goals: 48 }, { month: "Sep", goals: 62 },
      { month: "Oct", goals: 68 }, { month: "Nov", goals: 65 },
      { month: "Dec", goals: 80 }, { month: "Jan", goals: 55 },
      { month: "Fév", goals: 70 }, { month: "Mar", goals: 74 },
    ],
  },
  "Bundesliga": {
    color: "#E74C3C",
    standings: [
      { pos: 1, team: "Bayern", played: 28, won: 21, drawn: 3, lost: 4, gf: 78, ga: 30, pts: 66, form: ["W","W","D","W","W"] },
      { pos: 2, team: "Leverkusen", played: 28, won: 20, drawn: 4, lost: 4, gf: 70, ga: 28, pts: 64, form: ["W","D","W","W","L"] },
      { pos: 3, team: "Dortmund", played: 28, won: 17, drawn: 4, lost: 7, gf: 58, ga: 38, pts: 55, form: ["L","W","W","D","W"] },
      { pos: 4, team: "Leipzig", played: 28, won: 15, drawn: 5, lost: 8, gf: 52, ga: 40, pts: 50, form: ["W","W","L","D","W"] },
      { pos: 5, team: "Frankfurt", played: 28, won: 13, drawn: 6, lost: 9, gf: 48, ga: 44, pts: 45, form: ["D","W","D","L","W"] },
      { pos: 6, team: "Stuttgart", played: 28, won: 12, drawn: 5, lost: 11, gf: 44, ga: 46, pts: 41, form: ["W","L","W","L","D"] },
    ],
    topScorers: [
      { name: "H. Kane", team: "Bayern", goals: 28, assists: 8, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      { name: "F. Wirtz", team: "Leverkusen", goals: 18, assists: 15, flag: "🇩🇪" },
      { name: "L. Openda", team: "Leipzig", goals: 17, assists: 5, flag: "🇧🇪" },
      { name: "S. Nmecha", team: "Dortmund", goals: 15, assists: 7, flag: "🇩🇪" },
      { name: "O. Marmoush", team: "Frankfurt", goals: 14, assists: 10, flag: "🇪🇬" },
    ],
    goalsPerMonth: [
      { month: "Août", goals: 50 }, { month: "Sep", goals: 65 },
      { month: "Oct", goals: 72 }, { month: "Nov", goals: 70 },
      { month: "Dec", goals: 85 }, { month: "Jan", goals: 58 },
      { month: "Fév", goals: 68 }, { month: "Mar", goals: 75 },
    ],
  },
}

export const PLAYER_STATS = {
  "K. Mbappé":       { pace: 97, shooting: 94, passing: 82, dribbling: 92, defending: 36, physical: 78 },
  "E. Haaland":      { pace: 89, shooting: 97, passing: 65, dribbling: 80, defending: 45, physical: 88 },
  "H. Kane":         { pace: 70, shooting: 95, passing: 83, dribbling: 79, defending: 47, physical: 83 },
  "M. Salah":        { pace: 91, shooting: 90, passing: 80, dribbling: 89, defending: 44, physical: 75 },
  "F. Wirtz":        { pace: 78, shooting: 82, passing: 88, dribbling: 90, defending: 52, physical: 70 },
}