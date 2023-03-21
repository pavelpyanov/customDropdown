import { useState } from "react";
import DropDown from "./components/DropDown";
import { DropDownChangeEvent } from "./components/DropDown/DropDown";
import Layout from "./components/Layout";

const options = [
  "VW",
  "Audi",
  "Mercedes",
  "BMW",
  "Lexus",
  "Honda",
  "Peugeot",
  "Renault",
  "Lada",
  "Volvo",
  "Saab",
  "Man",
  "GMC",
  "Subaru",
];

const App = () => {
  const [value, setValue] = useState(options[6]);

  const onChange = (e: DropDownChangeEvent) => {
    console.log(e.target.value);

    setValue(e.target.value);
  };

  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Uncontrolled */}
        <DropDown
          options={options}
          inputProps={{ placeholder: "Choose car" }}
        />
        {/* Controlled */}
        <DropDown
          onChange={onChange}
          options={options}
          value={value}
          inputProps={{ placeholder: "Choose car" }}
        />
      </div>
    </Layout>
  );
};

export default App;
