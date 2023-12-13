import React, { useEffect, useState } from "react";

const CountriesGame = ({ data }) => {
  // useState(cData,Setdata)=useState("");
  // Setdata(data);

  const [cdata, Setdata] = useState({});
  const [countryArr, setCountryArr] = useState([]);
  const [capArr, setCapArr] = useState([]);
  //   let countryArr=[];
  //   let capArr =[];

  useEffect(() => {
    data.map((i, val) => {
      countryArr.push(Object.keys(i).toString());
      capArr.push(Object.values(i).toString());
    });

    // console.log(countryArr, "countryArr");
    // console.log(capArr, "capArr");
    setCountryArr(countryArr);
    setCapArr(capArr);
  }, []);

  function checkCountry(e) {
    // console.log(Object.keys(cdata[0]), "C");
    // console.log(Object.values(cdata[0]), "C");
    console.log(e.target.value, "Data");
  }

  return (
    <div>
      {countryArr.map((i, val) => {
        return <h3>{i}</h3>;
      })}
    </div>
  );
};

export default CountriesGame;
