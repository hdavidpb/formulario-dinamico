import { IQuestion } from "../redux/features/forms/interface";
import "./styles.css";

interface Props {
  question: IQuestion;
}

export const QuestionHeader = ({ question }: Props) => {
  return (
    <div className="question-contianer">
      <span>
        <h1 className="question">{question.question} </h1>
        {question.policy && (
          <a
            href="https://global-uploads.webflow.com/60607540102fdb07711fc8c1/6297c74689fa8b660bab24ce_autorizacion_datos_mayo_2022.pdf"
            target="_blank"
            className="question authorization"
          >
            {question.policy}
          </a>
        )}
      </span>
    </div>
  );
};
