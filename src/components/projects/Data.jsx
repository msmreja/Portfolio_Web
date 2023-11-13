import Work1 from "../../assets/Work1.jpg";
import Work2 from "../../assets/Work2.png";
import Work3 from "../../assets/Work3.jpg";
import Work4 from "../../assets/Work4.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Blockchain Based E-Voting System",
    category: "web",
    description:
      "A voting system on Ethereum Blockchain, including features like registration, voting interface, and results declaration. React and Solidity were used for frontend and backend respectively",
    frontend: "  HTML, CSS, React",
    backend: "  Solidity, Ethereum Testnet",
    gitLink: "https://github.com/msmreja/Blockchain_Based_e-Voting_System",
  },
  {
    id: 2,
    image: Work2,
    title: "TO Do List Using React and REST API",
    category: "web",
    description:
      "To Do List web applications with functionalities like add, delete and update a To Do. It also allow to insert images along with to do task which is available for premium user, a test payment gateway is integrated with it.",
    frontend: "  React",
    backend: "   Python Flask, MySQL, REST API, Stripe Payment",
    gitLink: "https://github.com/msmreja/To_Do_WebApp",
  },
  {
    id: 3,
    image: Work3,
    title: "Real Time Traffic Sign Detector",
    category: "Other",
    description:
      " This project implemented a real-time traffic sign detection system using YOLOv5, python, Flask and a diverse dataset of traffic sign images. It utilizes YOLOv5s high speed and accuracy to detect traffic signs in real-time video streams, and is deployable as a web application",
    frontend: "  HTML, CSS, JavaScript",
    backend: "   YOLOV5, Python , Flask",
    gitLink: "https://github.com/msmreja/Real_time_traffic_Sign_Detector",
  },
  {
    id: 4,
    image: Work4,
    title: "Accent Detector ML Model",
    category: "web",
    description:
      "It is Program for Recognising the Mother-Tongue of the Speaker, when he/she is Speaking in English Using Machine Learning",
    frontend: "  ",
    backend:
      "  [Python (Librosa, Numpy, Tensorflow), Artificial Neural Network",
    gitLink: "https://github.com/msmreja/accent_recognization",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Web",
  },
  {
    name: "Other",
  },
];
