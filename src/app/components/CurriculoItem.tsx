import React from "react";
import type { ICurriculoItem } from "@/interfaces/curriculo";
import Periodo from "./Periodo";

const CurriculoItem = ({ item }: { item: ICurriculoItem }) => {
  return (
    <div className="flex flex-col md:flex-row mb-10 p-5 rounded-xl shadow-xl border-2 border-gray-900">
      {item.periodo !== undefined && <Periodo item={item} />}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-bold">{item.titulo}</h1>
        <div dangerouslySetInnerHTML={{ __html: item.descricao }} />
      </div>
    </div>
  );
};

export default CurriculoItem;
