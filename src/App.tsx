import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export interface IsState {
  person: {
    name: string;
    age: number;
    bio: string;
  }[];
}

function App() {
  // demo những kiểu khai báo thường dùng
  // const [age, setAge] = useState(12);
  // const [name, setName] = useState("Nellie");
  // const [inputData, setInputData] = useState({ name: "", age: "" });
  // const [size, setSize] = useState<number | string>(12);

  // {}[] => nghĩa là một array có nhiều object bên trong
  const [people, setPeople] = useState<IsState["person"]>([
    { name: "Nellie", age: 22, bio: "Developer" },
  ]);

  return (
    <div className="container">
      <Form person={people} setPerson={setPeople} />
      <List person={people} />
    </div>
  );
}

export default App;
