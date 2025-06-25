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
  },
  {
    id: 3,
    title: "Iris Flower Classification",
    description: "Machine learning model to classify iris species using sepal and petal measurements.",
    longDescription: "Built using Scikit-learn’s SVC classifier with 100% accuracy, this classic ML project helps understand basic supervised learning concepts with small structured datasets.",
    features: [
      "Trained using the Iris dataset (Setosa, Versicolor, Virginica)",
      "SVC model achieved 100% accuracy",
      "Pairplot and heatmap visualizations for EDA",
      "Confusion matrix and accuracy evaluation"
    ],
    technologies: ["Python", "Scikit-learn", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/saudmohd/CodeAlpha_iris_classification",
    demoUrl: "",
    imageUrl: "/images/iris.jpg"
  },
  {
    id: 4,
    title: "Car Price Prediction",
    description: "Predicting used car prices based on mileage, year, fuel type, and more.",
    longDescription: "Built a regression model using Linear Regression and Random Forest to estimate used car prices. Cleaned and encoded real-world car dataset for accurate prediction.",
    features: [
      "Used car dataset from CarDekho",
      "Handled categorical variables with encoding",
      "Achieved R² score of 0.75 and RMSE of ₹2.5 lakh",
      "Visualized feature importance and model error"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
    githubUrl: "https://github.com/saudmohd/CodeAlpha_car-price-prediction",
    demoUrl: "",
    imageUrl: "/images/car.jpg"
  },
  {
    id: 5,
    title: "Sales Prediction using Advertising Data",
    description: "Linear regression model to predict sales based on ad spend (TV, Radio, Newspaper).",
    longDescription: "Explored the impact of advertising channels on product sales using multivariate linear regression. Evaluated model performance with R² score and RMSE, and visualized correlation.",
    features: [
      "Analyzed Advertising.csv dataset",
      "Trained on TV, Radio, and Newspaper data",
      "R² Score: 0.75, RMSE: 2.52",
      "Heatmap and scatterplot insights"
    ],
    technologies: ["Python", "Scikit-learn", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/saudmohd/CodeAlpha_sales-prediction-advertising",
    demoUrl: "",
    imageUrl: "/images/sales.jpg"
  }
];
