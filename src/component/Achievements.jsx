import React from "react";
import "./achievement.css";
import cpImg from "./images/1.png";
import cpcImg from "./images/2.png";
import cpquiz from "./images/3.png";
import dsaImg from "./images/4.png";
import dsacImg from "./images/5.png";
import dsaquiz from "./images/6.png";
import html from "./images/7.png";
import dweb from "./images/8.png";
import jsf from "./images/9.png";
import search from "./images/10.png";
import btrack from "./images/11.png";
import tail from "./images/12.png";

const Achievements = () => {
  return (
    <>
      <div className="contents">
        <div className="partition-line"></div>
        <div className="heading">
          <h1>ACHIEVEMENTS</h1>
        </div>
        <div className="display-certi">
          <div
            className="card border border-danger mb-3 "
            style={{ height: "200px", width: "18rem", margin: "35px" }}
          >
            <img src={cpImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodyss">
              <p className="card-text">Computer-Programming</p>
            </div>
          </div>

          <div
            className="card border border-danger mb-3"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={cpcImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Coding-Challenges</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={cpquiz} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Quiz Assessment</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsaImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Design & Analysis Algo</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsacImg} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">DSA coding challenge</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dsaquiz} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Dsa Quiz-Assessment</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={search} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Sorting & Searching Algo</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={btrack} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Recursion & Back Tracking</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={html} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">HTML & CSS</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={dweb} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">Dynamic Web Design</p>
            </div>
          </div>

          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={jsf} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">JavaScript Foundation</p>
            </div>
          </div>
          <div
            className="card"
            style={{ height: "250px", width: "18rem", margin: "35px" }}
          >
            <img src={tail} className="card-img-top zoom-img" alt="..." />
            <div className="card-bodys">
              <p className="card-text">TailWind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
