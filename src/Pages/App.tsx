import React from "react";
import Register from "../Components/register";

const App = () => {

    return (
        <div>
            <h1 className="font-bold text-center text-2xl">
                Student Management System
            </h1>
            <div className="w-1/2">
                <Register />
            </div>
        </div>
    )
}

export default App;
