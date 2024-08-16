import { curriculo, ICurriculoItem } from "@/lib/constants";
const Cv = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
      {curriculo.map((item: ICurriculoItem, index) => (
        <section
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 40,
            borderRadius: 10,
            padding: 10,
            boxShadow: "10px 10px 40px 0px rgba(189,189,189,1)",
            backgroundColor: "transparent"
          }}
        >
          <Periodo item={item} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className="text-3xl">{item.titulo}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.descricao }} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Cv;



export interface IPeriodoProps {
  item: ICurriculoItem
}
const Periodo = (props:IPeriodoProps) => {
  return(
    <div
    style={{
      borderWidth: 4,
      borderRadius: 10,
      padding: 10,
      marginTop:0,
      marginRight: 10,
      marginLeft: 0,
      marginBottom: 0,
      minWidth: 150,
      justifyContent: "center",
      alignContent: "center",
      background: "#d3d3d3",
      minHeight: 100,
      color: "#484848"
    }}
  >
    {props.item.periodo !== undefined && (
      <>
        <h5>de: {props.item?.periodo?.inicio.toLocaleDateString("pt-br")}</h5>
        <h5>até: {props.item?.periodo?.fim.toLocaleDateString("pt-br")}</h5>
      </>
    )}
  </div>
  );
}