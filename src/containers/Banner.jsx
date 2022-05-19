import { DownloadIcon } from "@heroicons/react/solid";

function Banner() {
  return (
    <div
      id="home"
      className="md:flex bg-gradient-to-tr from-cyan-600 to-cyan-200 h-96 -mt-4"
    >
      <div className="md:w-1/2 h-1/3"></div>
      <div className="md:w-1/2 my-auto ml-6">
        <h1 className="text-4xl font-semibold">Bingung makan apa?</h1>
        <p className="text-lg mt-6 font-semibold">
          Yuk! Install Aplikasi Cemil dan lihat berbagai makanan
        </p>
        <section className="mt-8">
          <button type="button">
            <span className="flex justify-center items-center gap-4 bg-cyan-200 px-5 py-3 rounded-3xl hover:bg-cyan-300 active:opacity-75">
              <DownloadIcon className="w-5 h-5" /> Download
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default Banner;
