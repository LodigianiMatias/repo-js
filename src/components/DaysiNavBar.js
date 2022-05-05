import { Link } from "react-router-dom"
import { productosData  } from "../data/productosData"
import CartWidget from "./CartWidget"
import {marcasData} from "../data/marcasData"
const DaysiNavBar = () => {
    return (
        <div className="navbar h-32">
            <div className="flex-1 ">
                <Link to={'/'}>
                <img className="logo-header h-32 top-0 left-0 absolute" src="https://i.ibb.co/bKqJhvR/logo-dietetica.jpg"></img></Link>
            </div>
            <div className="flex-1">
                <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="btn-ghost m-1 font-bold text-white text-3xl underline"><Link to={'/productos'}>Productos</Link></label>
                    <ul tabIndex="0" className="dropdown-content menu text-white p-2 shadow bg-base-100 rounded-box w-52 bg-green-700 border-solid border-2 border-white inline-block outline-cyan-500">
                        {productosData.map(p=> <li key={p.id} className="font-bold"><Link to={`/productos/${p.producto}`}>{p.producto}</Link></li>)}
                    </ul>         
                </div>
            </div>
            <div className="flex-1">
                <div className="dropdown dropdown-hover">
                    
                    <label tabIndex="0" className="btn-ghost m-1 font-bold text-white text-3xl underline">Marcas</label>
                    <ul tabIndex="0" className="dropdown-content menu text-white p-2 shadow bg-base-100 rounded-box w-52 bg-green-700 border-solid border-2 border-white inline-block outline-cyan-500">
                        {marcasData.map(m=> <li key={m.id} className="font-bold "><Link to={`/marcas/${m.marca}`}>{m.marca}</Link></li>)}
                    </ul>         
                </div>
            </div>
            <div className="flex-1">
                <Link to={'/promociones'} className="btn btn-ghost normal-case text-3xl text-white font-bold underline">Promociones</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Buscar" className="input input-bordered bg-white text-center" />
                </div>
            </div>
            <CartWidget />
        </div>
    )
}
export default DaysiNavBar