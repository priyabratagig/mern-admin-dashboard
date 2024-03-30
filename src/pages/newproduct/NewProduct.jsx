import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { setProducts } from "../../redux";
import NewproductCSS from "./newproduct.module.css";

const NewProduct = () => {
    const products = useSelector(state => state.products.products)
    const product = {
        name: faker.commerce.productName(),
        stock: faker.number.int(1000),
        status: faker.datatype.boolean() ? 'Yes' : 'No',
        img: ""
    }

    const [active, setActive] = useState(product.status)

    const navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault();

        const imageEle = document.getElementById('image');

        const newProduct = {
            ...product,
            id: products.length + 1,
            name: document.getElementById('name').value,
            img: imageEle.files.length > 0 ? URL.createObjectURL(imageEle.files[0]) : faker.image.urlLoremFlickr({ category: 'dress,fashion' }),
            stock: document.getElementById('stock').value,
            status: active,
            price: faker.commerce.price({ min: 100, max: 1000, precision: 2 }),
            salesdata: [{ x: new Date().toLocaleString('default', { month: 'short' }), y: 0 }],
            salestotal: 0,
            instock: document.getElementById('stock').value > 0 ? 'Yes' : 'No'
        }

        setProducts([...products, newProduct])

        navigate(`/product/${newProduct.name.replace(/\s/g, '%20')}`)
    }

    const doNothing = () => { }

    return (
        <div className={NewproductCSS.newProduct}>
            <h1 className={NewproductCSS.addProductTitle}>New Product</h1>
            <form className={NewproductCSS.addProductForm}>
                <div className={NewproductCSS.addProductItem}>
                    <label>Image</label>
                    <input type="file" id="image" accept="image/*" onChange={doNothing} />
                </div>
                <div className={NewproductCSS.addProductItem}>
                    <label>Name</label>
                    <input type="text" id="name" placeholder="Product name" value={product.name} onChange={doNothing} />
                </div>
                <div className={NewproductCSS.addProductItem}>
                    <label>Stock</label>
                    <input type="text" id="stock" placeholder="stock" value={product.stock} onChange={doNothing} />
                </div>
                <div className={NewproductCSS.addProductItem}>
                    <label>Active</label>
                    <select name="active" id="active" value={active} onChange={e => setActive(e.target.value)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button type="button" className={NewproductCSS.addProductButton} onClick={addProduct}>Create</button>
            </form>
        </div>
    );
}

export default NewProduct;