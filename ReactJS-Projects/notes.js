// if we need to communicate from child -> parent
// we have to pass the function taking object (which is in parent) and pass it through props to child
// when chiild updates obj it passes to that function and as soon it get accessed by the parent component

// useState hook - used to reflect of changes done on code to UI 

// useEffect hook - used to manage side effects
// variation - 1 -> Every Render
useEffect( () => {
    console.log("UI Rendering Done");
});

// variation - 2 -> Rendering for only first time
useEffect( () => {
    console.log("UI Rendering Done");
}, []);
// we just pass emoty dependencies

// variation - 3 -> Rendering for change in dependencies
useEffect( () => {
    console.log("UI Rendering Done");
}, [text]);

// variation - 4 -> to handle unmounting of a component
useEffect(()=>{
    // listener added
    console.log("Listener added");  // second this listener will execute

    return () => {
        console.log("Listener removed");    // first this listener will execute
    }
}, [text]);