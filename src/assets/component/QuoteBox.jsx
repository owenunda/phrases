const QuoteBOx = ({phrases, condition, index, colors, ramdonColor}) =>{



    return(
        <div  className="card" style={{color: colors[ramdonColor]}} >
            <div className="card--content">
            <i class='bx bxs-quote-alt-left'></i>
            <p className="phrase" > {phrases[index].quote} </p>
            </div>
            <div className="author--info">
            <p className="author"> {phrases[index].author} </p>
            <button style={{background: colors[ramdonColor]}} className="button" onClick={condition} > <i class='bx bxs-chevron-right'></i>  </button>
            </div>
        </div>
    )
}



export default QuoteBOx;