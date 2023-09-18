import React from "react";
import Person from "./person/Person";
import "./people.css";

function People({ data, colaborador }) {
  // console.log(colaborador.length);
  return (
    <>
      {colaborador.length > 0 && (
        <div
          className="mt-8 "
          style={{
            backgroundColor: data.colorPrimario,
          }}
        >
          <div className="text-center">
            <h3 style={{ padding: "20px" }} className="titleSection">
              {data.titulo}
            </h3>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            {colaborador.map((people, index) => (
              <Person
                key={index}
                img={people.image}
                name={people.name}
                position={people.position}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default People;
