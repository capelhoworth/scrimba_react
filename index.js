import React from "react"
import ReactDOM from "react-dom/client"


const navbar = (
    <nav>
        <h1>Website Brand Name</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>  
)

// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )

ReactDOM.createRoot(document.getElementById("root")).render(navbar)

