import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/header/header";
import Form from "./components/form/Form";
import Myorg from "./components/myOrg/Myorg";
import { Accordion, AccordionItem } from "@nextui-org/react";
import People from "./components/people/People";

// const dataAll = [];
//Lista de equipos
const equipos = [
  {
    titulo: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    titulo: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  },
];

let dataInitial = [
  {
    name: "Harland Lohora",
    position: "Instructor",
    image: "https://github.com/harlandlohora.png",
    team: "Front End",
  },
  {
    name: "Genesys Rondón",
    position: "Software Developer and Instructor",
    image:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    team: "Innovación y Gestión",
  },
  {
    name: "Jeanmarie Quijada",
    position: "Instructor at Alura Latam",
    image: "https://github.com/JeanmarieAluraLatam.png",
    team: "UX y Diseño",
  },
  {
    name: "Christian Velasco",
    position: "Head of Alura and Instructor",
    image: "https://github.com/christianpva.png",
    team: "Programación",
  },
  {
    name: "Jose Gonzalez",
    position: "Dev FullStack",
    image: "https://github.com/JoseDarioGonzalezCha.png",
    team: "Innovación y Gestión",
  },
];
function App() {
  const [dataAll, setDataAll] = useState(dataInitial);
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(false);
  const handleClickImg = (e) => {
    console.log("le diste click a img");
    setIsAdd(true);
  };

  useEffect(() => {
    console.log(dataAll);
  }, [dataAll]);
  return (
    <NextUIProvider>
      <div className="App">
        <main className="dark text-foreground bg-background">
          <Header />

          <Myorg handleClickImg={handleClickImg} />
          {isAdd && <Form data={setDataAll} />}
          {equipos.map((equipo, i) => (
            <People
              key={i}
              data={equipo}
              colaborador={dataAll.filter(
                (item) => item.team === equipo.titulo
              )}
            />
          ))}
        </main>
      </div>
    </NextUIProvider>
  );
}

export default App;
