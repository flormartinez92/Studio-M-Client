import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black text-white text-2xl flex flex-col items-center justify-center h-screen">
      <h2>404 | This page could not be found</h2>
      <Link href="/">
        <h3 className="text-xl mt-2">Return Home</h3>
      </Link>
    </div>
  );
}
