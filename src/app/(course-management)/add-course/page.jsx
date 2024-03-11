"use client";

import AddCourse from "@/components/addCourse";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";
import NotFound from "@/common/NotFound";

export default function AddCourseAdmin() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const user = await fetchUser();
      dispatch(setCredentials(user));
    };
    checkUserAuthentication();
  }, []);

  return (
    <>
      {user && user.isAdmin ? (
        <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
          <AddCourse />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
