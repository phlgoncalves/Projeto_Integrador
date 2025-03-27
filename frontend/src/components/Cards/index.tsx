type propsCard={
    titulo:string;
    descricao:string;
    img:string;
    imgAlt: string;
}


function Card(props:propsCard) {
    return(
        <>
            <div className="cards">
                <h1>{props.titulo}</h1>
                <br />
                {/* {props.img} */}
                <img className="img-cards" src={props.img} alt={props.imgAlt}/>
                
                <br /><br />
                {props.descricao}
                <br /><br />
                <button className="botao-cards" >Saiba mais ...</button>
            </div>
        </>
    )
}
export default Card

