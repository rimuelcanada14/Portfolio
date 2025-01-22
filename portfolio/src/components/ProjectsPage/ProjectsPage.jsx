import React, { useState, useEffect } from 'react';
import './ProjectsPage.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProjectsPge = () => {
  //for framework data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
      });
      setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
    
  return (
    <div className='container projects-container'>
      <p className="fw-bold projects-title">I have developed...</p>
      <div className="project-card">
        {loading ? (
          <p>Loading...</p>
          ) : (
            data.map((item, index) => (
              <div key={index} className = "projects-card">
                <div className="projects-image">
                  <img src={`./images/${item.image}`} alt={item.name} className='projects-p'/>
                </div>
                <div className="projects-des">
                  <p className='projects-name'>{item.name}</p>
                  <p className="projects-tech">{item.tech}</p>
                  <p className='projects-desc'>{item.description}</p>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default ProjectsPge;
