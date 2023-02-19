import "./App.css";

// Example of a data array that
// you might receive from an API
const data = [
  {
    name: "Total Height",
    value: 177,
  },
  {
    name: "Bust Circumference",
    value: 88,
  },
  {
    name: "Neck Base -circumference",
    value: 37.4,
  },
  {
    name: "HPS Height",
    value: 151,
  },
  {
    name: "Across Shoulder",
    value: 37.5,
  },
  {
    name: "CF Neck to Waist",
    value: 37,
  },
  {
    name: "CB Neck to Waist",
    value: 40,
  },
  {
    name: "Bust Circumference",
    value: 88,
  },
  {
    name: "Under Bust",
    value: 72.5,
  },
  {
    name: "Apex to Apex",
    value: 18.5,
  },
  {
    name: "HPS to Apex",
    value: 27,
  },
  {
    name: "Waist Circumference",
    value: 68,
  },
  {
    name: "Waist to High Hip",
    value: 11.5,
  },
  {
    name: "Waist to Low Hip",
    value: 23.5,
  },
  {
    name: "High Hip",
    value: 80,
  },
  {
    name: "Low Hip",
    value: 94,
  },
  {
    name: "Leg Inseam — Height",
    value: 84,
  },
  {
    name: "Leg Thigh — Circumference",
    value: 54,
  },
  {
    name: "Leg Thigh — Height",
    value: 0,
  },
  {
    name: "Knee — Circumference",
    value: 35,
  },
  {
    name: "Knee — Height",
    value: 0,
  },
  {
    name: "Calf",
    value: 34.5,
  },
  {
    name: "Ankle",
    value: 0,
  },
  {
    name: "Arm",
    value: 0,
  },
  {
    name: "CB Neck to Wrist",
    value: 78.5,
  },
  {
    name: "Bicep",
    value: 27.5,
  },
  {
    name: "Elbow",
    value: 23.5,
  },
  {
    name: "Wrist",
    value: 15,
  },
  {
    name: "Total Rise",
    value: 72,
  },
  {
    name: "Vertical Trunk",
    value: 0,
  },
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Measurements</th>
          <th>Client A</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
