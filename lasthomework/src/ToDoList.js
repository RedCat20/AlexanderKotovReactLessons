import './ToDoList.scss';
import {ToDoItem} from "./ToDoItem";
import {useEffect, useRef, useState} from 'react';
import {Button} from "react-bootstrap";

export function ToDoList(props) {
    let {items, handleIncrement} = props;
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [countChecked, setCountChecked] = useState(0);
    const [check, setCheck] = useState(false);
    const list = useRef(null);

    function handleListIncrement() {
        handleIncrement();
    }

    let allItems = items.map(item => <ToDoItem key={item.id} item={item} handleIncrement={handleListIncrement}
                                               handleListInputClick={handleListInputClick}
                                               foo={foo} check={check}
                                              />)

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
            setCountChecked(countChecked + 1)
        } else {
            setCountChecked(countChecked - 1)
        }
    }

    function handleListInputClick(checked) {
        handleInputClick(checked)
    }

    function foo() {
        //Как это работает?
        setCheck(!check)
    }

    return (
        <>
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
            <div>amount checked: {countChecked}</div>
        </>
    );
}
