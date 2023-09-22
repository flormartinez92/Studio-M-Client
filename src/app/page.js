import ActiveCourses from "@/components/ActiveCourses";
import Cover from "@/components/Cover";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main>
      <Cover />
      <Intro />
      <ActiveCourses />
    </main>
  );
}
