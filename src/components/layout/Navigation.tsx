import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <nav className="flex justify-between items-center border-b p-4 container mx-auto">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl bg-transparent hover:bg-blue-300/20 transition-all rounded-lg px-4 py-2"
        >
          TextSnap
        </Link>
        <div>
          <Link href="/ocr" className="text-xl bg-blue-300/10 px-4 py-2 rounded-lg">OCR</Link>
        </div>
      </nav>
    </div>
  );
}
