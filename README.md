# README

Robbyhood is a single page app clone of [Robinhood](https://robinhood.com/).

Please check it out [here](https://robbyhood.herokuapp.com/).

## Technologies Used:

* Ruby on Rails
* React/Redux
* Postresql
* Javascript
* HTML/CSS
* Recharts

## Features:

### Secure User Sign-up/Login:

* Secure sign up and sign in using BCrypt.
* Non logged in users are not able to go to stocks or profile pages with Protected Routes.

### User Portfolio Page:

### Stock Show Page:

Users are able to search and see stocks from different timeframes.

#### Sample Code:

The following code snippet shows use of Recharts Custom Tool Tip function:
```
const CustomTooltip = (props) => {
    let oldPrice = props.oldPrice
    if (props.active) {
        const price = document.getElementById('stockPrice')
        const change = document.getElementById('changePrice')
        const update = document.getElementById('fluxPercent')
        if (props.payload[0] && props.payload[0].payload) {
            let currPrice = (props.payload[0].payload.high)
            let flux = props.setFlux(currPrice - oldPrice)
            price.innerText = `$${props.setPrice(currPrice)}`
            change.innerText = props.addSymbol(flux)
            update.innerText = props.setFluxPercent(currPrice, oldPrice)
        }
        return (
            <div >
                {/* <p>{props.date}</p> */}
                <p>{props.label}</p>
            </div>
        );
    }

    return null;
};

```
