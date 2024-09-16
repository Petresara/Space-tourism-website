import './Technology.css';
import Navbar from "../Navbar/Nav";
import data from '../../Data/data.json';
import { useState } from 'react';
import useWindowSize from '../../Hooks/WindowSize';

function Technology() {
    const size = useWindowSize();
    const width = size.width;
    const [index, setIndex] = useState(0);

    const handleButtonClick = (idx) => {
        setIndex(idx);
    };

    return (
        <div className="Technology">
            <section className="technology-top">
                <Navbar active={3} />
            </section>
            <h1 className="technology-title"><span>03</span> SPACE LAUNCH 101</h1>
            <section className="technology-bottom">
                <div className="technology-left">
                    <div className="technology-container">
                        <div className="technology-buttons">
                            {data.technology.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`technology-button${index === idx ? ' active-technology' : ''}`}
                                    onClick={() => handleButtonClick(idx)}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                        <div className="technology-description">
                            <div className="technology-terminology">
                                THE TERMINOLOGY...
                            </div>
                            <h1 className="technology-name">
                                {data.technology[index].name}
                            </h1>
                            <div className="technology-desc">
                                {data.technology[index].description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technology-right">
                    <img
                        className="technology-image"
                        src={width > 1225 ? data.technology[index].images.portrait : data.technology[index].images.landscape}
                        alt="technology"
                    />
                </div>
            </section>
        </div>
    );
}
export default Technology;