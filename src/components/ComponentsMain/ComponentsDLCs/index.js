const CardDLCs = (props) => {
    return (
        <div className="card-dlc">
            <h3>{props.h3}</h3>
            <img src={props.img} alt="dlc"></img>
            <p>{props.p}</p>
        </div>
    )
}
export default CardDLCs;