import Button from "@/common/Button";
import IconButton from "@/common/IconButton";
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
        iconOne={<Plus color="#4FE21B" />}
        iconTwo={<Pencil color="#1BBEE2" />}
        iconThree={<Trash color="#A31616" />}
        className="w-[319px] h-[40px] ml-5"
      />
      <ListItem
        text="UX Research"
        iconOne={<Plus color="#4FE21B" />}
        iconTwo={<Pencil color="#1BBEE2" />}
        iconThree={<Trash color="#A31616" />}
        className="w-[319px] h-[40px] ml-5"
      />
      <ListItem
        text="UI Desing"
        iconOne={<Plus color="#4FE21B" />}
        iconTwo={<Pencil color="#1BBEE2" />}
        iconThree={<ArrowReload color="#E21B7B" />}
        className="w-[319px] h-[40px] ml-5"
      />
      <div className="flex justify-end mt-6 mr-24">
        <Button className="w-[120px] h-[40px] bg-[#389817] flex items-center rounded-md">
          <Button className=" bg-[#389817] rounded-md p-1">
            {<Plus className="text-white" />}
          </Button>
          <span className="text-white">Crear curso</span>
        </Button>
      </div>
    </div>
  );
}
