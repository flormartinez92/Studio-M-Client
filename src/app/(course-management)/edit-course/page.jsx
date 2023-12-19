"use client";

import EditCourse from "@/components/editCourse";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchUser } from "@/helpers/apiHelpers";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";

export default function EditCourseAdmin() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const userData = await fetchUser();
      dispatch(setCredentials(userData));
    };
    checkUserAuthentication();
  }, []);

  if (!user || !user.isAdmin) {
    router.push("/");
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-[105px] ">
      <EditCourse />
    </div>
  );
}
