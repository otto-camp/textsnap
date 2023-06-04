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
      <main className="container mx-auto py-6">
        <section className="p-4">
          <h3 className="text-2xl font-bold mb-4">About TextSnap</h3>
          <p className="text-gray-800">
            TextSnap is a free online tool that allows you to easily convert
            images to editable text. Simply upload your image and we&apos;ll do the
            rest!
          </p>
          <div className="mt-8">{/* Insert eye-catching visuals here */}</div>
          <div className="mt-8">
            {/* Insert testimonials or user reviews here */}
          </div>
        </section>
      </main>
    </div>
  );
}
