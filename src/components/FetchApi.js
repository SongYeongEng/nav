import React,{useEffect, useState} from 'react'


function FetchApi() {
    const [data, setData ] = useState([]);

    {/*} async function logJSONData() {
        const response = await fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      }

    useEffect (() =>{
        logJSONData();
    }, [])*/}

    useEffect(() => {
        fetch("https://gbfs.citibikenyc.com/gbfs/en/station_information.json")
          .then(response => response.json())
          .then(data => setData(data));
      }, []);

  return (
    <div>
        {/*<button onClick={logJSONData}>BIG BUTTOBN</button>
        {JSON.stringify(data)}*/}
        <ul>
            {data.map(user => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default FetchApi