import TiltedRectangle from '../components/TiltedRectangle'
import { Link } from "react-router-dom";

function Home(props) {
  let selectedLink = props.link;
  let setSelectedLink = props.func;
    return (
      <>
        <div className="home-container">
          <TiltedRectangle>
            <h1 className="home-title">enhance <br />every <br />word.</h1>
            <Link to="/chat" class="started-button rounded-pill" onClick={() => setSelectedLink('chat')}>Get Started</Link>
          </TiltedRectangle>
        </div>
      </>
    );
}

export default Home;