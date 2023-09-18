import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Person({ img, name, position }) {
  return (
    <Card
      style={{ maxWidth: "250px", margin: "20px" }}
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={name}
          className="w-full object-cover h-[140px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{name}</b>
        <p className="text-default-500">{position}</p>
      </CardFooter>
    </Card>
  );
}
