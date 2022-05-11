import ConoceProductos from "../ConoceProductos"
import ItemListDestacados from "../itemList/ItemListDestacados"
import TableCarousel from "../TableCarousel"

const Home = () => {
  return (
    <div>
        <TableCarousel/>
        <ConoceProductos/>
        <ItemListDestacados/>
    </div>
  )
}
export default Home