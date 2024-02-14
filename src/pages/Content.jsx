import React from "react";
import lists from "./List";

const Content = () => {
    // console.log(lists);
  return (
    <div className="min-h-screen w-full bg-gray-300">
      {lists.map((x) => {
        return x.data.map(item=>{
            return<div key={item._id}>

                <p>{item.films}</p>
                <p>{item.videoGames}</p>
                <p>{item.sourceUrl}</p>
            </div>
        })
      })}
      hello
    </div>
  );
};

export default Content;
