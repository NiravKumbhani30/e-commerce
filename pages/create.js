import Link from "next/link";

import React, { useState } from "react";

const create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [media, setMedia] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDeafault();
    console.log(name,price,media,description)
  };
  return (
    <div>
      <div className="col-6  m-auto  mt-5  p-5 rounded bg-body-secondary bg-dark">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            className="form-control"
            type="text"
            name="price"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            className="form-control"
            type="file"
            name="media"
            placeholder="Enter Product Image"
            accept="image*/"
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <br />
          <textarea
            className="form-control"
            name="description"
            placeholder="Descriptpion"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <div className="text-center pt-4">
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary  px-5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default create;
