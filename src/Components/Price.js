//Add code here to return a price
const getPrice = (width, length, sidingOption) => {
    if(width && length && sidingOption){
        if (sidingOption === "No Siding"){
            //Pricing if no siding is selected
            return "Some Other Value"
        }
        //Pricing if a siding is selected
        return "Some Value"
    }
    //Returns a message if there are missing options and gives them a message letting them know which options to select
    let missingMessage = "Please select a "
    missingMessage += width ? "" : "width"
    missingMessage += length ? "" : width ? "length " : sidingOption ? ", and a length" : ", a length"
    missingMessage += sidingOption ? "" : (!length || !width) ? ", and a siding type" : " siding type"
    missingMessage += " to get a price"
    return missingMessage
}

const Price = props => <section className="infoSection">
    <h1>Price</h1>
    {props.width && props.length && props.siding && <p>The price for your garage is</p> }
    <div id="price">
        {props.width && props.length && props.siding &&
            <span id="priceSymbol">
                $
            </span>
        }
        <span id="priceValue">
            {getPrice(props.width, props.length, props.siding)}
        </span>
    </div>
</section>



export default Price