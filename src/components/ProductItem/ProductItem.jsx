import React from 'react'
import Buttons from '../buttons/Buttons'
import './ProductItem.css'
function ProductItem({product, className}) {

    const onAddHandler = () =>{
        onAddHandler(product)
    }

  return (
    <div className={'product' + className}>
        <div className={'img'}/>
        <div className={'title'}>{product.title}</div>
        <div className={'descrip'}>{product.description}</div>
        <div className={'price'}>
            <span>Стоимасть:<b>{product.price}</b></span>
        </div>
    <Buttons className={'add-btn'} onClick={onAddHandler}>
    Добавить корзину
    </Buttons>
    </div>

    )
}

export default ProductItem