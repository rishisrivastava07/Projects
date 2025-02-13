import { useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, steClicks] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        steClicks(clicks + 1);
    }
    let likedStyle = {
        color: "red",
    }
    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likedStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    )
}