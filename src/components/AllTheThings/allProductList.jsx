import Product from "../../products"

function ProductWrite(props) {
    return(
        <ul>
            <li>{props.name}
            "- $"
            {props.price}
            </li>
        </ul>
    )
}

export default ProductWrite