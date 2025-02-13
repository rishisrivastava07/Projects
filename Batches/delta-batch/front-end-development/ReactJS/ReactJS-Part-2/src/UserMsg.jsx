import "./UserMsg.css"

function UserMsg(props) {
    let styles = { color: props.textColor };
    return (
        <div className="popUpBox" style={styles}>
            <h4>Hi, {props.userName}</h4>
        </div>
    )
}

export default UserMsg;