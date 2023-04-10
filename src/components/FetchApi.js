import React,{useEffect, useState} from 'react'
import './fetchApi.css';

function FetchApi() {
    const [data, setData ] = useState([]);
    const [firstElement, setFirstElement] = useState(null);
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
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(data => setData(data))
          .catch(err => console.log(err))

         // setFirstElement(data[0]);
      }, []);


      const firstE = data[0];
  return (
    <div className="table" >
        {/*<button onClick={logJSONData}>BIG BUTTOBN</button>
        <ul>
          {data.map((list,index) => (
            <li key={index}>{list.title} </li>
            ))}
        </ul>
        
        <p>
          {firstElement && <p>{firstElement.title}</p>}
        </p>

        */}

        <p>
          {firstE.title}
        </p>
    </div>
  )
}

export default FetchApi