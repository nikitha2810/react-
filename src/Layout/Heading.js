import { Outlet } from "react-router"
import './Home.css'
import {Link} from 'react-router-dom'

const Heading = () => {
  return (
    <>
     <div className="navbar">
        <h1><span>React</span> Projects</h1>
        <Link className="home" to='/'>Home</Link>
     </div>
      <main>
        <Outlet/>
      </main>
      <div className="footer">
      <h1 className="copyright">Copyright © 2023 <Link to="/">Nikitha Sampathirao </Link>All rights reserved</h1>
      </div>
    </>
  )
}

export default Heading
