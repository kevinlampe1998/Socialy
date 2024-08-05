import { useContext } from "react";
import { SocialyContext } from "../App";

import CameraIcon from "../assets/svg/camera.svg";
import CaretDownIcon from "../assets/svg/caret-down.svg";
import GridIcon from "../assets/svg/grid.svg";
import ListIcon from "../assets/svg/list.svg";
import LinkIcon from "../assets/svg/link.svg";

const Home: React.FC = () => {

    const { picPaths, dispatch } = useContext(SocialyContext); 

    return (
        <main className="home">
            <section>
                <img src={CameraIcon} alt="CameraIcon"  className="camera-icon"/>
                <div>
                    <div className="connects">
                        <div>
                            <h2>5230</h2>
                            <p>posts</p>
                        </div>
                        <div>
                            <h2>250m</h2>
                            <p>followers</p>
                        </div>
                        <div>
                            <h2>7.5k</h2>
                            <p>following</p>
                        </div>
                    </div>
                    <div className="follow-bar">
                        <h3>follower</h3>
                        <div>
                            <img src={CaretDownIcon} alt="CaretDownIcon"  className="caret-down-icon"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="user-description">
                <p>Grow your Socialy with us</p>
                <p>Best App to stay with your Family and Friends in Connection</p>
                <a href="#">Socialy.com</a>
            </section>
            <section className="home-menu">
                <img src={GridIcon} alt="GridIcon"  className="caret-down-icon"/>
                <img src={ListIcon} alt="ListIcon"  className="caret-down-icon"/>
                <img src={LinkIcon} alt="LinkIcon"  className="caret-down-icon"/>
            </section>
            <section className="user-images">
                {

                    picPaths[0] ?

                        picPaths.map((path: string, index: number) => (
                            <img src={path} key={index} />
                        ))

                        : <h1>Error loading</h1>

                }
            </section>
        </main>
    );
}

export default Home;
