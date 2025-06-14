import React from "react";
import { clients } from "../constants";
import styles from "../styles";
const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className={`${styles.flexCenter} sm:min-w-[192px] flex-1 min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[192px] object-contain hover:filter hover:brightness-0 hover:invert transition duration-300"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Client;
