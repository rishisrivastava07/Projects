function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye Bye!");
}

function handleDblClick() {
    console.log("Double Clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me !</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aliquam magni ad sint ab numquam repellendus impedit quidem similique, saepe aliquid excepturi tempore doloribus, minus rem iusto doloremque cupiditate tempora!
            </p>
            <button onDoubleClick={handleDblClick}>Double Click Here !</button>
        </div>
    )
}