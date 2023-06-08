import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";

export default function Dropzone({
  func,
}: {
  func: (event?: any) => Promise<void> | void;
}) {
  return (
    <div className="rounded-lg border-2 border-dashed p-4 py-8 relative flex flex-col justify-center items-center bg-accent-600/10 hover:bg-accent-600/30 hover:transition w-full space-y-4">
      <input
        onChange={(e) => func(e)}
        accept="image/*"
        type="file"
        aria-label="image"
        className="w-full absolute inset-0 z-[1] opacity-0 cursor-pointer"
      />
      <div className="grid items-center text-center gap-1">
        <PhotoIcon />
        <strong>Click to upload a file</strong>
        <span>or drag and drop</span>
        <strong>or paste directly</strong>
      </div>
    </div>
  );
}
