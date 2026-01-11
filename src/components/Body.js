import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);

        // Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };



    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="filter">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                            }} />
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())

                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}>Search</button>    
                </div>  
                <button className="filter-btn" onClick={() => {
                    const updatedListOfRestaurants = listOfRestaurants.filter(
                        (res)=> res.info.avgRating > 4.5);
                    setListOfRestaurants(updatedListOfRestaurants)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} restData = {restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;