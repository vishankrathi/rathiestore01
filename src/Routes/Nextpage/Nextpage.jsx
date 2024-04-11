import { listdata } from '../../Lib/dummydata';
import './Nextpage.scss';
import Safai from '../../components/Safai/Safai';
import Car from '../../components/Car/Car';
import Map from '../../components/Map/Map';
function  Nextpage () {
    const data=listdata
  return (
    <div className='Nextpage'>
        <div className="listContainer">
            <div className="wrapper">
               <Safai/>
               {data.map(item=>(
                <Car key={item.id} item={item}/>
               ))}
            </div>
        </div>
        <div className="mapContainer">
          <Map items={data}/>
        </div>
    </div>
  )
}

export default Nextpage;
