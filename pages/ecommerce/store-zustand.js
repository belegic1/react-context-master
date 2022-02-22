import create from "zustand"

const useStore = create(set => ({
    user: "",
    cartcount: 0,
    login: () => set(state => ({ user: "Dragan" })),
    logout: () => set(state => ({ user: "" })),
    addToCart: () => set(state =>({cartcount: state.cartcount + 1}))
}))

export const useLogin = () => useStore(state => state.login)
export const useLogout = () => useStore(state => state.logout)
export const useAddToCart = () => useStore(state => state.addToCart)
export const useCartCount = () => useStore(state => state.cartcount)
export const useUser  = ()=>  useStore(state => state.user)