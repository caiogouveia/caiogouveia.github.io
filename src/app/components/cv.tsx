import { conhecimentos, curriculo } from "@/lib/constants";
import { ICurriculoItem } from "@/interfaces/curriculo";
import CurriculoItem from "@/app/components/CurriculoItem";

const Cv = () => {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between">
        <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          Conhecimentos:
        </h1>
      </section>
      {conhecimentos.map((item: ICurriculoItem, index) => (
          <CurriculoItem key={index} item={item} />
        ))}
      <section className="flex-col md:flex-row flex items-center md:justify-between">
        <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
          Experiência:
        </h1>
      </section>
      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
      >
        {curriculo.map((item: ICurriculoItem, index) => (
          <CurriculoItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default Cv;
