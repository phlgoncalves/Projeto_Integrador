type propsCard = {
    titulo: string;
    descricao?: string;
    img: string;
    imgAlt: string;
    onClick: () => void;
}


function Card(props: propsCard) {
    return (
        <>
            <div className="cards" onClick={props.onClick}>
                <h1>{props.titulo}</h1>
                <br />
                <img className="img-cards" src={props.img} alt={props.imgAlt} />

                <br /><br />
                {props.descricao}
                <h3>Saiba mais...</h3>
            </div>
        </>
    )
}
export default Card

