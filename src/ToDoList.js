import './ToDoList.scss';
import {ToDoItem} from "./ToDoItem";
import {useEffect, useRef, useState} from 'react';
import {Button} from "react-bootstrap";

export function ToDoList(props) {
    let {items, handleIncrement} = props;//, count
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [countChecked, setCountChecked] = useState(0);
    const [check, setCheck] = useState(false);
    const list = useRef(null);

    const [count, setCount] = useState(0);

    // function handleListIncrement() {
    //     handleIncrement();
    // }

    let allItems = items.map(item => <ToDoItem key={item.id} item={item}
                                               handleListInputClick={handleListInputClick}
                                               foo={foo} check={check}
                                              />); {/*handleIncrement={handleListIncrement}*/}
    let handleChecked1 = () => {
        setChecked1(!checked1)
    }

    useEffect(() => {
        if (checked1) {
            setChecked2(true);
        } else {
            setChecked2(false);
        }
    }, [checked1])


    let handleChecked2 = () => {
        setChecked2(!checked2);
    }

    useEffect(() => {
        if (!checked1) {
            setDisabled(true)
            // setChecked2(false);
        } else {
            setDisabled(false)
        }
    }, [checked1])


    let handleInputClick = (checked) => {
        if (checked) {
            setCountChecked(countChecked - 1)
        } else {
            setCountChecked(countChecked + 1)
        }
        setCount(prevCount => prevCount + 1);
    }

    function handleListInputClick(checked) {
        handleInputClick(checked)
    }

    function foo() {
        //Как это работает?
        setCheck(!check)
        console.log(check)
    }

    return (
        <>
            <h2 className="name-component">ToDoList</h2>
            <div>
                <input type="checkbox" checked={checked1} onChange={handleChecked1}/> Learn react<br/>
                <input type="checkbox" checked={checked2} onChange={handleChecked2} disabled={disabled}/> Learn
                javascript
            </div>
            <hr/>
            <h4>To do</h4>
            <div ref={list} className="list-container">{allItems}</div>
            <Button variant="outline-primary" onClick={foo}>button</Button>
            <hr/>
            <div>Clicks on to do {count} times</div>
            <div>amount checked: {countChecked}</div>
        </>
    );
}
