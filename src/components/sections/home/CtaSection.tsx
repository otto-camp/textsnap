import dynamic from "next/dynamic";

const CtaImageUpload = dynamic(() => import("@/components/CtaImageUpload"));

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
        Convert Image From Text
      </h2>
      <CtaImageUpload />
    </section>
  );
}