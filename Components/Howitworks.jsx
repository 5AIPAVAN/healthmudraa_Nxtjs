import React from 'react';
import youtube_icon from './youtube_icon.png';
import appointment from './appointment.png';
import treatment from './treatment.png';

export default function Howitworks() {
  return (
    <div>
      <style>
        {`
          .container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 22vh;
            border-radius: 12px;
            border: 1px solid #f1f1f1;
            width: 25vw;
            height: 50vh;
            box-shadow: rgb(214, 214, 214) 1px 2px 2px 0px;
          }

          .textt{
              font-weight: 600;
              letter-spacing: 1.2px;
              margin: 20px 0px;
              color:#262626
          }
          .card img {
            margin-bottom: 0.8rem;
          }
          .card h2 {
            font-size: 1.4rem;
          }
          .card .para {
            color: #262626;
            font-size: 20px;
            // max-width: 20vw;
            padding : 21px;
            max-height: 25vh;
            text-align: center;
          }
          @media (max-width: 1200px) {
            .card {
              width: 30vw;
            }
          }
          @media (max-width: 992px) {
            .card {
              width: 40vw;
            }
          }
          @media (max-width: 768px) {
            .card {
              width: 60vw;
              margin-bottom:60px
            }
          }
          @media (max-width: 576px) {
            .card {
              width: 80vw;
            }
          }
        `}
      </style>
      <div className="col-12 text-center my-10">
        <h1 className="fw-bold" style={{ marginBottom: '56px', marginTop: '15vh' }}>How It Works</h1>
      </div>

      <div className="container">
        <div className="card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9klEQVR4nO2bv04CQRDG14g1MHPAE1hYoeF2V7TgBUys7IgljYWd7WUHfABLGjWWFjyFdkQ73sBEG30BAoZ/58mtxekhsLtfMsllJ9mbX/a75fYyMObk5LT+qrS3coLKnqSKiZETVGa1IBPyoqBbFDQ0O9RNCAycussvaLEBnLo64E7UCshVTzc+zgnqjHNc9eI51ZrdKJbzqR4W4lNdM+9sRVqx3C/qwem4Fhg4taOP9k/j01w7NtFUnqTGrHBNLoQaXc/nI7mG5p6J6wHduLXAaJul0eAAByz0Vln3wCS7tAmCJLu0CQIHzNwKGyVwlmbO0qkKJO2gUMfs5H4z3ZlX1NLA6W08t1BPea6qac+/csD47Z1WDYDTXVFelpj5wGoQXnP1jqJ59h82hyUCX6CgK+SqH55gBD3nK+qQmQjsTQ/0BR7soqCHeZuXqkGRmQg80XADBJ0CV6+RZ/wDJJ2nbXNYDeCJsuUgp7W53zwwEngmz6c9FOoxsqn1QbT2mVXAUknjgLP2WHpoz6ZVsOVnCW178UD7Xi3JjsMDcHqx6njoSdr2OB1Z8wFg2QIHzNwKGyVwlmbO0kYJkvR4mBDoejyY3U0tnb+2Ca1V2xLY1pgGtgGjbZZGgwOiwKPm6WUXtPDgdP1l9FqQseovAE5OTmxd9QmUOwXSsrA9zAAAAABJRU5ErkJggg=="/>
          <h2 className="textt">Watch Expert Videos</h2>
          <div className="para">
            <p>Find valuable health advice from our trusted doctors.</p>
          </div>
        </div>
        <div className="card">
          
          <img src="data:image/png;base64,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"/>
          <h2 className="textt">Book an Appointment</h2>
          <div className="para">
            <p>Schedule a consultation with the doctor of your choice.</p>
          </div>
        </div>
        <div className="card">
          <img src="data:image/png;base64,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"/>
          <h2 className="textt">Get Treatment</h2>
          <div className="para">
            <p>Receive personalized care and treatment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
