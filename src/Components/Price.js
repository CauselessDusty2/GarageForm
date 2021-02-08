import Container from './Container'

//Add code here to return a price
const getPrice = (requirements, type) => {
    let price = "Error"
    if (type === "fence") {
        let [material, height, style, length] = requirements

        price = [...requirements].join(" - ") + "ft"

    } else if (type === "garage") {
        let [width, length, siding] = requirements

        if (siding === "No Siding") {
            //Pricing if no siding is selected
            price = [...requirements].join(" - ")
        } else {
            //Pricing if a siding is selected
            price = [...requirements].join(" - ")
        }
    }
    return price
}

const valid = requirements => {
    let valid = true

    for(let req of requirements){
        if (!req){
            valid= false;
            break;
        }
    }

    return valid
}

const Price = props => <Container className="infoSection">
    <h1>Price</h1>
    {valid(props.requirements) ? <section>
        <p>The price for your {props.type} is</p>
        <div id="price">
            <span id="priceSymbol">
                $
            </span>
            <span id="priceValue">

                {getPrice(props.requirements, props.type)}
            </span>
        </div>
    </section> :
    <p>Please select all options to see a price</p>
    }
</Container>



export default Price
