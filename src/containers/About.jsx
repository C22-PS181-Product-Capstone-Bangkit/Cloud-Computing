import { SparklesIcon, ShieldCheckIcon, CakeIcon } from "@heroicons/react/solid";

const value = [
  {
    icon: (
      <CakeIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "Food",
    description: "Makanan berbagai pilihan dengan beragam kategori",
  },
  {
    icon: (
      <SparklesIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "App",
    description: "Terintegrasi Machine Learning untuk belajar karakteristik pengguna",
  },
  {
    icon: (
      <ShieldCheckIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "Security",
    description: "Data pengguna aman dan terlindungi",
  },
];

function About() {
  return (
    <div id="about" className="lg:mx-16 md:mx-12 mx-4">
      <article>
        <h1 className="text-center font-bold text-5xl pt-28 mb-16">Tentang</h1>
        <p className="text-center font-semibold text-lg">
          Cemil adalah aplikasi untuk membantu untuk memberikan rekomendasi
          makanan
        </p>
      </article>
      <div className="max-w-4xl mx-auto">
        <section className="flex flex-wrap justify-center my-8">
          {value.map((arr, index) => (
            <>
              <article className="flex w-64 mx-5 my-8 flex-col text-center">
                {arr.icon}
                <div className="mt-8">
                  <h1 className="text-xl mb-3">{arr.title}</h1>
                  <p>{arr.description}</p>
                </div>
              </article>
            </>
          ))}
        </section>
      </div>
    </div>
  );
}

export default About;
