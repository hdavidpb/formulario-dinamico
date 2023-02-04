interface Props {
  index: number;
  totalQuestions: number;
}

export const ProgressBar = ({ index, totalQuestions }: Props) => {
  return (
    <div className="progress-bar-container">
      <div
        style={{
          width: `${((index + 1) * 100) / totalQuestions}%`,
        }}
        className={`${
          index === totalQuestions - 1
            ? "progress-indicator completed"
            : " progress-indicator"
        }`}
      >
        <span>{Math.floor(((index + 1) * 100) / totalQuestions) + "%"}</span>
      </div>
    </div>
  );
};
