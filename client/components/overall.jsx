import React from 'react';
import Stars from './stars.jsx';
import styled from 'styled-components';

const Bolded = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const BoldedTitle = styled.div`
  font-weight: bold;
  text-align: center;
  border-top: 1px solid gray;
`;

const Description = styled.div`
  font-family: "Space Mono";
  font-size: 12px;
`;

const OverallRow = styled.table` 
  border-bottom: 1px solid gray;
`;


const Overall = (props) => {

    return (
      <div id="overall">
      <BoldedTitle>
      <h3 id="title">REVIEWS</h3>
      </BoldedTitle>
      <OverallRow>
      <tr id="overall-row">
        <td className="left">
        <Bolded>
        <p id="overall-rating">{props.reviews.length !== 0 ? props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + 1 * stars, count + 1]), [0, 0] )
               .reduce( (sum, count) => 'Overall Rating: ' + Math.round((sum/count)*10)/10) + "/5" : 'No Reviews'}</p>
        </Bolded>
        <Stars stars={props.reviews.length !== 0 ? props.reviews.reduce( ([sum, count], {stars}, i) =>
                        ([sum + 1 * stars, count + 1]), [0, 0] )
               .reduce( (sum, count) => Math.round((sum/count)*10)/10) : 0}/>
        <Description>
        <p id="price">{props.name}, based on {props.reviews.length} reviews, starting at ${props.price} per cup</p>
        </Description>
        </td>
        <td className="right">
        <div>We'd love to read your review, add this to a future delivery in order to review it.</div>
        </td>
      </tr>
      </OverallRow>
      </div>
    )

}

export default Overall;
