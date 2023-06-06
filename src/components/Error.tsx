import { useOcrContext } from "@/context/OcrContext";

function Error() {
  const { error } = useOcrContext();
  return (
    <div className="bg-red-700 w-full p-6 text-center font-medium rounded-lg">
      {error.toString()}
    </div>
  );
}

export default Error;
