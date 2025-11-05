import React from "react";
import { ICurriculoItem } from "@/interfaces/curriculo";

export interface IPeriodoProps {
  item: ICurriculoItem
}

const Periodo = (props:IPeriodoProps) => {
  return (
    <div className="text-center flex flex-col border-4 rounded-lg p-1 mr-10 min-w-[150px] min-h-5 content-center justify-center">
          <h5>de: {props.item?.periodo?.inicio}</h5>
          <h5>até: {props.item?.periodo?.fim}</h5>
    </div>
  );
}

export default Periodo
