import { useState } from "react";

/**
 * input mein change krne se -> onChange invoke horha hai -> handle name change method -> setFullName -> fullname(state) {re rendering} -> input change
 */

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     // console.log(event.target.value);
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => {
        // The name assigned in input variable is same as the state variable
        // because if we fetch the name variable from event.target.name it must matched with state varaible to use a key
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(newValue);

        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };
    
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* Input Element 1 */}
            <label htmlFor="fullName">Full Name : </label>
            <input
                type="text"
                id="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleInputChange}
                name="fullName"
            />
            <br />
            <br />
            {/* Input Element 2 */}
            <label htmlFor="username">Username : </label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
                name="username"
            />
            <br />
            <br />
            {/* Input Element 3 */}
            <label htmlFor="password">Password : </label>
            <input
                type="password"
                id="password"
                placeholder="Enter username"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
            />
            <br />
            <br />
            <button>Submit</button>
        </form>
    );
}
