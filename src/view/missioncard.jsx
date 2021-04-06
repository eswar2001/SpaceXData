import React from 'react';
import './missioncard.css';

// crew: null
// details: "Engine failure at 33 seconds and loss of vehicle"
// flight_number: 1
// is_tentative: false
// launch_date_local: "2006-03-25T10:30:00+12:00"
// launch_date_unix: 1143239400
// launch_date_utc: "2006-03-24T22:30:00.000Z"
// launch_failure_details: {time: 33, altitude: null, reason: "merlin engine failure"}
// launch_site: {site_id: "kwajalein_atoll", site_name: "Kwajalein Atoll", site_name_long: "Kwajalein Atoll Omelek Island"}
// launch_success: false
// launch_window: 0
// launch_year: "2006"
// links: {mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png", mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", reddit_campaign: null, reddit_launch: null, reddit_recovery: null, …}
// mission_id: []
// mission_name: "FalconSat"
// rocket: {rocket_id: "falcon1", rocket_name: "Falcon 1", rocket_type: "Merlin A", first_stage: {…}, second_stage: {…}, …}
// ships: []
// static_fire_date_unix: 1142553600
// static_fire_date_utc: "2006-03-17T00:00:00.000Z"
// tbd: false
// telemetry: {flight_club: null}
// tentative_max_precision: "hour"
// timeline: {webcast_liftoff: 54}
// upcoming: false

export const Missioncard = ({ props }) => {
    return (<>
        <div className="card p-2" style={{}}>
            <img className="card-img-top mx-auto" style={{ width: '250p', display: 'block' }} src={props.links.mission_patch_small} alt={props.mission_name} />
            <div className="card-body">
                <h5 className="card-title" style={{ color: '' }}>{props.mission_name}</h5>
                <p className="max-lines"><small>{props.details}</small></p>
                <span>
                    <em>Flight number  </em>{props.flight_number}
                    <br /><em>launch site  </em>{props.launch_site.site_name}
                    <br /><em>Rocket   </em>{props.rocket.rocket_id}
                    <br /><em>Launch year  </em>{props.launch_year}
                    <br /><em>Launch success  </em>{(props.launch_success) ? "True" : "False"}
                </span><br /><br />
                <a target="_Blank" rel="noreferrer" href={props.links.article_link} className="card-link">Article</a>
                <a target="_Blank" rel="noreferrer" href={props.links.wikipedia} className="card-link">Wikipedia</a>
            </div>
        </div>
    </>);
}