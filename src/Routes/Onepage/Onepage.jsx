import "./Onepage.scss"
import Slider from "../../components/Slider/Slider"
import { SinglePostData } from "../../Lib/dummydata";
import Map from "../../components/Map/Map"
import { userData } from "../../Lib/dummydata";
function Onepage(){
    return(
        <div className="Onepage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={SinglePostData.images}/>
                    <div className="info">
                    <div className="top">
                    <div className="post">
                        <h1>{SinglePostData.title}</h1>
                        <div className="address">
                            <img src="/pin.png" alt=""/>
                            <span>{SinglePostData.address}</span>
                        </div>
                        <div className="price">${SinglePostData.price}</div>
                    </div>
                    <div className="user">
                        <img src={userData.img} alt=""/>
                        <span>{userData.name}</span>
                    </div>
                    </div>
                    <div className="bottom">
                        {SinglePostData.description}
                    </div>
                </div>
            </div>
            </div>
            <div className="features">
            <div className="wrapper">
               <p className="title">general</p>
               <div className="listVertical">
                <div className="feature">
                    <img src="/utility.png" alt=""/>
                    <div className="featureText">
                        <span>utilittes</span>
                        <p>renter is respnsibilies</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/pet.png" alt=""/>
                    <div className="featureText">
                        <span>pet policy</span>
                        <p>pets allowed</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/fee.png" alt=""/>
                    <div className="featureText">
                        <span>property fees</span>
                        <p>must 3x the rent in total household income</p>
                    </div>
                </div>
               </div>
               <p className="title">sizes</p>
               <div className="sizes">
                <div className="size">
                    <img src="/size.png" alt=""/>
                    <span >80sqft</span>
                </div>
                <div className="size">
                    <img src="/bed.png" alt=""/>
                    <span >2 beds</span>
                </div>
                <div className="size">
                    <img src="/bath.png" alt=""/>
                    <span >i bathroom </span>
                </div>
                </div>
               <p className="title"> Nearbyplace</p>
               <div className="listHorizontal">
                <div className="feature">
                    <img src="/school.png" alt=""/>
                    <div className="featureText">
                        <span>school</span>
                        <p>250m away</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/pet.png" alt=""/>
                    <div className="featureText">
                        <span>bus stop</span>
                        <p>100m away</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/school.png" alt=""/>
                    <div className="featureText">
                        <span>Restaurant</span>
                        <p>200m away</p>
                    </div>
                </div>
               </div>
             
               <p className="title">location</p>
               <div className="mapContainer">
                <Map items={[SinglePostData]}/>
            </div>
            <div className="buttons">
                <button>
                    <img src="/chat.png" alt=""/>
                    send a message
                </button>
                <button>
                    <img src="/save.png" alt=""/>
                    save the place
                </button>
            </div>
        </div>

        </div>
        </div>
    );
    

}
export default Onepage;