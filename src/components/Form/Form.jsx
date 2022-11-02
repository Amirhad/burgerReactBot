import React, { useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import "./Form.css";

function Form() {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subjuect, setSubjuect] = useState('physical')
   const {tg} = useTelegram()

    useEffect(() =>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() =>{
        if(!street || !country){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()

        }
    }, [country, street])

    const onChancgeCountry = (e) =>{
        setCountry(e.target.value)
    }

    const onChancgeStreet = (e) =>{
        setStreet(e.target.value)
    }

    const onChancgeSubject = (e) =>{
        setSubjuect(e.target.value)
    }

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input className={"input"} type="text" placeholder={"Страна"} value={country} onChange={onChancgeCountry}/>
      <input className={"input"} type="text" placeholder={"Улица"}  value={street} onChange={onChancgeStreet}/>


      <select  value={subjuect} onChange={onChancgeSubject} className={"select"}>
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>


    </div>
  );
}

export default Form;
