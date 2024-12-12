// src/components/Card.js
const Card = ({ value, suit }) => {
    return (
      <div className="border p-4 rounded">
        {value} of {suit}
      </div>
    );
  };
  
  export default Card;
  