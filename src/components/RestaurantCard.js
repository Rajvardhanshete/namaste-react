import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restData} = props;    
    return (
        <div className="restaurant-card" style={{backgroundColor:"#ccccccff"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+restData.info.cloudinaryImageId} ></img>
            <h3>{restData.info.name}</h3>
            <h4>{restData.info.cuisines.join(", ")}</h4>
            <h4>Price for Two : {restData.info.costForTwo}</h4>
            <h4>Ratings : {restData.info.avgRating}</h4>
        </div>
    )
    
}

export default RestaurantCard;