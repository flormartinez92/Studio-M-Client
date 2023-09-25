import Button from "@/common/Button";
import { Trash, Pencil, Plus, ArrowReload } from "@/common/Icons";
import ListItem from "@/common/ListItem";
import React from "react";

export default function ActiveCourses() {
  return (
    <div className="px-4 md:px-0">
      <h2 className="text-4xl font-mystery-mixed mt-20 mb-10 text-center flex justify-center">
        Cursos Activos
      </h2>
      <div className="md:space-y-0 md:flex md:justify-start">
        <ListItem
          text="UX Writing"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<Trash color="#A31616" />}
          className="w-full md:w-[319px] h-[40px]"
        />
        <ListItem
          text="UX Research"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<Trash color="#A31616" />}
          className="w-full md:w-[319px] h-[40px]"
        />
        <ListItem
          text="UI Design"
          iconOne={<Plus color="#4FE21B" />}
          iconTwo={<Pencil color="#1BBEE2" />}
          iconThree={<ArrowReload color="#E21B7B" />}
          className="w-full md:w-[319px] h-[40px]"
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
    </div>
  );
}
