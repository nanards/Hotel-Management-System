import React, { useEffect, useState } from "react";
import HeadTitle from "../common/HeadTitle/HeadTitle";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sdata from "../component/Destinations/Sdata";
import EmptyFile from "../common/EmptyFile/EmptyFile";

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destination" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc2}</p>

                <div className="para flex_space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara2}</p>
                  <p>{item.sidepara6}</p>
                  <p>{item.sidepara7}</p>
                  <p>{item.sidepara8}</p>
                  <p>{item.sidepara9}</p>

                </div>
                <h1>What is the {item.title} City?</h1>
                <p>{item.desc3}</p>
                <p>{item.desc5}</p>
                <p>{item.desc6}</p>
                <p>{item.desc7}</p>
                <p>{item.desc8}</p>
                <p>{item.desc9}</p>

                <div className="image grid1">
                  <img src={item.paraImage_one} alt="" />
                  <img src={item.paraImage_two} alt="" />
                </div>
                <p>{item.desc4}</p>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara3}</p>
                  <p>{item.sidepara4}</p>
                  <button className="outline-btn">
                    <i className="fa fa-phone-alt"></i>
                    Contact Us
                  </button>
                </div>

                <div className="box2">
                <p>{item.sidepara5}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default SinglePage;
