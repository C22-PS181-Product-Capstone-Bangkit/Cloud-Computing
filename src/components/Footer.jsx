const Footer = () => {
  return (
    <footer className="md:grid-cols-4 grid-cols-2 grid bg-gray-900 pt-5 gap-3 text-gray-400 min-h-full mt-16 font-semibold">
      <section className="mx-6 text-right">
        <p>Logo</p>
      </section>
      <section className="mx-6">
        <p>Cemil adalah aplikasi rekomendasi makanan</p>
      </section>
      <section className="mx-6">
      </section>
      <section className="text-center mx-6">
      </section>
      <section className="md:col-span-4 col-span-2 bg-gray-800 text-center py-2 mt-12">
        <p className="text-xs">© Copyright 2022 Cemil Choose Your Meal</p>
      </section>
    </footer>
  );
};

export default Footer;
