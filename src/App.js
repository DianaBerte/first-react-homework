// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Testing h1</h1>
        <ButtonComponent buttonContent="Click Me!" />
        <br />
        <ImageComponent
          mySrc="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80"
          myAlt="random alt text"
        />
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
    </div>
  );
}

export default App;
