import ReduxChecker from "./components/testRedux";
import Question from "./components/Question";

function App() {
  const questionTest = {
      id: 1,
      isQType: true,
      questionTitle: "Pregunta de prueba",
      questionOptions: [
          [1, "Opcion 1"],
          [2, "Opcion 2"]
      ]
  };

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <ReduxChecker/>
      <Question
          id={questionTest.id}
          isQType={questionTest.isQType}
          questionTitle={questionTest.questionTitle}
          questionOptions={questionTest.questionOptions}
      />
    </div>
  );
}

export default App;
