// Portfolio.js
import React, { useEffect, useState } from 'react';
import api from './api';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Modal from 'react-modal';

const Portfolio = () => {
  const [userData, setUserData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get();
      setUserData(response.data);
    };

    fetchData();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Hero data={userData?.about} />
      <About data={userData?.about} />
      <Services data={userData?.services} />
      <Skills data={userData?.skills} />
      <Projects data={userData?.projects} openModal={openModal} />
      <Timeline data={userData?.timeline} />
      <Testimonials data={userData?.testimonials} />
      <ContactForm data={userData?.about} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {/* <div>
          <h2>{selectedProject?.title}</h2>
          <p>GitHub URL: {selectedProject?.github_url}</p>
          <p>Live URL: {selectedProject?.live_url}</p>
          <p>Tech Stack: {selectedProject?.tech_stack.join(', ')}</p>
          <p>{selectedProject?.description}</p>
          <button onClick={closeModal}>Close</button>
        </div> */}
      </Modal>
    </div>
  );
};

export default Portfolio;