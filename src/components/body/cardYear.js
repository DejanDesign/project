import "../../style/card.scss";

const info = {
  card4: {
    title: "Personal",
    subTitle: "Special first packet for all",
    price: "78$",
    year: "/Year",
    firstLine: "— Up to 5 page each group",
    secondLine: "— Up to 10 group page",
    thirdLine: "— 5 Days group page saved",
  },
  card5: {
    title: "Regular",
    subTitle: "Recommended for personal pro",
    price: "108$",
    year: "/Year",
    firstLine: "— Up to 15 page each group",
    secondLine: "— Download page up to 20 page",
    thirdLine: "— Up to 10 group page",
    fourthLine: "— 15 Days group page saved",
  },
  card6: {
    title: "Premium",
    subTitle: "Packet for Startup & Company",
    price: "148$",
    year: "/Year",
    firstLine: "— Unlimited group pages",
    secondLine: "— Unlimited download page",
    thirdLine: "—  Unlimited page each group",
    fourthLine: "—  Customize sorting group pages",
    fifthLine: "—  Customize group page name",
    sixthLine: "— 30 Days group page saved",
  },
};

function CardPage() {
  return (
    <div className="cards">
      <div className="card card4">
        <div className="title">
          <h4>{info.card4.title}</h4>
          <a>{info.card4.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card4.price}
            <a>{info.card4.year}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card4.firstLine}</p>
          <p>{info.card4.secondLine}</p>
          <p>{info.card4.thirdLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
      <div className="card card5">
        <div className="title">
          <h4>{info.card5.title}</h4>
          <a>{info.card5.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card5.price}
            <a>{info.card5.year}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card5.firstLine}</p>
          <p>{info.card5.secondLine}</p>
          <p>{info.card5.thirdLine}</p>
          <p>{info.card5.fourthLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
      <div className="card card6">
        <div className="title">
          <h4>{info.card6.title}</h4>
          <a>{info.card6.subTitle}</a>
        </div>

        <hr />
        <div className="price">
          <p>
            {info.card6.price}
            <a>{info.card6.year}</a>
          </p>
        </div>
        <div className="content">
          <p>{info.card6.firstLine}</p>
          <p>{info.card6.secondLine}</p>
          <p>{info.card6.thirdLine}</p>
          <p>{info.card6.fourthLine}</p>
          <p>{info.card6.fifthLine}</p>
          <p>{info.card6.sixthLine}</p>
        </div>

        <button>Start Free Trial</button>
      </div>
    </div>
  );
}

export default CardPage;
