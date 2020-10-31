import React, {useState} from 'react'
import { Form, Row, Col, } from 'react-bootstrap'


function OptionGroup(props){

  function handleChange(e){
    e.preventDefault()
    setSelectedOption(e.target.name)
    console.log(e.target.name)
  }

  console.log("HERE ARE OPTION PROPS",props)
  const [selectedOption, setSelectedOption] = useState(null)
  return (props.options.map(option =>  
    <div>
      {selectedOption}
      <Form.Group as={Row} controlId="answer">
        <Col sm={10}>
          <Form.Check
            type="radio"
            label={option}
            name={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </div>
  )
  )
}

export default OptionGroup