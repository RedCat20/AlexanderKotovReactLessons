import {useRef, useState, useEffect} from "react";

export function ToDoItem(props) {
    //Как это работает?
    const {item, handleListInputClick} = props; //, handleIncrement
    const [checked, setChecked] = useState(false);


    function chengeCheckbox() {
        handleListInputClick(checked)
        setChecked(!checked);
    }
    useEffect(()=>{
        if (checked) {
            listItem.current.style.textDecoration = 'line-through';
        } else {
            listItem.current.style.textDecoration = 'none';
        }
    },[checked])

    const listItem = useRef(null);

    function handleListIncrement(event) {
        //handleIncrement(event.target["checked"]);
        handleListInputClick(event.target["checked"])
    }

    return (
        <>
        <div className="list-item-container" key={item.id}>
            {/*при удалении checked работает Клик по каждому input*/}
            <input type="checkbox" onChange={chengeCheckbox} onClick={handleListIncrement} checked={checked} />{/*checked={check}*/}
            <span ref={listItem}>{item.name}</span>
        </div>
        </>)
}
