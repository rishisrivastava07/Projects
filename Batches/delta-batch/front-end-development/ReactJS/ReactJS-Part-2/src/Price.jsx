export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        // borderRadius: "10px"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}><i>{oldPrice}</i></span>
            &nbsp; &nbsp;
            <span style={newStyles}><i>{newPrice}</i></span>
        </div>
    )
}