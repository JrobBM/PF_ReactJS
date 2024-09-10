const Item= ({name,img,price,category,dues,href,tag})=>{

    return(
        <>
            <article className="item">
                <a href={href}>
                    <picture className="item__picture">
                        <span className="item__picture--pill">{tag}</span>
                        <img className="item__picture--img item__picture--img--1"src={img.front} alt={`${name}- Figura`}/>
                        <img className="item__picture--img item__picture--img--2"src={img.back} alt={`${name}- Caja`}/>
                    </picture>
                    <div className="item__info">
                        <h3 className="item__info--title">{category}</h3>
                        <h4 className="item__info--item">{name}</h4>
                        <p className="item__info--price">$ {price} .-</p>
                        <p className="item__info--dues">{dues}</p>
                    </div>
                </a>
            </article>
        </>
    );
};

export default Item;
