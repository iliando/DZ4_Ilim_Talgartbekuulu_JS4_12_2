import './App.css';
import MainPage from "./pages/MainPage/MainPage";

function App() {
    const users = [
        {
            name: "Ilim",
            age: 17,
            position: "Boxer"
        },
        {
            name: "Jalil",
            age: 16,
            position: "SchoolBoy"
        },
        {
            name: "Pele",
            age: 65,
            position: "Footboller"
        }
    ]

    return (
        <div>
            <MainPage users={users}/>
        </div>
    );
}

export default App;
