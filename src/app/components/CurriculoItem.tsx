import type { ICurriculoItem } from "@/interfaces/curriculo";
import Periodo from "./Periodo";

const CurriculoItem = ({ item }: { item: ICurriculoItem }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 40,
        borderRadius: 10,
        padding: 10,
        boxShadow: "10px 10px 40px 0px rgba(189,189,189,1)",
        backgroundColor: "transparent",
      }}
    >
      {item.periodo !== undefined && <Periodo item={item} />}
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
    </div>
  );
};

export default CurriculoItem;
