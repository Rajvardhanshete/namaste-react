import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard  from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/Signup";


// const RestaurantCard = ({resName, cuisine}) => {
//     console.log(resName, cuisine);
//     return (
//         <div className="restaurant-card" style={{backgroundColor:"#ccccccff"}}>
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/11/12/3eaf467e-cf0d-436a-822d-7ba0bf67dfa9_31eb040c-9a58-47d1-9e19-e9945f0f7e12.jpg" ></img>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.5⭐ 30 mins ₹400 for two</h4>
//         </div>
//     )
    
// }


const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body />
        </div>

    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element:<About />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);












// //React.createElement => ReactElement-JS Object => HTMLElement(render)

// // Object  // JS style
// const heading = React.createElement("h1", {id:"heading"}, "Namaste React🚀");


// const root = ReactDOM.createRoot(document.getElementById("root"));

// //JSX (transpiled(code converted that browswer/js-engine can understand) before it reaches the JS) -by Parcel (give the responsibility to)- Babel(takes JSX convert it that browswer can understand it).
// // JSX => Babel transplit it to React.createElement => ReactElement-JS Object => HTMLElement(render).
// //Single line JSX
// const jsxheading = <h1>Namaste React using JSX</h1>; // this is not html this is jsx it like html syntax  not actual html

// //Single line JSX with paranthesis
// const jsxheading1 = (<h1>Namaste React using JSX</h1>);

// //Multi Line JSX
// const jsxheading2 = (<h1 className="head" tabIndex="5">
//     Namaste React using JSX
//     </h1>);



// // Reat Component
// // Class Based Component - OLD

// // Functional Component - NEW  

// const Tital = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX</h1>
// );

// // Component Compositions
// const HeadingComponent = () => (
//     <div id="container">
//         <Tital />
//         <h1 className="heading"> Namaste React Functional Coponent</h1>
//     </div>
// )

// const WithReturnFunctionalComponent = () => {
//     return <h1>This is with return functional component</h1>
// }

// const WithoutReturnFunctionalComponent = () => true;
// const WithoutReturnFunctionalComponent1 = () => (
//     <h1>This is without return fucntional component</h1>
// );
// const WithoutReturnFunctionalComponent2 = () => (
//         <h1>
//             this is also without return functional component
//         </h1>
// );

// root.render(<WithoutReturnFunctionalComponent2 />);