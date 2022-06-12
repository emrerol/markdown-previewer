import { useState } from "react";
import Header from "./components/Header.component";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdown, setMarkdown] = useState("## Welcome To Markdown Previewer");

  const markdownHandler = (event) => {
    setMarkdown(event.target.value);
  };
  return (
    <div>
      <Header />
      <main>
        <section className="markdown">
          <textarea
            className="input"
            value={markdown}
            onChange={markdownHandler}
          ></textarea>
          <article className="result">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
