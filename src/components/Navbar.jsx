import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (

        

        <header className="header mt-3 ">
            <NavLink to="/" className="w-24 h-7 rounded-full bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text font-bold">
                    VAULT 3D
                </p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500 font-semibold': 'text-black font-semibold'}>
                About 
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500 font-semibold': 'text-black font-semibold'}>
                Projects
                </NavLink>
                
            </nav>

        </header>
      
    )
}

export default Navbar