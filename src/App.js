import React, { Component } from "react";
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777326).toString(16);
}

class App extends Component {
  state = { color: "#000000" };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
      // <IterationSample />
      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//   {
//      <ValidationSample />
//     <EventPractice />
//     <Say />
//     <Counter />
//     <MyComponent name="React" favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   }
//   )
// };

// export default App;
