import '../css/experiances.css';

function CardBox(props) {
  return (
    <div>
      <div className={props.cardType}></div>
      <div className="standardBox">
        <img className="imgBoxSize" src={props.img} alt="not found"></img>
        <div>
          <h1 className="textFont boxHeadline">{props.title}</h1>
          <h2 className=""> {props.years}</h2>
          <p className="textFont" > {props.paragraph} </p>
        </div>
      </div>
    </div>
  );
}

export default CardBox;
