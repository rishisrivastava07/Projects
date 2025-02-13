import Item from "./Item";
// import "./Actvity.css";

function Activity() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div style={styles}>
            <Item title="Logitech MX Master" idx={0} />
            <Item title="Apple Pencil (2nd Gen)" idx={1} />
            <Item title="Zebronics Zeb-transformer" idx={2} />
            <Item title="Petronics Toad 23" idx={3} />
        </div>
    );
}

export default Activity;