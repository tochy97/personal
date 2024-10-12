import { useQuery } from "@apollo/client";
import React, { ReactElement } from "react";

import { container } from "./model/classNames";
import Floaters from "../Floaters/Floaters";

type Props = {
  display: ReactElement<any, any>;
};

export default function Content({ display }: Props) {
  // const { loading, error, data } = useQuery();
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  // return data.locations.map(({ id, name, description, photo }) => (
  //   <div key={id}>
  //     <h3>{name}</h3>
  //     <img width="400" height="250" alt="location-reference" src={`${photo}`} />
  //     <br />
  //     <b>About this location:</b>
  //     <p>{description}</p>
  //     <br />
  //   </div>
  // ));
  return (
    <main className={container}>
      <Floaters/>
      {display}
    </main>
  );
}
