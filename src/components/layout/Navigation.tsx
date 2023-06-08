import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between items-center border-b p-4 container mx-auto">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl bg-transparent hover:bg-accent-700/20 transition-all rounded-lg px-4 py-2"
        >
          TextSnap
        </Link>
        <div className="rounded-lg bg-accent-700/10 py-2 divide-x-2">
          <Link
            href="/ocr"
            className="text-xl hover:bg-accent-700/30 px-6 py-2 rounded-l-lg duration-200"
          >
            OCR
          </Link>
          <Link
            href="/how-to-use"
            className="text-xl hover:bg-accent-700/30 px-6 py-2 rounded-r-lg duration-200"
          >
            How To Use
          </Link>
        </div>
      </nav>
    </div>
  );
}
