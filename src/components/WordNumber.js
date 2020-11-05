const WordNumber = props =>{
    
    return (
        isNaN(props.WordNumber) ?
        <h1 className="text-center word">The word is {props.WordNumber}</h1> : 
        <h1 className="text-center number">The number is {props.WordNumber}</h1>
    )
}

export default WordNumber;