import { IProduct } from "../models"
import { Item } from './Item'

interface CatalogProps {
    items: IProduct[]
}

export function Catalog({items = []} : CatalogProps) {
    
    return (
        <div className="item-list">
            { items.map(item => item.state === 'active' && <Item data={item} key={item.listing_id}/>) }
        </div>
    )
}


