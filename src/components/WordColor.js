const WordColor = props =>{
    return (
        <h1 
        className="text-center" 
        style={{ backgroundColor: props.background }}
        >The word is <span style={{color: props.color}}>{props.word}</span></h1>
    )
}

export default WordColor;