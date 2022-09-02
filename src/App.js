import Todo from './pages/ToDo'

function App() {

  const addClickHandler=()=>{
    alert('clicked me')
  }

  return (
    <div>
      
      <Todo />
    </div>
  );
}

export default App;
