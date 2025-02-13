import './Item.css';
function Item(props) {
  const itemName = props.name;
  return (<div>
    <p className="nirma">{itemName}</p>
    {/* props.children is used to make visible the contain present inside the tag of Item tag */}
    {props.children} 
  </div>);
}

export default Item;
