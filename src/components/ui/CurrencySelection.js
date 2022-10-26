import React from "react";

class CurrencySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [
        {
          id: 1,
          svg: "$",
          title: "USD",
        },
        {
          id: 2,
          svg: "€",
          title: "EUR",
        },
      ],
    };
  }

  render() {
    return (
      <select>
        {this.state.currencies.map((currency) => (
          <option
            key={currency.id}
            value={currency.title}
            aria-label={currency.title}
          >
            {currency.svg}
          </option>
        ))}
      </select>
    );
  }
}

export default CurrencySelection;
