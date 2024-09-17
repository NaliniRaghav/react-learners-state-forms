import  { useState } from "react";
import Learner from "../src/components/Learner";

import "./App.css";

const App = () => {
  const [learnerData,setLearnerData] = useState({
    learners: [
      {
        name: "Cait Yomorta",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ...",
        scores: [
          { date: "2018-02-08", score: 77 },
          { date: "2018-04-22", score: 92 },
          { date: "2018-09-15", score: 68 },
        ],
      },
      {
        name: "Holly Baird",
        bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, ...",
        scores: [
          { date: "2018-12-14", score: 88 },
          { date: "2019-01-09", score: 79 },
          { date: "2019-02-23", score: 91 },
          { date: "2019-03-01", score: 95 },
        ],
      },
      {
        name: "Wes Mungia",
        bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, ...",
        scores: [
          { date: "2018-10-11", score: 62 },
          { date: "2018-11-24", score: 74 },
          { date: "2018-12-19", score: 85 },
        ],
      },
    ],
  });

  console.log("Learner data loaded", learnerData);

  return (
    <div>
    <h1>Learner's Score Details</h1>
      {learnerData.learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
};

export default App;

