import './Crew.css';
import Navbar from '../Navbar/Nav';
import data from '../../Data/data.json';
import { useState } from 'react';

function Crew() {
    const [index, setIndex] = useState(0);
    const { role, name, bio, images } = data.crew[index];

    const handleButtonClick = (idx) => setIndex(idx);

    return (
        <div className="Crew">
            <section className="crew-top">
                <Navbar active={2} />
            </section>
            <h1 className="crew-title"><span>02</span> MEET YOUR CREW</h1>
            <section className="crew-bottom">
                <div className="crew-left">
                    <div className="crew-details">
                        <div className="crew-role">{role}</div>
                        <div className="crew-name">{name}</div>
                        <div className="crew-desc">{bio}</div>
                        <div className="carousel-buttons">
                            {data.crew.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`carousel-button ${index === idx ? 'active-button' : ''}`}
                                    onClick={() => handleButtonClick(idx)}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="crew-right">
                    <img className="crew-image" src={images.webp} alt={name} />
                    <hr className="crew-image-border" />
                </div>
            </section>
        </div>
    );
}

export default Crew;
