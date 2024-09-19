
// import Score from "../components/Score.jsx";

// const Learner = ({ learner }) => {
 
//   return (
//     <div>
//        <h2>{learner.name}</h2> 
//       <p>{learner.bio}</p>
//       {learner.scores.map((score, index) => (
//         <Score key={index} score={score} />
//       ))}
//     </div>
//   );
// };

// export default Learner;

/* eslint-disable react/prop-types */
import Score from "./Score";

export default function Learner(props) {
    console.log('PROPS ',props);
    
  return (
    <div>
      <h1>{props.learner.name}</h1>
      <p>{props.learner.bio}</p>

      {props.learner.scores.map((score, index) => {
        return <Score score={score} key={index}/>
      })}

    </div>
  );
}