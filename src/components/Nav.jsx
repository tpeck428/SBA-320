import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
             <Link to='/'>
                <div>Welcome</div>
            </Link>
            <Link to="/categories">
                <div>Categories</div>
            </Link>
            <Link to="/random">
                <div>Random Recipe</div>
            </Link>
        </div>
    )
}

export default Nav;