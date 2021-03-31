import Container from './Container'
import React, { useEffect } from 'react'
//import pricing from "../data/pricing.json"
import axios from 'axios'

import './Price.css'


const getPrice = (requirements, type, pricing) => {
    let price = "Error"
    if (type === "shed") {
        let [width, length, siding, options] = requirements

        price = [...requirements].join(" - ")

    } else if (type === "garage") {
        let [width, length, siding] = requirements

        //Pricing if no siding is selected
        let key = Object.keys(pricing).find(item => {
          let p = false
          let [itemWidth, itemLength] = item.split(" ")[0].split("x")

          if (itemWidth === width && itemLength === length && item.includes("GARAGE FRAMING")) {
            p = true
          }
          return p
        })

        if(!key){
          price = "Error: Contact Star for pricing"
        } else {
          price = pricing[key]
        }

        if (siding !== "No Siding") {
            //Pricing if a siding is selected
            let key = Object.keys(pricing).find(item => {
              let p = false
              item = item.replace("X", "x")
              console.log(item)
              let [itemWidth, itemLength] = item.split(" ")[0].split("x")

              if(itemWidth === width && itemLength === length && length === "30"){
                console.log(item)
              }

              if (itemWidth === width && itemLength === length && item.includes("VINYL PACKAGE")) {
                p = true
              }
              return p
            })

            if(!key){
              price = "Error: Contact Star for pricing"
            } else {
              price += pricing[key]
            }
        }
    }
    return typeof(price === "number") ? price.toFixed(2) : price
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

let mydata = {}

const Price = props => <Container className="infoSection">
{useEffect(() => {
   axios.get('https://staging.starbuilding.ca/pricing-json.php').then((response) => mydata=response.data)
}, [])}

    <h1>Price</h1>
    {valid(props.requirements) ? <section>
        <p>The price for your {props.type} is</p>
        <div id="price">
            <span id="priceSymbol">
                $
            </span>
            <span id="priceValue">
                {getPrice(props.requirements, props.type, mydata)}
            </span>
        </div>
    </section> :
    <p>Please select all options to see a price</p>
    }
</Container>



export default Price
