import { createSlice } from '@reduxjs/toolkit';
import popular_product_1 from '../../global-assets/images/popular_product_1.png';
import popular_product_4 from '../../global-assets/images/popular_product_4.png';
import popular_product_6 from '../../global-assets/images/popular_product_6.png';
import popular_product_7 from '../../global-assets/images/popular_product_7.png';
import popular_product_8 from '../../global-assets/images/popular_product_8.png';
import shoes from '../../global-assets/images/shoes.png';
import tshirt from '../../global-assets/images/tshirt.png';
import women_jean from '../../global-assets/images/women\'s_jean.jpg';

const initialState = {
    products: [
        {
            name: 'Printed T-Shirt',
            img: popular_product_1,
            stock: 106,
            status: 'active',
            price: 799
        },
        {
            name: "Women's flare dress",
            img: popular_product_4,
            stock: 156,
            status: 'active',
            price: 1200
        },
        {
            name: "Unisex cap grey",
            img: popular_product_6,
            stock: 146,
            status: 'active',
            price: 579
        },
        {
            name: "Winter jacket",
            img: popular_product_7,
            stock: 50,
            status: 'active',
            price: 2499
        },
        {
            name: "Women's jacket",
            img: popular_product_8,
            stock: 123,
            status: 'active',
            price: 2799
        },
        {
            name: "Men sneakers",
            img: shoes,
            stock: 329,
            status: 'active',
            price: 1299
        },
        {
            name: "Unisex Tshirt grey",
            img: tshirt,
            stock: 233,
            status: 'active',
            price: 899
        },
        {
            name: "Women's jean blue",
            img: women_jean,
            stock: 455,
            status: 'active',
            price: 1599
        }
    ].map((product, idx) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let total = 0;
        const sales = months.map(month => {
            const sale = Math.floor(Math.random() * 100) * product.price;
            total += sale;
            return {
                x: month,
                y: sale
            }
        })

        return {
            ...product,
            salesdata: sales,
            salestotal: total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
            instock: product.stock ? 'Yes' : 'No',
            id: idx + 1
        }
    })
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export default productsSlice.reducer
export const { setProducts } = productsSlice.actions