import "./App.css";
import SortableList from "./components/SortableList";
import DragDropFiles from "./components/DragDropFiles";

const App = () => {
    return (
        <div className="container">
            {/* <SortableList /> */}
            <DragDropFiles />
        </div>
    )
};

export default App;