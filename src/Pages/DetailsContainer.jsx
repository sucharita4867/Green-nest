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
  //   console.log(data, id, card);
  useEffect(() => {
    const cardDetails = data.find((singleCard) => singleCard.id == id);
    setCard(cardDetails);
  }, [data, id]);
  //   const [card, setCard] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("/plants.json")
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error("Failed to fetch plants.json");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         const cardDetails = data.find(
  //           (singleCard) => singleCard.id === parseInt(id)
  //         );
  //         setCard(cardDetails || null);
  //       })
  //       .catch((err) => setError(err.message))
  //       .finally(() => setLoading(false));
  //   }, [id]);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;
  //   if (!card) return <p>Card not found!</p>;

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
