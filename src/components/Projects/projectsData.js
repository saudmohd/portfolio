export const projectsData = [
  {
    id: 1,
    title: "TumorWatchAI",
    description: "Neural Network-based tumor classification system using CT scans and MRI images.",
    longDescription: "Developed a deep learning model that classifies brain tumors into meningioma, glioma, pituitary tumors, or no tumor cases. Implemented advanced image preprocessing and augmentation techniques to handle medical imaging data.",
    features: [
      "Trained on 25,000+ labeled medical images",
      "Achieved 97.3% classification accuracy",
      "End-to-end workflow on web and mobile platforms",
      "DICOM image support with preprocessing pipeline"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "FastApi"],
    githubUrl: "https://github.com/saudmohd",
    demoUrl: "/",
    imageUrl: "/images/tumorwatchai.jpg"
  },
  {
    id: 2,
    title: "Real-Time Disaster Response Pipeline",
    description: "Streaming data pipeline for live earthquake data processing and visualization.",
    longDescription: "Built a real-time data pipeline that processes live earthquake data from USGS API, providing immediate insights for disaster response teams and researchers.",
    features: [
      "Processes 10,000+ events per minute",
      "Real-time alerting system",
      "Interactive visualization dashboard",
      "Historical data analysis capabilities"
    ],
    technologies: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Python", "Streamlit"],
    githubUrl: "https://github.com/saudmohd/real-time-disaster-response-pipeline",
    demoUrl: "https://www.linkedin.com/posts/saud-muhammad-8bbb98368_dataengineering-realtimedata-apachekafka-activity-7334508451374452736-TEwg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFtM2A8B1XL6sJFz7MPf5ZkC-8QNDon5-wI",
    imageUrl: "../../assets/etl.png"
  }
];