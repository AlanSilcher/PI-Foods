import { Link } from "react-router-dom"


const NavBar = () => {
    return (
       <div>
        <Link to='/form'>
            <button type="button">Create recipe</button>
            </Link>
       </div>
    )
}

export default NavBar