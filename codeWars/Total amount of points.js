function points(games) {
  let points = 0
  for(let i = 0; i < games.length; i++){
      let leftTeam =  parseInt(games[i].substring(0,1))
      let rightTeam = parseInt(games[i].substring(2))
      if(leftTeam > rightTeam) points = points + 3
      if(leftTeam === rightTeam) points += 1
  }
  return points
}
