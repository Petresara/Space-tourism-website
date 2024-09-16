import './Destination.css';
import Navbar from '../Navbar/Nav';
import data from '../../Data/data.json';
import { useState } from 'react';

function Destination() {
    const [destination, setDestination] = useState(0);

    const handleDestinationChange = (index) => {
        setDestination(index);
    };

    return (
        <div className="Destination">
            <section className="top">
                <Navbar active={1} />
            </section>

            <section className="bottom">

                <div className="left">
                    <h1 className="title">
                        <span>01</span> PICK YOUR DESTINATION
                    </h1>
                    <img
                        className="destination-image"
                        src={data.destinations[destination].images.webp}
                        alt={data.destinations[destination].name}
                    />
                </div>


                <div className="right">

                    <div className="destination-options">
                        {data.destinations.map((dest, index) => (
                            <button
                                key={index}
                                className={`destination-option${destination === index ? " active-destination" : ""}`}
                                onClick={() => handleDestinationChange(index)}
                            >
                                {dest.name.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="destination-name">
                        <h1>{data.destinations[destination].name}</h1>
                    </div>

                    <div className="destination-desc">
                        <p>{data.destinations[destination].description}</p>
                    </div>

                    <hr />

                    <div className="destination-details">
                        <div className="details-column">
                            <div className="details-heading">Avg Distance</div>
                            <div className="details-detail">
                                {data.destinations[destination].distance}
                            </div>
                        </div>
                        <div className="details-column">
                            <div className="details-heading">Est Travel Time</div>
                            <div className="details-detail">
                                {data.destinations[destination].travel}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Destination;
