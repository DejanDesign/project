import "../../style/card.scss";

const info = {
  card1: {
    title: "Personal",
    subTitle: "Special first packet for all",
    price: "8$",
    month: "/Month",
    firstLine: "— Up to 5 page each group",
    secondLine: "— Up to 10 group page",
    thirdLine: "— 5 Days group page saved",
  },
  card2: {
    title: "Regular",
    subTitle: "Recommended for personal pro",
    price: "20$",
    month: "/Month",
    firstLine: "— Up to 15 page each group",
    secondLine: "— Download page up to 20 page",
    thirdLine: "— Up to 10 group page",
    fourthLine: "— 15 Days group page saved",
  },
  card3: {
    title: "Premium",
    subTitle: "Packet for Startup & Company",
    price: "48$",
    month: "/Month",
    firstLine: "— Unlimited group pages",
    secondLine: "— Unlimited download page",
    thirdLine: "—  Unlimited page each group",
    fourthLine: "—  Customize sorting group pages",
    fifthLine: "—  Customize group page name",
    sixthLine: "— 30 Days group page saved",
  },
};

function CardYear() {
  return (
    <div className="cards">
      <div className="card card1">
        <div className="title">
          <h4>{info.card1.title}</h4>
          <a>{info.card1.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card1.price}
            <a>{info.card1.month}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card1.firstLine}</p>
          <p>{info.card1.secondLine}</p>
          <p>{info.card1.thirdLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
      <div className="card card2">
        <div className="title">
          <h4>{info.card2.title}</h4>
          <a>{info.card2.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card2.price}
            <a>{info.card2.month}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card2.firstLine}</p>
          <p>{info.card2.secondLine}</p>
          <p>{info.card2.thirdLine}</p>
          <p>{info.card2.fourthLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
      <div className="card card3">
        <div className="title">
          <h4>{info.card3.title}</h4>
          <a>{info.card3.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card3.price}
            <a>/{info.card3.month}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card3.firstLine}</p>
          <p>{info.card3.secondLine}</p>
          <p>{info.card3.thirdLine}</p>
          <p>{info.card3.fourthLine}</p>
          <p>{info.card3.fifthLine}</p>
          <p>{info.card3.sixthLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
    </div>
  );
}

export default CardYear;
