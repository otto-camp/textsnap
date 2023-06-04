import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-center items-center border-b p-4">
      <Link
        href="/"
        className="text-xl sm:text-2xl md:text-3xl bg-transparent hover:bg-green-300/20 transition-all rounded-lg px-4 py-2"
      >
        TextSnap
      </Link>
    </nav>
  );
}
