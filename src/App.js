import './App.scss';
import {ToDoList} from "./components/ToDoList/ToDoList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Calendar from "./components/Calendar/Calendar";
import {Container, Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from "./components/Page404/Page404";

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

    //const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     // setCount(prevCount => prevCount + 1);
    //     //console.log(count);
    //
    // };

    return (
        <div className="app-container">
            <BrowserRouter>
                {/*<header>*/}
                    <Navbar expand="lg" bg="primary" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Главная (обо мне)</Nav.Link>
                                    <Nav.Link href="/todolist">Ту ду лист</Nav.Link>
                                    <Nav.Link href="/calendar">Календарь</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                {/*</header>*/}

                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/todolist'
                               element={<ToDoList items={items} cats="cat"
                                                 />}/> {/*// count={count} handleIncrement={handleIncrement}*/}
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/*' element={<Page404/>}/>
                    </Routes>
                </main>
                <footer>Footer text</footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
