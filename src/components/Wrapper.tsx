"use client";

import { useState } from "react";
import Ocr from "./Ocr";
import TextContainer from "./TextContainer";
import Error from "./Error";

function Wrapper() {
  const [imageText, setImageText] = useState("Waiting for your image...");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  return (
    <div className="p-4 flex-1">
      <div className="max-w-7xl mx-auto mb-8">
        {error ? <Error error={error} /> : ""}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full">
          <Ocr
            setText={setImageText}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
        <div className="w-full">
          <TextContainer loading={loading} text={imageText} />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
