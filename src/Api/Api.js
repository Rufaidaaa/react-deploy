const API_KEY= "jDFBlI10gKMuai22bQ7BI0n6gP23"

//get all tha matches

export const getMatches= () =>{

    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("error " ,error))
}
export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

