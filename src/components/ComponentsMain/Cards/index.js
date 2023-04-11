const Cards = (props) => {
    return (
        <section style={{flexDirection: `${props.row}`}}>
            <div>
                <img src={props.img} alt="card"></img>
            </div>

            <div>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
                <p>{props.p4}</p>
            </div>
        </section>
    )
}

export default Cards