import React from "react";
import Register from "../Components/register";

const App = () => {

    return (
        <div className="relative text-center">
            <h1 className="font-bold text-center text-2xl">
                Student Management System
            </h1>
            <div className="absolute right-0 left-0 mx-auto w-1/2 text-center">
                <Register />
            </div>
        </div>
    )
}

export default App;
