import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        });
    }

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input 
                    type="text" 
                    id="username"
                    placeholder="username"  
                    value={formData.username}  
                    onChange={handleInputChange}
                    name="username"
                />

                <br /> <br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea 
                    cols="30" 
                    rows="10" 
                    id="remarks"
                    value={formData.remarks}
                    placeholder="Add few remarks"
                    onChange={handleInputChange}
                    name="remarks"
                >
                    Remarks
                </textarea>
                
                <br /><br />

                <label htmlFor="rating">Ratings :</label>
                <input 
                    type="number" 
                    id="rating"
                    placeholder="ratings" 
                    min="1"
                    max="5" 
                    value={formData.rating}
                    onChange={handleInputChange}
                    name="rating"
                />

                <br /><br />

                <button>Add comment</button>
            </form>
        </div>
    )
}