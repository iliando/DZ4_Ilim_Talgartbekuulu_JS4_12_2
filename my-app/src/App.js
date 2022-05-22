import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";

function App() {
    const users = [
        {
            name: "Ilim",
            age: 17,
            position: "Programmer"
        },
        {
            name: "Jalil",
            age: 16,
            position: "SchoolBoy"
        },
        {
            name: "Pele",
            age: 81,
            position: "Footboller"
        },
        {
            name: "Tyson",
            age: 55,
            position: "Boxer"
        }
    ]
    return (
        <div>
            <MainPage users={users}/>
        </div>
    );
}

export default App;
