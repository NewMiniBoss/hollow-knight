const DLCs = (props) => {
    return (
        <div className="cardDlcss">
            <h3>{props.h3}</h3>
            <img src={props.img} alt="dlc"></img>
            <p>{props.p}</p>
        </div>
    )
}

export default DLCs