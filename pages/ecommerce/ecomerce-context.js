import React from 'react'
import { useAddToCart, useLogin, useLogout, useUser, useCartCount, StoreContextProvider } from './store-context'

const Login = () => {

    const login = useLogin()
    const logout = useLogout()
    return <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
}
const CartCountSection = () => {
    const cartCount = useCartCount()
    return <div>
        Cart: {cartCount}
    </div>
}
const AddCartSection = () => {
    const addToCart = useAddToCart()
    return <div>
        <button onClick={addToCart} >Add to cart</button>
    </div>
}

const UserSection = () => {
    const user = useUser()
    return <div>User: {user} </div>
}

const EcomerceContext = () => {
    return (
        <div>
            <Login />
            <UserSection />
            <AddCartSection />
            <CartCountSection />
        </div>
    )
}


const ContextPageWraper = () => {
    return <div>
        <StoreContextProvider>
            <EcomerceContext />
        </StoreContextProvider>
    </div>
}

export default ContextPageWraper