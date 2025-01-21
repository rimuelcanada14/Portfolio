import React, { useState, useEffect } from 'react';
import './SkillsPage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const SkillsPage = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  //for framework data
  const [Fdata, setFData] = useState([]);
  const [Floading, setFLoading] = useState(true);
  //for back-end data
  const [Bdata, setBData] = useState([]);
  const [Bloading, setBLoading] = useState(true);
  //for back-end data
  const [Dbdata, setDbData] = useState([]);
  const [Dbloading, setDbLoading] = useState(true);

  useEffect(() => {
    const fetchFData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "framework"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
      });
      setFData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setFLoading(false);
      }
    };

    fetchFData();
  }, []);

  useEffect(() => {
    const fetchBData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "language"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
      });
      setBData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setBLoading(false);
      }
    };

    fetchBData();
  }, []);

  useEffect(() => {
    const fetchDbData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dbtools"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
      });
      setDbData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setDbLoading(false);
      }
    };

    fetchDbData();
  }, []);
    
  return (
    <div className='container skills-container'>
      <p className="fw-bold skills-titles">When I work, I use...</p>
      <div className="skills-card">
        <div className={`flip-card-s ${flipped[0] ? 'flipped' : ''}`} onClick={() => handleFlip(0)}>
          <div className="flip-front-s">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Different<br />Frameworks 
            </p>
          </div>
          <div className="flip-back">
            {Floading ? (
              <p>Loading...</p>
            ) : (
              Fdata.map((item, index) => (
                <div key={index}>
                  <img src={`./images/${item.image}`} alt={item.name} className='skills-frame'/>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={`flip-card ${flipped[1] ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
          <div className="flip-front">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Programming<br />Languages
            </p>
          </div>
          <div className="flip-back-lang">
            {Bloading ? (
              <p>Loading...</p>
            ) : (
              Bdata.map((item, index) => (
                <div key={index}>
                  <img src={`./images/${item.image}`} alt={item.name} className='skills-frame'/>
                </div>
              ))
            )}
          </div>
        </div>

        <div className={`flip-card ${flipped[2] ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
          <div className="flip-front">
            <RxQuestionMarkCircled className="card-icon" />
            <p className="text-end fw-bold skills-title">
              Database and <br /> Other Tools
            </p>
          </div>
          <div className="flip-back">
          {Dbloading ? (
              <p>Loading...</p>
            ) : (
              Dbdata.map((item, index) => (
                <div key={index}>
                  <img src={`./images/${item.image}`} alt={item.name} className='skills-frame'/>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
