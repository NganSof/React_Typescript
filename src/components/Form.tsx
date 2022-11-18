import React, { useState } from "react";
import "../css/Form.css";
import { IsState as InProps } from "../App";

interface IProps {
  person: InProps["person"];
  setPerson: React.Dispatch<React.SetStateAction<InProps["person"]>>;
}
function Form({ person, setPerson }: IProps) {
  const [inputData, setInputData] = useState({ name: "", age: "", bio: "" });

  const handerChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handerSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // chỗ này giá trị khởi tạo của inputData không khớp với khởi tạo của person phải chỉnh lại thay vì  setPerson([...person,inputData])
    setPerson([
      ...person,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: "", age: "", bio: "" });
  };
  return (
    <div className="form-container">
      <h1>Form</h1>
      <form onSubmit={handerSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={handerChange}
          value={inputData.name}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="age"
          onChange={handerChange}
          value={inputData.age}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio Description"
          onChange={handerChange}
          value={inputData.bio}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
