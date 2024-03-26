import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutline, Search } from "@mui/icons-material";
import SelectSortTable from "../../components/mui-table/SelectSortTable";
import { setProducts } from "../../redux";
import ProductlistCSS from "./productlist.module.css";

export default function ProductList() {
    const products = useSelector(state => state.products.products);

    const [filterdProducts, setFilterdProducts] = useState(products)

    const filter = (e) => {
        setFilterdProducts(products.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleDelete = (name) => {
        setProducts(products.filter((item) => item.name !== name));
        setFilterdProducts(filterdProducts.filter((item) => item.name !== name));
    };

    const headCells = [
        { id: "Product", numeric: false, disablePadding: false, label: "Product", style: { maxWidth: "40rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Stock", numeric: true, disablePadding: false, label: "Stock", style: { maxWidth: "10rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Status", numeric: false, disablePadding: false, label: "Status", style: { maxWidth: "12rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Price", numeric: true, disablePadding: false, label: "Price", style: { maxWidth: "16rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
        { id: "Action", numeric: false, disablePadding: false, label: "Action", style: { maxWidth: "15rem", fontSize: "1.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } },
    ]

    const body = filterdProducts.map((product) => {
        return {
            Product: (
                <div className={ProductlistCSS.productListItem}>
                    <img src={product.img} alt="" className={ProductlistCSS.productListImg} />
                    {product.name}
                </div>
            ),
            Stock: product.stock,
            Status: product.status,
            Price: product.price,
            Action: (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to={"/product/" + product.name}>
                        <button className={ProductlistCSS.productListEdit}>Edit</button>
                    </Link>
                    <DeleteOutline
                        className={ProductlistCSS.productListDelete}
                        onClick={() => handleDelete(product.name)}
                    />
                </div>
            ),
        }
    })

    const header = <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p className={ProductlistCSS.productListTitle}>Product List</p>
        <span style={{ height: "3rem", display: "flex", columnGap: "0.5rem", alignItems: "center", border: "0.1rem solid #b2aeae", borderRadius: "0.2rem", padding: "0.2rem 0.5rem" }}>
            <Search />
            <input type="search" onChange={filter} /></span>
    </div>

    return (
        <div className={ProductlistCSS.productList}>
            <SelectSortTable header={header} headCells={headCells} body={body} />
        </div>
    )
}