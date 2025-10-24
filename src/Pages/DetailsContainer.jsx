// import React, { useEffect, useState } from "react";
import CardDetails from "../Components/CardDetails";
import CardDetailsForm from "../Components/CardDetailsForm";
import { useLoaderData, useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

const DetailsContainer = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    const cardDetails = data.find((singleCard) => singleCard.id == id);
    setCard(cardDetails);
  }, [data, id]);

  return (
    <div className="bg-[#FAF5F2]">
      <Navbar />
      <section className="grid md:grid-cols-12 gap-5 lg:grid-cols-12 w-11/12 mx-auto my-10">
        <div className="col-span-8 ">
          <CardDetails card={card}></CardDetails>
        </div>
        <div className="col-span-4  flex items-center">
          <CardDetailsForm></CardDetailsForm>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailsContainer;
