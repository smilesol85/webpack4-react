import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

// const App = () => {
//     return (
//         <div>
//             <p>React here!</p>
//         </div>
//     );
// };

export default App;
ReactDOM.render(<App data={window.__PRELOADED_STATE__}/>, document.getElementById("app"));