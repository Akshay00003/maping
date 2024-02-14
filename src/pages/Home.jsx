import axios from "axios";
import { getAllData } from "../Api services/api";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Data = await getAllData();
      setLists(Data);
    };
    fetchData();
  }, []);
  console.log(lists);
  return (
    <div className="min-h-screen w-full bg-gray-500 justify-center items-center flex">
      <ul>
    {Object.entries(lists).map(x=>{console.log(x)
    return Object.values(x).map(i=>{console.log(i)
    return Object.values(i).map(l=>{console.log(l)
{/* return Object.values(l).map(y=>console.log(y.films)) */}
    })
    })
  

    })}
      </ul>
    </div>
  );
};

export default Home;
