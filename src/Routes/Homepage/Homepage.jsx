import Searchbar from '../../components/Searchbar/Searchbar';
import './Homepage.scss'

function Homepage () {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">
            find Real Estate & Get Your Dream place
            </h1>
            <p>
                lorem ipsum dolar sit amet consectetur adipisicing elit.Eos
                explicabo suscipit cum eius, lure est nulla animi consequetur
                facilis id pariatur fugit quos laudantum temporibus dolar ea
                repellat provident impedit;
            </p>
            <Searchbar />
            <div className="boxes">
                 <div className="box">
                  <h1>16+</h1>
                  <h2>years of experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>1200</h1>
                  <h2>properly Realy</h2>
                </div>
            </div>
        </div>
    </div>
        <div className="imgContainer">
            <img src="/bg (6).png" alt="" />
        </div>
    </div>
  );
}

export default Homepage;