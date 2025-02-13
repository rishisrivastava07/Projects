import "./ProductForm";
import { useState } from "react";

// useStates are scheduled states which scheduled the changes not change immediately/
function ProductForm(props) {
  // handling multiple states
  const [newProductData, setNewProductData] = useState({
    title: "",
    date: "",
  });

  //   const [newTitle, setNewTitle] = useState("");
  //   const [newDate, setNewDate] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setNewProductData((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setNewProductData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newProduct = {
      title: newProductData.title,
      date: newProductData.date,
    };
    // console.log(newProduct);
    props.saveNewProduct(newProduct);

    setNewProductData({
      title: "",
      date: "",
    });
  };
  return (
    <form className="new-product__controls" onSubmit={submitHandler}>
      <div className="new-product_control">
        <label>Title</label>
        <input
          type="text"
          value={newProductData.title}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-product_control">
        <label>Date</label>
        <input
          type="date"
          value={newProductData.date}
          onChange={dateChangeHandler}
          min="2024-01-01"
          max="2024-12-31"
        ></input>
      </div>
      <div className="new-product_submitBtn">
        <button type="submit">Add to List</button>
      </div>
    </form>
  );
}

export default ProductForm;
