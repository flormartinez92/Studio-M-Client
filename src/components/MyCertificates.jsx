import React from "react";
import Image from "next/image";
import Border from "@/common/Border";
import IconButton from "@/common/IconButton";
import { Download, Share } from "@/common/Icons";

const MyCertificates = () => {
  return (
    <>
      {/*modo mobile*/}
      <div className=" py-12 md:hidden">
        <div className="flex justify-center py-4">
          <Border className="border-pink border-2 w-[80%]">
            <div className="flex items-center w-full">
              <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-pink">
                <h2 className=" font-mystery-mixed text-3xl">Ux Research</h2>
                <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
              </div>
              <div className="w-[30%] flex justify-center">
                <IconButton className="flex flex-col">
                  <Download />
                  <Share />
                </IconButton>
              </div>
            </div>
          </Border>
        </div>
        <div className="flex justify-center py-4">
          <Border className="border-blue border-2 w-[80%]">
            <div className="flex items-center w-full">
              <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-blue">
                <h2 className=" font-mystery-mixed text-3xl">Ux Writing</h2>
                <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
              </div>
              <div className="w-[30%] flex justify-center">
                <IconButton className="flex flex-col">
                  <Download />
                  <Share />
                </IconButton>
              </div>
            </div>
          </Border>
        </div>
        <div className="flex justify-center py-4">
          <Border className="border-green border-2 w-[80%]">
            <div className="flex items-center w-full">
              <div className="w-[70%] flex flex-col items-center border-r-2 border-solid border-green">
                <h2 className=" font-mystery-mixed text-3xl">Ux Desing</h2>
                <h3 className=" font-ms-gothic text-sm">03/08/23</h3>
              </div>
              <div className="w-[30%] flex justify-center">
                <IconButton className="flex flex-col">
                  <Download />
                  <Share />
                </IconButton>
              </div>
            </div>
          </Border>
        </div>
      </div>

      {/*modo desktop*/}
      <div className="hidden md:flex md:justify-center">
        <div className="relative">
          <Image
            src="/img/paper-background.png"
            width={900}
            height={900}
            alt="Picture"
            className="mt-3"
          />
          <div className="absolute pt-8 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-2xl font-mystery-mixed">Certificado</h2>
            <h3 className="text-3xl font-mystery-mixed">Ux Researcher</h3>
            <p className="text-base font-ms-gothic">Emilia Rodriguez</p>
            <p className="text-base font-ms-gothic">DNI: 36.363.363</p>
            <p className="text-sm font-ms-gothic">
              Ha realizado y completado con éxito su curso en by M Studio,
              cumpliendo con todos los requisitos académicos exigidos
            </p>
            <p className="text-base font-ms-gothic">03 de Agosto de 2023</p>
          </div>
          <div className="absolute top-16 right-10">
            <IconButton className="flex flex-col">
              <Download />
              <Share />
            </IconButton>
          </div>
          <div className="absolute bottom-20 left-40 flex">
            <h3 className=" font-mystery-mixed text-xl">Studio by M</h3>
          </div>
          <div className=" absolute bottom-12 right-44">
            <h3 className=" font-ms-gothic text-sm text-center">
              <span>Macarena</span>
              <br />
              <span>Bernal</span>
            </h3>
          </div>
          <Image
            src="/img/firma.png"
            width={100}
            height={100}
            alt="Picture"
            className="w-[40px] h-[70px] absolute right-48 bottom-24"
          />
        </div>
      </div>
    </>
  );
};

export default MyCertificates;