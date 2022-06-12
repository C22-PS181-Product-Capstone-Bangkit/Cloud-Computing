import {
  SparklesIcon,
  ClipboardListIcon,
  ClockIcon,
} from "@heroicons/react/solid";

const value = [
  {
    icon: (
      <ClockIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "Time Saving",
    description: "Just swipe! swipe! and swipe! Pick your restaurant",
  },
  {
    icon: (
      <SparklesIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "Ease of choosing restaurant",
    description:
      "Using Machine Learning to help give recommendation based on preferences user",
  },
  {
    icon: (
      <ClipboardListIcon className="w-24 h-24 mx-auto p-5 border-2 border-cyan-410 rounded-full text-cyan-410" />
    ),
    title: "Review Restaurant",
    description: "Get to know good restaurants to visit",
  },
];

function About() {
  return (
    <div id="about" className="lg:mx-16 md:mx-12 mx-4">
      <article>
        <h1 className="text-center font-bold text-5xl pt-28 mb-12">About</h1>
        <p className="text-center font-semibold text-lg lg:w-1/2 mx-auto">
          Cemil is a restaurant recommendation app which can provide restaurant
          recommendations to users by learning about their history and
          preferences.
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
