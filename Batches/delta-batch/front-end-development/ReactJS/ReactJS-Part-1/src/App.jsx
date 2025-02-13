// import "./App.css"
// import Title from './Title.jsx';
import { Title } from './Title.jsx';
// import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";

function Description() {
  return <h3>I am the Description</h3>;
}

function App() {
  return (
    <>
      {/* <Title />
        <Description /> */}
      <ProductTab />
    </>
  );
}

export default App;
