import React from 'react';
import { Link } from "react-router-dom";
import './missioncard.css';

export const Missioncard = ({ props }) => {
    return (<>
        <div onClick={(e) => {
            localStorage.setItem('detail', JSON.stringify(props));
        }} className="card p-2" style={{ borderRadius: "15px 15px 15px 15px" }}>
            <img className="card-img-top mx-auto" style={{ width: '250p', display: 'block', }} src={props.links.mission_patch_small} alt={props.mission_name} />
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
                <Link className="card-link" to="/about" >Show more</Link>
            </div>
        </div>
    </>);
}