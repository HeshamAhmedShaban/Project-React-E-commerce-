import React from 'react'
import './Popular.css'
import Product from '../Assets/data'
import Items from '../Items/Items'
const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMAN</h1>
            <hr />
            <div className="popular-items">
                {Product.map((item,i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
                    
                })}
            </div>
        </div>
    )
}

export default Popular
