import "./Item.css";
import Price
    from "./Price";
function Item({ title, idx }) {
    let oldPrice = ["12,599", "11,990", "1,599", "599"];
    let newPrice = ["7,599", "5,599", "999", "99"];
    let description = [
        ["8000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["wireless", "5 Programmable buttons"]
    ];
    return (
        <div className="cards">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Item;