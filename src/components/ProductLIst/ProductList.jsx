import React, { useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import { useCallback, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";

const products = [
  {id: '1', title: 'Бургер', price: 200, description: 'Обычный',},
  {id: '2', title: 'Шаверма', price: 150, description: 'Шаверма от Шефа'},
  {id: '3', title: 'Кинкер', price: 120, description: 'Аналог шавермы'},
  {id: '4', title: 'Крылышки', price: 300, description: 'Острые и сочные'},
  {id: '5', title: 'боксмастер', price: 250, description: ' Сочное куриное филе в оригинальной или острой хрустящей панировке'},
  {id: '6', title: 'Хот-дог', price: 80, description: 'Не собака'},
  {id: '7', title: 'Стрипсы', price: 230, description: 'Сочные и острые '},
  {id: '8', title: 'Шеф-бургер', price: 280, description: 'Бургер от Шефа'},
]

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
      return acc += item.price
  }, 0)
}

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const {tg, queryId} = useTelegram();

  const onSendData = useCallback(() => {
      const data = {
          products: addedItems,
          totalPrice: getTotalPrice(addedItems),
          queryId,
      }
      fetch('http://85.119.146.179:8000/web-data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
  }, [addedItems])

  useEffect(() => {
      tg.onEvent('mainButtonClicked', onSendData)
      return () => {
          tg.offEvent('mainButtonClicked', onSendData)
      }
  }, [onSendData])

  const onAdd = (product) => {
      const alreadyAdded = addedItems.find(item => item.id === product.id);
      let newItems = [];

      if(alreadyAdded) {
          newItems = addedItems.filter(item => item.id !== product.id);
      } else {
          newItems = [...addedItems, product];
      }

      setAddedItems(newItems)

      if(newItems.length === 0) {
          tg.MainButton.hide();
      } else {
          tg.MainButton.show();
          tg.MainButton.setParams({
              text: `Купить ${getTotalPrice(newItems)}`
          })
      }
  }

  return (
      <div className={'list'}>
          {products.map(item => (
              <ProductItem
                  product={item}
                  onAdd={onAdd}
                  className={'item'}
              />
          ))}
      </div>
  );
};

export default ProductList;