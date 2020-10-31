// import React, {useReducer} from 'react'
// import reducer from '../Redux/reducer'
// import OptionGroup from '../Components/OptionGroup'

// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
// }

// function handleSelect(e){
//   console.log(e.target.value)
// }

// function Question(props){
//   const [state, dispatch] = useReducer(reducer)
//   const options = [...props.question.incorrect, props.question.correct]
//   shuffleArray(options)
//   return (
//     <div>
//       <h6>  
//         {props.question.question}
//       </h6>
//         <OptionGroup options={options} handleSelect={handleSelect} />
//     </div>
//   )
// }

// export default Question 