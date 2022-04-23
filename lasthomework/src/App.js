import './App.scss';
import {ToDoList} from "./ToDoList";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Calendar from "./components/Calendar/Calendar";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        id: 0,
        name: "Cook dinner",
        checked: true,
    },
    {
        id: 1,
        name: "Create tasks"
    },
    {
        id: 2,
        name: "Draw picture",
    }
]

function App() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        console.log(count);

    };

    useEffect(() => {
        // if (count > 0) {
        //   alert(`Count > 0, ${count}, effect`);
        // }
    }, [count])

    return (
        <div className="app-container">
            <BrowserRouter>
                {/*<header>*/}
                <Navbar Navbar bg="primary" variant="dark">
                    <Container>
                        {/*<Navbar.Brand to="/mainpage">Navbar</Navbar.Brand>*/}
                        <Nav className="me-auto">
                            <Nav.Link href="/mainpage">Главная (обо мне)</Nav.Link>
                            <Nav.Link href="/todolist">Ту ду лист</Nav.Link>
                            <Nav.Link href="/calendar">Календарь</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                    {/*<Link to="/mainpage">Главная (обо мне)</Link>*/}
                    {/*<Link to="/todolist">Ту ду лист</Link>*/}
                    {/*<Link to="/calendar">Календарь</Link>*/}
                {/*</header>*/}

                <main>
                    <h2>Main text</h2>
                    <hr/>
                    <Routes>
                        <Route path='/mainpage' element={<MainPage/>}/>
                        <Route path='/todolist'
                               element={<ToDoList items={items} cats="cat" handleIncrement={handleIncrement}/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                    </Routes>
                    <div>Clicks on to do {count} times</div>
                </main>

                <footer>Footer text</footer>

            </BrowserRouter>
        </div>
    );
}

export default App;
