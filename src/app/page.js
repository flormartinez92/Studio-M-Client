"use client";

import Cover from "@/components/Cover";
import Intro from "@/components/Intro";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/user/me", { withCredentials: true })

      .then(({ data: { user } }) => {
        if (user) {
          router.push("/");
          dispatch(setCredentials(user));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Cover />
      <Intro />
    </main>
  );
}
