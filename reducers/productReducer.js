import { typeProducts } from "./typeProducts"

const productReducer = (state, action) => {
    switch (action.type) { 
        case typeProducts.add:
            return [...state, {
                id: Date.now(),
                name: action.payload.name,
                price: action.payload.price,
                buy: false
            }]
        
        case typeProducts.remove:
            return state.filter(product => product.id !== action.payload.id)
        
        case typeProducts.buy:
            return state.map(product => product.id === action.payload.id ? {...product, buy: !product.buy} : product)
        
        case typeProducts.load: 
            return action.payload
        
        default:
            return state
    }
 }

export default productReducer
