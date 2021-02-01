//Add code here to return a price
const getPrice = (width, length, sidingOption, type, requirements) => {
    if (type === "fence") {
        let [material, height, style, length] = requirements
        return material + " " + height + " " + style + " " + length
    } else {
        if (sidingOption === "No Siding") {
            //Pricing if no siding is selected
            return "Some Other Value"
        }
        //Pricing if a siding is selected
        return "Some Value"
    }
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

const Price = props => <section className="infoSection">
    <h1>Price</h1>
    {valid(props.requirements) ? <section>
        <p>The price for your {props.type} is</p>
        <div id="price">
            <span id="priceSymbol">
                $
            </span>
            <span id="priceValue">
                {getPrice(props.width, props.length, props.sidingOption, props.type, props.requirements)}
            </span>
        </div>
    </section> :
    <p>Please select all options to see a price</p>
    }
</section>



export default Price