import CardComponent from "./card.js";
import "./App.css";

function App() {
  const std_data = [
    {
      name: "Ahmad",
      age: "21",
      class: "Web Dev",
      inst: "SSUET",
    },
    {
      name: "Yousuf",
      age: "22",
      class: "Web Dev",
      inst: "SAIMS",
    },
    {
      name: "Ahmad",
      age: "19",
      class: "Web Dev",
      inst: "SAIMS",
    },
    {
      name: "Anas",
      age: "19",
      class: "Web Dev",
      inst: "SSUET",
    },
    {
      name: "Ahmad",
      age: "22",
      class: "Web Dev",
      inst: "SAIMS",
    },
    {
      name: "Anas",
      age: "17",
      class: "Web Dev",
      inst: "KU",
    },
    {
      name: "Sameer",
      age: "25",
      class: "Web Dev",
      inst: "SSUET",
    },
    {
      name: "Osama",
      age: "30",
      class: "Web Dev",
      inst: "SAIMS",
    },
    {
      name: "Ali",
      age: "26",
      class: "Web Dev",
      inst: "NED",
    },
    {
      name: "Ali",
      age: "15",
      class: "Web Dev",
      inst: "SAIMS",
    },
  ];
  return (
    <div>
      <h1>Card Component</h1>
      <br />
      <div className="App">
        {std_data.map((x, index) => {
          return (
            <CardComponent
              key={index}
              index={index}
              name={x.name}
              age={x.age}
              class={x.class}
              inst={x.inst}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
