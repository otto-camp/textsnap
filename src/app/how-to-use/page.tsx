export default function HowToUse() {
  return (
    <main className="space-y-12 md:space-y-24 py-8 md:py-16">
      <section id="upload" className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-b pb-2">
            Uploading an Image
          </h2>
          <ul className="space-y-2 list-disc pl-4 sm:pl-12">
            <li>
              Click the &quot;Upload Image&quot; button or drag and drop an
              image file into the designated drop zone.
            </li>
            <li>
              If you clicked the &quot;Upload Image&quot; button, a file
              explorer window will open. Select the image file you want to
              convert and click &quot;Open.&quot;
            </li>
            <li>
              If you dragged and dropped the image file, TextSnap will
              automatically detect and process the image.
            </li>
            <li>
              Wait for the image to be uploaded and processed. This may take a
              few seconds depending on the size of the image and your internet
              connection.
            </li>
          </ul>
        </div>
      </section>
      <section id="convert" className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-b pb-2">
            Viewing the Extracted Text
          </h2>
          <ul className="space-y-2 list-disc pl-4 sm:pl-12">
            <li>
              Once the image has been processed, scroll down to the bottom of
              the page or if you are in bigger screen check right side of page.
            </li>
            <li>The extracted text will be displayed in a text box.</li>
          </ul>
        </div>
      </section>
      <section id="download-or-copy" className="container mx-auto px-4">
        <div className="space-y-4 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl border-b pb-2">
            Download or Copy the Extracted Text
          </h2>
          <ul className="space-y-2 list-disc pl-4 sm:pl-12">
            <li>
              If you want to save the extracted text to your device, click the
              &quot;Download&quot; button to download the text as a file.
            </li>
            <li>
              If you prefer to copy the text to your clipboard for easy pasting,
              click the &quot;Copy&quot; button.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
