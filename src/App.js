import "./css/reset.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-header__heading">База знань Реакт</h1>
        <div className="app-header__search">Пошук</div>
      </header>
      <main className="app-main">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>
                <a href="#">JSX</a>
              </li>
              <li>
                <a href="#">State</a>
              </li>
              <li>
                <a href="#">Props</a>
              </li>
            </ul>
          </nav>
        </aside>

        <article className="article">
          <h2>JSX</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            nihil? Eveniet optio quia temporibus non minus error sapiente natus
            aliquam excepturi rem assumenda quaerat itaque at ad, ipsa
            dignissimos aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            nihil? Eveniet optio quia temporibus non minus error sapiente natus
            aliquam excepturi rem assumenda quaerat itaque at ad, ipsa
            dignissimos aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            nihil? Eveniet optio quia temporibus non minus error sapiente natus
            aliquam excepturi rem assumenda quaerat itaque at ad, ipsa
            dignissimos aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            nihil? Eveniet optio quia temporibus non minus error sapiente natus
            aliquam excepturi rem assumenda quaerat itaque at ad, ipsa
            dignissimos aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            nihil? Eveniet optio quia temporibus non minus error sapiente natus
            aliquam excepturi rem assumenda quaerat itaque at ad, ipsa
            dignissimos aspernatur.
          </p>
        </article>
      </main>
    </div>
  );
}

export default App;
