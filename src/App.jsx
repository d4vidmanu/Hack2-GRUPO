import React from 'react';
import ItemList from "./components/ItemList.jsx";
import './index.css' // Asegúrate de que este archivo es el correcto

function App() {
    return (
        <div className="App">
            <h1>Lista de items</h1>
            <ItemList />
        </div>
    );
}

export default App;
