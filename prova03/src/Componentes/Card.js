const Card = ({icone, titulo, data, classCard}) => {
    return (
        <div className={"card border-secondary my-3 m-0 mx-sm-3 w-100 w-sm-50" + classCard} >
            <div className="card-header"><i className= {icone + " azul-escuro h5"}></i></div>
            <div className="card-body text-secondary">
                <h5 className="card-title font-weight-bold azul-escuro">{titulo}</h5>
                <p className="card-text ">{data}</p>
            </div>
        </div>
    )
};
export default Card;