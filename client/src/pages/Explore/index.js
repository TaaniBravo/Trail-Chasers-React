import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import HikeCard from "../../components/HikeCard";
import "./style.scss";
import sampleData from "./sampleData";

const Explore = ({ city = "Seattle" }) => {
  const [data, setData] = useState(sampleData);

  return (
    <div className='explore_container'>
      <h3 className='recommended_heading'>Recommended Hikes Near You!</h3>
      <div className='recommended_container'>
        {data.map(hike => (
          <HikeCard {...hike} />
        ))}
      </div>
      <h3>Search trails by City!</h3>
      <div className='input_container'>
        <InputGroup className='search_input mb-3'>
          <FormControl
            placeholder='Seattle'
            aria-label='Search for an adventure'
            aria-describedby='basic-addon2'
          />
          <Button variant='outline-secondary' id='button-addon2'>
            Onward
          </Button>
        </InputGroup>
      </div>
      <div className='results_container'></div>
    </div>
  );
};

export default Explore;
