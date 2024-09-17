const Score = ({ score }) => {
  console.log(`Rendering score for date: ${score.date}, score: ${score.score}`);

  return (
    <div>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  );
};

export default Score;
