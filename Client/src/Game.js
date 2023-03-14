export default function Game(){

    //if the user is logged in, allow them to play
    if(localStorage.getItem("user")){
        console.log(localStorage)
        return(<h1>Game</h1>)
    }
    return(
        <h1>Please log in to play</h1>
    )
    
}