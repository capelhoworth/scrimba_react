// JSX = "a flavor of JavaScript that looks like HTML"

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div> 
// )

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

ReactDOM.render(
    navbar,
    document.getElementById("root")
)

