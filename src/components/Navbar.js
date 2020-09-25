import React from "react";

export default function Navbar() {
    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Weather-app</h1>
            </div>
            <div className="col-md-6">
                <form className="region">
                    <input className="regioninput" placeholder="Enter Location" onChange={(e) => {
                        console.log(e.target.value) }} />
                </form>
            </div>
        </div>
    )
}