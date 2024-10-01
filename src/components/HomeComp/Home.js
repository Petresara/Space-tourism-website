import "./Home.css";
import Navbar from '../Navbar/Nav';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">

            <section className="home-top">
                <Navbar active={0} />
            </section>

            <section className="home-bottom">
                <div className="home-left">
                    <div className="home-text">
                        <p className="home-first">SO, YOU WANT TO TRAVEL TO</p>
                        <h1 className="home-second">SPACE</h1>
                        <p className="home-third">
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                            Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                </div>

                <div className="home-right">
                    <button
                        className="home-explore"
                        onClick={() => navigate("/Destination")}
                    >
                        EXPLORE
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
