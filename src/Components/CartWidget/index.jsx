import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <Pill quantity={2}/>
            <Icon className='cart-widget__cart'icon="raphael:cart" />
        </div>
    );
};
export default CartWidget;