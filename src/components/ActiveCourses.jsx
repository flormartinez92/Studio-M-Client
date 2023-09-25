import { Trash, Pencil, Plus, ArrowReload } from "@/common/Icons";
import ListItem from "@/common/ListItem";
import React from "react";

export default function ActiveCourses() {
  return (
    <div>
      <h2 className="text-4xl font-mystery-mixed mt-20 mb-10 flex justify-center">
        Cursos Activos
      </h2>
      <ListItem
        text="UX Writing"
        iconOne={<Plus color="green" />}
        iconTwo={<Pencil color="blue" />}
        iconThree={<Trash color="red" />}
        className="w-[319px] h-[40px] ml-5"
      />
      <ListItem
        text="UX Research"
        iconOne={<Plus color="green" />}
        iconTwo={<Pencil color="blue" />}
        iconThree={<Trash color="red" />}
        className="w-[319px] h-[40px] ml-5"
      />
      <ListItem
        text="UI Desing"
        iconOne={<Plus color="green" />}
        iconTwo={<Pencil color="blue" />}
        iconThree={<ArrowReload color="red" />}
        className="w-[319px] h-[40px] ml-5"
      />
    </div>
  );
}

// text,
//   className,
//   iconOne,
//   iconTwo,
//   iconThree,
//   classNameText,
