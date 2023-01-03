import React, { useState } from 'react';
import data from './data';
function App() {
  const [number, setNumber] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('messi');
    let amount = parseInt(number);
    if (number <= 0) {
      amount = 1;
    }
    if (number > data.length) {
      amount = data.length;
    }
    setParagraphs(data.slice(0, amount));
  }

  return (
    <main>
      <section className="section">
        <h3>tired of boring lorem ipsun?</h3>
        <form action="submit" className="lorem-form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="number">Paragraphs :</label>
            <input type="number" name="number" id="number"
              value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
          <button type='submit' className="btn">generate</button>
        </form>

      </section>
      <article className="lorem-text" style={{textAlign: 'center', maxWidth: '81ch'}}>
        {paragraphs.map((paragraph) => {
          return (
            <div className="result">{paragraph}</div>
          )
        })}
      </article>
    </main>
  )
}

export default App;
