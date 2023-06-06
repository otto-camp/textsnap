import CTA from "./CTA";
import HowToUse from "./HowToUse";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="container mx-auto text-center space-y-6 mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black">
          Convert Images to Text within seconds
        </h1>
        <p className="sm:text-lg">
          Effortlessly extract editable text from images using our advanced OCR
          technology.
        </p>
        <CTA />
      </header>
      <main className="container mx-auto py-6">
        <HowToUse />
      </main>
    </div>
  );
}
