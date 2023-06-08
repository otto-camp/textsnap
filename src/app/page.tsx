import CtaSection from "../components/sections/home/CtaSection";
import HowToUseSection from "../components/sections/home/HowToUseSection";

export default function Home() {
  return (
    <div className="">
      <header className="container mx-auto text-center space-y-6 mt-8">
        <div className="my-12 md:my-16 space-y-4 sm:space-y-8 md:space-y-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black">
            Convert Images to Text within seconds
          </h1>
          <p className="sm:text-lg md:text-xl">
            Effortlessly extract editable text from images using our advanced
            OCR technology.
          </p>
        </div>
        <CtaSection />
      </header>
      <main className="container mx-auto py-6">
        <HowToUseSection />
      </main>
    </div>
  );
}
