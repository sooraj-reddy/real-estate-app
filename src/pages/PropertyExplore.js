import '../App.css';
import Navbar from '../components/Navbar.js'
import Nav from '../components/Nav';
import Nav1 from '../components/Nav1';
import MostPopular from '../components/MostPopular.js';
import ExplorebyCity from '../components/ExplorebyCity.js';
import ExplorebyType from '../components/ExplorebyType.js';

function PropertyExplore() {
  return (
    <div>
      <Nav/>
      {/* <Navbar/> */}
      <MostPopular/>
      <ExplorebyCity/>
      <ExplorebyType/>
    </div>
  );
}

export default PropertyExplore;
