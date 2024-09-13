import React from "react";

function Header() {
    const body = document.querySelector('body')
    function chageMode() {
        body.classList.toggle('dark')
    }    

    return (
        <header>
            <div className="header-content flex-container container">
                <div className="logo">
                    <h1>Where in the world?</h1>
                </div>
                <div 
                    className="dm-btn flex-container"
                    onClick={chageMode}    
                >
                    <i className="fa-regular fa-moon"></i>
                    <p>Dark mode</p>
                </div>
            </div>
        </header>
    )
}

export { Header };