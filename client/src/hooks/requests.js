const API_URL = 'http://localhost:8000';

// Load planets and return as JSON:
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`); // TODO: Once API is ready. It's Done.
  return await response.json();
  
}

// Load launches, sort by flight number, and return as JSON:
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);// TODO: Once API is ready: It's Done.
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });//sort() function is used to get ascending order of launched flight numbers.  
}

// 'Submit' given launch data to launch system:
async function httpSubmitLaunch(launch){
  try{
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    })
  // TODO: Once API is ready. It's Done.
  
  }catch(err){
    return {
      ok: false,
    };
  };
      
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try{
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    })
    
  } catch(err){
    console.log(error);
    return {
      ok: false,
    }
  }
  // TODO: Once API is ready. It's done.
  
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};