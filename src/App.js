import logo from "./logo.svg";
import "./App.css";
import * as mdc from "material-components-web";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-dark">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="carousel-2" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="w-100 d-block"
                src="https://cdn.bootstrapstudio.io/placeholders/140x800.png"
                alt="Slide Image"
              />
            </div>
            <div class="carousel-item">
              <img
                class="w-100 d-block"
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                alt="Slide Image"
              />
            </div>
            <div class="carousel-item">
              <img
                class="w-100 d-block"
                src="https://cdn.bootstrapstudio.io/placeholders/140x800.png"
                alt="Slide Image"
              />
            </div>
          </div>
          <div>
            <a
              class="carousel-control-prev"
              href="#carousel-2"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-2"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          <ol class="carousel-indicators">
            <li
              class="active"
              data-bs-target="#carousel-2"
              data-bs-slide-to="0"
            ></li>
            <li data-bs-target="#carousel-2" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-2" data-bs-slide-to="2"></li>
          </ol>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
