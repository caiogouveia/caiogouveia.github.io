import { curriculo } from "@/lib/constants";
const Cv = () => {
  return (
    <div>
      {curriculo.map((item, index) => (
        <section className="mb-4" key={index}>
          <h1 className="text-3xl">{item.titulo}</h1>
          {item.descricao}
        </section>
      ))}
    </div>
  );
};

export default Cv;
