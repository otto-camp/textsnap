import CTA from "./CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto text-center space-y-6 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black animate-text bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-white to-rose-600">
          TextSnap
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Convert Images to Editable Text
        </h2>
        <CTA />
      </header>
    </div>
  );
}
