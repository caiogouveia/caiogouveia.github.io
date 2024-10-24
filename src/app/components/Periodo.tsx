
import { ICurriculoItem } from "@/interfaces/curriculo";

export interface IPeriodoProps {
  item: ICurriculoItem
}

const Periodo = (props:IPeriodoProps) => {
  return (
    <div
      style={{
        borderWidth: 4,
        borderRadius: 10,
        padding: 10,
        marginTop: 0,
        marginRight: 25,
        marginLeft: 0,
        marginBottom: 0,
        minWidth: 150,
        justifyContent: "center",
        alignContent: "center",
        background: "#d3d3d3",
        minHeight: 100,
        color: "#484848",
      }}
    >
        <>
          <h5>de: {props.item?.periodo?.inicio}</h5>
          <h5>até: {props.item?.periodo?.fim}</h5>
        </>
    </div>
  );
}

export default Periodo
