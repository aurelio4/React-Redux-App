import TftApi from 'twisted'
const api = new TftApi()
/*
  const apiKey = 'RGAPI-039559bb-50cf-4c5c-bf67-d4b96f3f03be'
  const url = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/`
*/

export async function matchListTft(user) {
  const {
    response: {
      puuid
    }
  } = api.Summoner.getByName(user, TftApi.Constants.Regions.AMERICA_NORTH)
  return api.Match.list(puuid, TftApi.Constants.TftRegions.AMERICAS)
}