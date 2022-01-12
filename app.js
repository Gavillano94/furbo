const teams = [
  {name: 'Burgos C. F.', played: false},
  {name: 'C. D. Mirandés', played: false},
  {name: 'R. Valladolid C. F.', played: false},
  {name: 'S. D. Ponferradina', played: false},
  {name: 'A. D. Alcorcón', played: false},
  {name: 'C. F. Fuenlabrada', played: false},
  {name: 'C. D. Leganés', played: false},
  {name: 'Real Sociedad "B"', played: false},
  {name: 'S. D. Amorebieta', played: false},
  {name: 'S. D. Eibar', played: false},
  {name: 'U. D. Almería', played: false},
  {name: 'Málaga C. F.', played: false},
  {name: 'Real Zaragoza', played: false},
  {name: 'S. D. Huesca', played: false},
  {name: 'Real Oviedo', played: false},
  {name: 'Real Sporting de Gijón', played: false},
  {name: 'U. D. Las Palmas', played: false},
  {name: 'C. D.Tenerife', played: false},
  {name: 'Girona F. C.', played: false},
  {name: 'C. D. Lugo', played: false},
  {name: 'U. D. Ibiza', played: false},
  {name: 'F. C. Cartagena', played: false}
]

const generateMatch = function() {
  const nonPlayedTeams = _.shuffle(teams.filter(team => !team.played));
  if (nonPlayedTeams.length > 0) {
    const teamA = nonPlayedTeams[0];
    const teamB = nonPlayedTeams[1];

    teamA.played = true;
    teamB.played = true;

    teamA.goal = Math.floor(Math.random() * 10);
    teamB.goal = Math.floor(Math.random() * 10);

    const divNameTeamA = document.querySelector('.team-a');
    divNameTeamA.textContent = teamA.name;

    const divNameTeamB = document.querySelector('.team-b');
    divNameTeamB.textContent = teamB.name;

    const divGoalsTeamA = document.querySelector('.punctuation-team-a');
    divGoalsTeamA.textContent = teamA.goal;

    const divGoalsTeamB = document.querySelector('.punctuation-team-b');
    divGoalsTeamB.textContent = teamB.goal;

  } else {
    return window.alert('Fin de la jornada');
  }

}

const button = document.querySelector('.teams-button');
button.addEventListener('click', generateMatch);

//¡Los mejores!

