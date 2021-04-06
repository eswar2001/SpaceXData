import React, { useEffect, useState } from 'react';
import './App.css';
import { Missioncard } from './view/missioncard'

function App() {
  return <><Home /></>
}

export default App;


export const Home = () => {
  var ischecked = true;
  const [data, setdata] = useState([]);
  const [limit, setLimit] = useState(100);
  const [launchYear, setlaunchYear] = useState(0);
  const [sLaunch, setsLaunch] = useState(false);
  const [Sland, setSland] = useState(null);
  const [URL, setUrl] = useState(`https://api.spacexdata.com/v3/launches?limit=${limit}`);
  const fetchData = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        setdata(json);
        console.log(json);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])
  useEffect(() => {
    setUrl(`https://api.spacexdata.com/v3/launches?limit=${limit}&launch_success=${sLaunch}`);
    fetchData();
  }, [sLaunch])

  if (data.length !== 0)
    return (
      <>
        <form>
          <div className="form-check">
            <input defaultChecked={sLaunch} onChange={(e) => {
              setsLaunch(!sLaunch);
            }} className="form-check-input" type="checkbox" value={sLaunch} />
            <label className="form-check-label" >
              launch_success
            </label>
          </div>
        </form>
        <div className="container">
          <div className="card-columns">
            {data.map((i) => {
              // if (launchYear != 0 && i.launch_year == launchYear) {
              //   return (<Missioncard key={i.flight_number} props={i} />);
              // }
              // else if (sLaunch != null && sLaunch == i.launch_success) {
              //   return (<Missioncard key={i.flight_number} props={i} />);
              // }
              // else if (sLaunch != null && sLaunch == i.rocket.first_stage.cores[0].land_success) {
              //   return (<Missioncard key={i.flight_number} props={i} />);
              // }
              return (<Missioncard key={i.flight_number} props={i} />);
            })}
          </div>
        </div >
      </>
    );
  else {
    return <>Loading</>;
  }
}