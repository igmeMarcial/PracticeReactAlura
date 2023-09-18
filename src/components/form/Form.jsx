import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import "./form.css";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const colorInput = {
  color: "#ffffff",
};

const animals = [
  "Programación",
  "Front End",
  "Data Science",
  "Devops",
  "UX y Diseño",
  "Móvil",
  "Innovación y Gestión",
];
const formInitial = {
  name: "",
  position: "",
  image: "",
  team: "",
};

function Form({ data }) {
  const [form, setForm] = useState(formInitial);
  const size = "lg";

  const onChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    data((prevData) => [...prevData, form]);
    // console.log(data);
  };

  return (
    <div className="form w-full mt-10" style={{ marginBottom: "30px" }}>
      <div className="text-center mx-4 py-4">
        <h2 className="  inline-block  sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Enter the DATA
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="w-2/4">
        <div className="w-full flex flex-col content-center items-center ">
          <div className="flex flex-col  styleInput  ">
            <Input
              className="w-3/4 caret-red-700"
              size={size}
              type="text"
              label="Name"
              gap-4
              color="default"
              style={colorInput}
              onChange={onChange}
              name="name"
              value={form.name}
            />
            <Input
              className="w-3/4"
              size={size}
              type="text"
              label="Position"
              gap-4
              style={colorInput}
              name="position"
              onChange={onChange}
              value={form.position}
            />
            <Input
              className="w-3/4"
              size={size}
              type="text"
              label="Image URL"
              gap-4
              style={colorInput}
              name="image"
              onChange={onChange}
              value={form.image}
            />
            <Select
              label="Select an Team"
              className="max-w-xs selectTeam w-full"
              style={colorInput}
              size="lg"
              color="success"
              variant="bordered"
              onChange={onChange}
              name="team"
            >
              {animals.map((animal) => (
                <SelectItem key={animal} value={form.team}>
                  {animal}
                </SelectItem>
              ))}
            </Select>

            <div className="w-9/12 text-center">
              <Button
                className="w-6/12"
                size="lg"
                color="primary"
                variant="bordered"
                type="submit"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
