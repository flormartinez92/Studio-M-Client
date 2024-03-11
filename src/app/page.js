"use client";

import Cover from "@/components/Cover";
import Intro from "@/components/Intro";
import { setCredentials } from "@/state/features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import "animate.css";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/me`, {
        withCredentials: true,
      })

      .then(({ data: { user } }) => {
        if (user) {
          router.push("/");
          dispatch(setCredentials(user));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      <Cover />
      <Intro />
    </main>
  );
}
