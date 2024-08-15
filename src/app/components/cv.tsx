import { curriculo, ICurriculoItem } from "@/lib/constants";
const Cv = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 20}}>
      {curriculo.map((item: ICurriculoItem, index) => (
        <section style={{ display: "flex", flexDirection: "row",  marginBottom: 10, borderWidth: 1, borderRadius: 10}} key={index}>
          <div
            style={{
              padding: 10,
              margin: 10,
              minWidth: 150,
              justifyContent: "center",
            }}
          >
            {item.periodo !== undefined && (
              <>
                <h5>de: {item?.periodo?.inicio.toLocaleDateString("pt-br")}</h5>
                <h5>até: {item?.periodo?.fim.toLocaleDateString("pt-br")}</h5>
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h1 className="text-3xl">{item.titulo}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.descricao }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Cv;
