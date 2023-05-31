import { IProduct } from '../models';

interface ItemProps {
    data: IProduct
}

export function Item({data} :ItemProps) {

    let title = data.title.length > 50 ? data.title?.slice(0, 50).concat('...') : data.title;

    let classForQuantity
    if (data.quantity <= 20) classForQuantity = 'level-medium';
    if (data.quantity <= 10) classForQuantity = 'level-low';
    if (data.quantity > 20) classForQuantity = 'level-high';

    let usdOrEur = undefined

    if ( data.currency_code == 'USD') usdOrEur = '$';
    if ( data.currency_code == 'EUR') usdOrEur = '€';

    return (
        <div className="item">
            <div className="item-image">
                <a href={data.url}>
                    <img src={data.MainImage?.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ title }</p>
                <p className="item-price">{ usdOrEur }{ data.price } { !usdOrEur && data.currency_code } </p>
                <p className={`item-quantity ${ classForQuantity }`}>{ data.quantity } left</p>
            </div>
        </div>
    )
}