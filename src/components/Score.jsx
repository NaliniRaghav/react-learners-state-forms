// const Score = ({ score }) => {
//   console.log(`Rendering score for date: ${score.date}, score: ${score.score}`);

//   return (
//     <div>
//       <p>Date: {score.date}</p>
//       <p>Score: {score.score}</p>
//     </div>
//   );
// };

// export default Score;

/* eslint-disable react/prop-types */
export default function Score(props) {
  return (
    <div>
      <div>Score: {props.score.score} | Date: {props.score.date}</div>
    </div>
  );
}
