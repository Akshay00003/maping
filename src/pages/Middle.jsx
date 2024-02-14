import React, { useEffect, useState } from "react";
import { getAllData } from "../Api services/api";

const Middle = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Data = await getAllData();
      setElements(Data);
    };
    fetchData();
  }, []);
  // console.log(lists);
  return (
    <div className="min-h-screen bg-red-400 w-full justify-center items-center">
      {elements.map((x) => {
      return x.data.map(item=>{
        return<div key={item._id}>
            <p>{item.films}</p>
        </div>
      })
      })}
    </div>
  );
};

export default Middle;
