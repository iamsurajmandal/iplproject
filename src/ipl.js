const csvToJson = require('./csvtojson.js');
var dataOfMatches = csvToJson('../data/matches.csv');
var dataOfDeliveries = csvToJson('../data/deliveries.csv');
const x=dataOfMatches.reduce(function(summary,matchDetails){
if(!summary.hasOwnProperty(matchDetails.team1)){
  summary[matchDetails.team2]=1;
  }
  else{
      summary[matchDetails.team2]++;
  }
  if(!summary.hasOwnProperty(matchDetails.team2)){
      summary[matchDetails.team2]=1;
  }
  else{
      summary[matchDetails.team2]++;
  }
  return summary;


},{});






const y= dataOfMatches.reduce(function(acc,cur){
if(acc.hasOwnProperty(cur.season)){
  acc[cur.season]++;
}
else{
    acc[cur.season]=1;
}
return acc;


 },{})

console.log(y);


const getNoOfMatchesPlayed = () => {


    //write your code here
  }
  const getNoOfMatchesWonPerTeamPerYear = () => {


    //write your code here
  }



















  const getExtraRunsPerTeamForYear = () => {
   //write your code here
  }
  const getEconomicalBowlersForYear = () => {
   //write your code here
  }
  
  module.exports.getNoOfMatchesPlayed = getNoOfMatchesPlayed
  module.exports.getNoOfMatchesWonPerTeamPerYear = getNoOfMatchesWonPerTeamPerYear
  module.exports.getExtraRunsPerTeamForYear = getExtraRunsPerTeamForYear
  module.exports.getEconomicalBowlersForYear = getEconomicalBowlersForYear
  