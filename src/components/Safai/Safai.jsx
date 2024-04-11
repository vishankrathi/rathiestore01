import './Safai.scss'

function  Safai  ()  {
  return (
    <div className="Safai">
        <h1>Search result for<b>London</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city" >location</label>
                <input type="text" id="city" name="city" placeholder="City location"/>
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor="type" >Type</label>
            <select name="type" id="type">
                <option value="">any</option>
                <option value="buy">buy</option>
                <option value="rent">rent</option>
            </select>
            </div>
            <div className="item">
                <label htmlFor="property" >property</label>
                <select name="property" id="property">
                <option value="">any</option>
                <option value="apartment">apartment</option>
                <option value="house">house</option>
                <option value="condo">condo</option>
                <option value="land">land</option>
            </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice" >Min Price</label>
                <input type="number" id="minPrice" name="minPrice" placeholder="any"/>
            </div>
            <div className="item">
                <label htmlFor="maxPrice" >Max price</label>
                <input type="text" id="maxPrice" name="maxPrice" placeholder="any"/>
            </div>
            <div className="item">
                <label htmlFor="city" >bedroom</label>
                <input type="text" id="bedroom" name="bedroom" placeholder="any"/>
            </div>
            <button>
            <img src="/search.png" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Safai;