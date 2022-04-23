import {useRef, useState} from "react";

export function ToDoItem(props) {
    //Как это работает?
    let {check} = props;
    const {item, handleIncrement, handleListInputClick} = props;
    const [checked, setChecked] = useState(true);

console.log(checked)
    function chengeCheckbox() {
        handleListInputClick(checked)
        setChecked(!checked);

        if (checked) {
            listItem.current.style.textDecoration = 'line-through';
        } else {
            listItem.current.style.textDecoration = 'none';
        }
    }

    const listItem = useRef(null);

    function handleListIncrement(event) {
        handleIncrement(event.target["checked"]);
    }

    return (
        <>
        <div className="list-item-container" key={item.id}>
            {/*при удалении checked работает Клик по каждому input*/}
            <input type="checkbox" onChange={chengeCheckbox} onClick={handleListIncrement} checked={check} />
            <span ref={listItem}>{item.name}</span>
        </div>
        </>)
}
