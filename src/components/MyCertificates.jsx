import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios"
import { Download, Share } from "@/common/Icons";
import Border from "@/common/Border";
import IconButton from "@/common/IconButton";

const MyCertificates = () => {
  const { user } = useSelector((store) => store.auth);
  const [userCertificates, setUserCertificates] = useState([]);

  useEffect(() => {
    if (user?.id) {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/certificate/${user?.id}`)
          .then((res) => setUserCertificates(res.data));
          //setCurrentTitle(title);
      } catch (error) {
        console.error(error);
      }
    }
  }, [user?.id]);
  console.log(userCertificates);

  return (
    <>
      {/*modo mobile*/}
      <div className=" py-12 md:hidden">
        {userCertificates?.map((userCertificate) => (
        <div className="flex justify-center py-4" key={userCertificate}>
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
        ))}
        {/* <div className="flex justify-center py-4">
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
        </div> */}
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[70%]">
            {" "}
            {/*pt-8 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center */}
            <div className="flex flex-col align-center items-center my-2 gap-y-1">
              <h2 className="text-[20px] font-mystery-mixed mb-1 lg:text-[24px]">
                Certificado
              </h2>
              <h3 className="text-2xl font-mystery-mixed lg:text-3xl">
                Ux Researcher
              </h3>
              <p className="text-sm font-ms-gothic lg:text-base">
                Emilia Rodriguez
              </p>
              <p className="text-sm font-ms-gothic lg:text-base">
                DNI: 36.363.363
              </p>
              <p className="text-sm font-ms-gothic mb-2 mt-2 lg:text-base">
                Ha realizado y completado con éxito su curso en by M Studio,{" "}
                <br />
                cumpliendo con todos los requisitos académicos exigidos
              </p>
              <p className="text-sm font-ms-gothic lg:text-base">
                03 de Agosto de 2023
              </p>
              <div className="flex flex-row justify-around align-center items-center w-full">
                <div>
                  <h3 className=" font-mystery-mixed text-[18px] lg:text-[22px]">
                    Studio by M
                  </h3>
                </div>
                <div className="flex flex-col items-center align-center">
                  <Image
                    src="/img/firma.png"
                    width={100}
                    height={100}
                    alt="Signature"
                    className="w-[35px] h-[60px] lg:w-[39px] lg:h-[64px]"
                  />
                  <div className="">
                    <h4 className=" font-ms-gothic text-xs text-center lg:text-sm ">
                      Macarena <br />
                      Bernal
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-16 right-10">
            <IconButton className="flex flex-col">
              <Download />
              <Share />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCertificates;
