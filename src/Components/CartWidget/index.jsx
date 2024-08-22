import { Icon } from '@iconify/react'
const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <span className='pill'>0</span>
            <Icon className='cart-widget__cart'icon="raphael:cart" />
        </div>
    );
};
export default CartWidget;