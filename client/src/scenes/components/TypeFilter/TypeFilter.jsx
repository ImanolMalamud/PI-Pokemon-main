import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, setFilterByType } from "../../../redux/actions";
import { typesData } from "../../../data/typesData";

const TypeFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const types = useSelector((state) => state.types);

  let renderTypes = types.length ? types : typesData;

  const handleChangeFilter = (e) => {
    // console.log(e.target.value);
    dispatch(setFilterByType(e.target.value));
  };

  return (
    <select
      className="form-select filterCategory"
      aria-label="Default select example"
      name="type"
      id="type"
      onChange={handleChangeFilter}
      defaultValue={"All Types"}
    >
      {renderTypes[0] ? (
        renderTypes.map((type, index) => {
          return <option key={index}>{type.name}</option>;
        })
      ) : (
        <option key={"no types found"}>No types found</option>
      )}
    </select>
  );
};

export default TypeFilter;
