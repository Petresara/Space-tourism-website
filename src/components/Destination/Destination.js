import './Destination.css';
import Navbar from '../Navbar/Nav';
import data from '../../Data/data.json';
import { useState } from 'react';

function Destination() {
    const [destination, setDestination] = useState(0);
    const { name, description, images, distance, travel } = data.destinations[destination];
    const options = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

    return (
        <div className="Destination">
            <section className="destination-top">
                <Navbar active={1} />
            </section>
            <section className="destination-bottom">
                <div className="destination-left">
                    <h1 className="destination-title">
                        <span>01</span> PICK YOUR DESTINATION
                    </h1>
                    <img
                        className="destination-image"
                        src={images.webp}
                        alt={name}
                    />
                </div>
                <div className="destination-right">
                    <div className="destination-options">
                        {options.map((option, index) => (
                            <button
                                key={index}
                                className={`destination-option ${destination === index ? 'active-destination' : ''}`}
                                onClick={() => setDestination(index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="destination-name">
                        <h1>{name}</h1>
                    </div>
                    <div className="destination-desc">
                        <p>{description}</p>
                    </div>
                    <hr />
                    <div className="destination-details">
                        <div className="details-column">
                            <div className="details-heading">Avg Distance</div>
                            <div className="details-detail">{distance}</div>
                        </div>
                        <div className="details-column">
                            <div className="details-heading">Est Travel Time</div>
                            <div className="details-detail">{travel}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Destination;
