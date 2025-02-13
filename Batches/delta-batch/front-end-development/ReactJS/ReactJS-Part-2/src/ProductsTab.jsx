import Product from "./Product.jsx";

function ProductsTab() {
    // let options = ["hi-tech", "durable", "fast"];
    // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
    return (
        <>
            {/* <Product title="phone" price={15000} features={options} features2={options2} /> */}
            {/* <Product title="phone" price={15000} features={options} /> */}
            {/* <Product title="phone" price={15000} features={["hi-tech", "durable", "fast"]}/> */}
            {/* <Product title="phone" price={15000} features2={{ a: "hi-tech", b: "durable", c: "fast" }} /> */}
            <Product title="phone" price={15000} />
            <Product title="laptop" price={35000} />
            <Product title="pen" price={10} />
            {/* <Product title="pen" /> */}
        </>
    )
}

export default ProductsTab;