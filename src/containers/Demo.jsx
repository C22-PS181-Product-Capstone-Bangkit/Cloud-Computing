import { VideoCameraIcon } from "@heroicons/react/solid";

function Demo() {
  return (
    <div id="demo" className="lg:mx-16 md:mx-12">
      <h1 className="text-center font-bold text-5xl pt-28 mb-16">Demo</h1>
      <section className="w-full h-96 bg-gradient-to-br from-gray-300 to-gray-200 text-gray-600 flex flex-col items-center justify-center">
        <VideoCameraIcon className="h-24 w-24" />
        <h1 className="text-center font-semibold text-2xl mb-8">Video masih dalam pembuatan</h1>
      </section>
    </div>
  );
}

export default Demo;
