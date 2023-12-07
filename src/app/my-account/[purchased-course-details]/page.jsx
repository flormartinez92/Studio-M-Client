"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector, useDispatch } from "react-redux";
import { changeButton } from "../../../state/features/buttonProjectSlice";
import Border from "@/common/Border";
import Button from "@/common/Button";
import { BurgerDots } from "@/common/Icons";
import Link from "next/link";
import IconButton from "@/common/IconButton";
import ModalLinkProject from "@/components/ModalLinkProject";
import ModalUpdateProject from "@/components/ModalUpdateProject";
import { fetchUser, fetchUserProject } from "@/helpers/apiHelpers";

export default function PurchasedCourseDetails({ params }) {
  const courseId = params["purchased-course-details"];
  const [courseDetails, setCourseDetails] = useState({});
  const [user, setUser] = useState(null);
  const [userProject, setUserProject] = useState("");
  const isLgBreakpoint = useMediaQuery("(min-width: 1024px)");
  const [modal, setModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const buttonProjectState = useSelector((state) => state.buttonProject);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const oneCourse = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course/all-courses/${courseId}`
        );
        setCourseDetails(oneCourse.data);

        const userData = await fetchUser();
        setUser(userData);

        const userProject = await fetchUserProject(userData._id);
        setUserProject(userProject);

        if (userProject !== "") {
          if (userProject.status) {
            return dispatch(changeButton("Proyecto Aprobado"));
          } else if (!userProject.status && userProject.comment) {
            return dispatch(changeButton("Tenés un comentario"));
          } else {
            return dispatch(changeButton("Proyecto Entregado"));
          }
        } else {
          return dispatch(changeButton("Entregar Proyecto"));
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchCourseDetails();
  }, [courseId]);

  const handleProjectClick = async () => {
    setModal(!modal);
  };

  const handleUpdateProjectClick = async () => {
    setCommentModal(!commentModal);
  };

  return (
    <>
      <ModalLinkProject
        status={modal}
        closeModal={() => setModal(false)}
        courseId={courseId}
        mail={user?.mail}
      />
      <ModalUpdateProject
        status={commentModal}
        closeModal={() => setCommentModal(false)}
        projectId={userProject?._id}
        comment={userProject?.comment}
        mail={user?.mail}
      />
      <section className="flex flex-col justify-center items-center font-ms-gothic h-auto py-[30px]">
        <div className="flex flex-col w-[260px] min-[300px]:w-[360px] min-[560px]:w-[460px] md:w-[660px] lg:w-[900px] justify-center items-start">
          <div className="flex flex-row h-6 items-center gap-3 xl:h-10">
            <IconButton>
              <BurgerDots
                width={isLgBreakpoint ? "35px" : "30px"}
                height={isLgBreakpoint ? "35px" : "30px"}
              />
            </IconButton>

            <h2
              className="text-base
          md:text-xl 
          xl:text-2xl "
            >
              Secciones del curso
            </h2>
          </div>
          {courseDetails.modules?.map((module, index) => (
            <div key={module.moduleName}>
              <h2
                className=" text-xl pt-8 pb-9 text-center
            md:pt-10 md:text-2xl md:font-mystery-mixed md:text-start  
            xl:text-4xl"
              >
                Módulo {index + 1}: {module.moduleName}
              </h2>
              {module.topics.map((topic, index) => (
                <div key={topic.topicName} className="text-start pb-9">
                  <h3
                    className="text-lg pb-4 
                md:text-2xl 
                xl:text-3xl"
                  >
                    Tema {index + 1}: {topic.topicName}
                  </h3>
                  {topic.classes.map((classInfo, index) => (
                    <ul
                      key={classInfo.classInfo}
                      className=" leading-5 text-base 
                md:text-xl
                xl:text-3xl "
                    >
                      <Link href={`/my-account/${courseId}/${classInfo._id}`}>
                        <li className="pl-3 hover:underline">{`${index + 1}. ${
                          classInfo.classInfo
                        }`}</li>
                      </Link>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="text-center pb-8">
            <h3 className="font-mystery-mixed text-xl pb-9 md:text-2xl lg:text-4xl">
              Proyecto Final: {courseDetails.projectsTitle}
            </h3>
            <p className="text-base leading-5 pb-12 md:text-lg md:leading-5 lg:text-3xl lg:leading-8">
              {courseDetails.projectsDescription}
            </p>
            <p className="text-lg leading-5 md:text-xl md:leading-6 lg:text-4xl lg:leading-9">
              {courseDetails.projectAim}
            </p>
          </div>
          <div className="flex items-center justify-center mb-16 mt-2.5 py-10 w-full">
            <Border className="flex w-auto h-auto border-[3px] border-pink shadow-xl">
              <Button
                onClick={() => {
                  if (buttonProjectState === "Entregar Proyecto") {
                    handleProjectClick();
                  } else if (buttonProjectState === "Tenés un comentario") {
                    handleUpdateProjectClick();
                  }
                }}
                disabled={
                  buttonProjectState === "Proyecto Entregado" ||
                  buttonProjectState === "Proyecto Aprobado"
                }
                className="p-2 font-mystery-mixed text-lg m-2.5 md:text-3xl md:py-2.5 md:px-8 xl:text-4xl"
              >
                {userProject === ""
                  ? `${buttonProjectState}`
                  : userProject.status
                  ? `${buttonProjectState}`
                  : `${buttonProjectState}`}
              </Button>
            </Border>
          </div>
        </div>
      </section>
    </>
  );
}
