import UserMsg from "./UserMsg";

function MessageBox(props) {
    return (
        <>
            <UserMsg userName="Rishi" textColor="pink" />
            <UserMsg userName="Suman" textColor="blue" />
            <UserMsg userName="Rishi" textColor="green" />
        </>
    )
}

export default MessageBox;