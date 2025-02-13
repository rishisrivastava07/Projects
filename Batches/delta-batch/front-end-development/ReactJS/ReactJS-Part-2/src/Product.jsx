import "./Product.css";

// function Product({ title, price = 1, features}) {
function Product({ title, price, features, features2 }) {
    // console.log(props);
    // console.log(features);
    // const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount = price > 30000;
    let styles = { backgroundColor: isDiscount ? "pink" : "" };
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {/* <p>{features}</p> */}
            {/* <p>{features2.b}</p> */}
            {/* <p>{features.map((feature) => <li>{feature}</li>)}</p> */}
            {isDiscount ? <p>Discount of 5%</p> : ""}
        </div>
    )
}

export default Product;