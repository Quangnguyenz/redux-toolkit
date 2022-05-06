import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
    console.log(useSelector(() => { }));
    return (
        <nav>
            <div class='nav-center'>
                <h3>redux toolkit</h3>
                <div class='nav-container'>
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">0</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}