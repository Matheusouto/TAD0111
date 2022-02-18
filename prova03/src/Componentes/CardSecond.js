const CardSecond = ({icone, titulo, data, id}) =>{
    return (
        <div className="col-12 col-sm-4 mb-4 px-0 px-sm-3">
            <div className="card border-secondary text-center w-100 h-100">
                <div className="card-header">
                    <i className={icone + " azul-escuro h5"}>
                    </i></div>
                <div className="card-body text-secondary">
                    <h5 className="card-title font-weight-bold azul-escuro">{titulo}</h5>
                    <p className="azul-claro mb-1">{data}</p>
                </div>
            </div>
        </div>
    )
};
 export default CardSecond;