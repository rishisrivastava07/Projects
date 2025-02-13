import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props) {

function savProduct(data){
    console.log("inside new product.js");
    console.log(data);

    // calling parent function
    props.printData(data);
}

  return (
    <div className="new-product">
      <ProductForm saveNewProduct = {savProduct} />
    </div>
  );
}

export default NewProduct;
