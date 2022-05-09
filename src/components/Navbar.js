import { CartIcon, Testing } from '../icons'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const amount = useSelector((store) => store.cart.amount)
    return (
        <nav>
            {/* <Testing /> */}
            <div class='nav-center'>
                <h3>redux toolkit</h3>
                <div class='nav-container'>
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
