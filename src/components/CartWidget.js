import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartWidget.css';

const CartWidget = () => {

    // Agregar Icono
    return ( 
        <> 
        <div className='cart'><AiOutlineShoppingCart />
        <span>0</span>
        </div>
        </>
     );
}
 
export default CartWidget;