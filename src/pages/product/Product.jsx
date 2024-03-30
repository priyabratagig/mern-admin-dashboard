import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Publish } from "@mui/icons-material";
import { setProducts } from "../../redux";
import Chart from "../../components/chart/Chart";
import ProductCSS from "./product.module.css";

const Product = () => {
    const param = useParams();
    const name = param.productName;
    const products = useSelector(state => state.products.products);
    const product = products.find(product => product.name === name);

    const [image, setImage] = useState(product.img);
    const [active, setActive] = useState(product.status);
    const [instock, setInStock] = useState(product.instock);

    const navigate = useNavigate();

    const updateImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const updateProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            ...product,
            name: document.getElementById("name").value || product.name,
            instock: instock,
            status: active,
            img: image
        }

        setProducts(products.map(product => product.name === name ? newProduct : product))

        if (newProduct.name !== name) navigate(`/product/${newProduct.name}`);
    }

    return (
        <div className={ProductCSS.product}>
            <div className={ProductCSS.productTitleContainer}>
                <h1 className={ProductCSS.productTitle}>Product</h1>
                <Link to="/newproduct">
                    <button className={ProductCSS.productAddButton}>Create</button>
                </Link>
            </div>
            <div className={ProductCSS.productTop}>
                <div className={ProductCSS.productTopLeft}>
                    <Chart data={product.salesdata} title="Sales Performance" grid={false} />
                </div>
                <div className={ProductCSS.productTopRight}>
                    <div className={ProductCSS.productInfoTop}>
                        <img src={product.img} alt="" className={ProductCSS.productInfoImg} />
                        <span className={ProductCSS.productName}>{product.name}</span>
                    </div>
                    <div className={ProductCSS.productInfoBottom}>
                        <div className={ProductCSS.productInfoItem}>
                            <span className={ProductCSS.productInfoKey}>id:</span>
                            <span className={ProductCSS.productInfoValue}>{product.id}</span>
                        </div>
                        <div className={ProductCSS.productInfoItem}>
                            <span className={ProductCSS.productInfoKey}>sales:</span>
                            <span className={ProductCSS.productInfoValue}>₹ {product.salestotal}</span>
                        </div>
                        <div className={ProductCSS.productInfoItem}>
                            <span className={ProductCSS.productInfoKey}>active:</span>
                            <span className={ProductCSS.productInfoValue}>{product.status}</span>
                        </div>
                        <div className={ProductCSS.productInfoItem}>
                            <span className={ProductCSS.productInfoKey}>in stock:</span>
                            <span className={ProductCSS.productInfoValue}>{product.instock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ProductCSS.productBottom}>
                <form className={ProductCSS.productForm}>
                    <div className={ProductCSS.productFormLeft}>
                        <label>Product Name</label>
                        <input type="text" id="name" placeholder={product.name} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock" value={instock} onChange={e => setInStock(e.target.value)}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active" value={active} onChange={e => setActive(e.target.value)}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className={ProductCSS.productFormRight}>
                        <div className={ProductCSS.productUpload}>
                            <img src={image} alt="" className={ProductCSS.productUploadImg} />
                            <label htmlFor="image">
                                <Publish />
                            </label>
                            <input type="file" accept="image/*" id="image" style={{ display: "none" }} onChange={updateImage} />
                        </div>
                        <button type="button" className={ProductCSS.productButton} onClick={updateProduct}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;