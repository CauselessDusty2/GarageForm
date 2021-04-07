import Container from './Container'
import React, { useEffect } from 'react'
//import pricing from "../data/pricing.json"
import axios from 'axios'

import './Price.css'

function getGaragePrice(requirements, pricing) {
  let [width, length, siding] = requirements
  let price

  //Pricing for the framing
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

  if (siding !== "No Siding" && key) {
      //Pricing if a siding is selected
      let key = Object.keys(pricing).find(item => {
        let p = false
        item = item.replace("X", "x")
        let [itemWidth, itemLength] = item.split(" ")[0].split("x")

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
  return price
}

function getShedPrice(requirements, pricing) {
  let [width, length, siding, shingleColour, options] = requirements
  let price

  let key = Object.keys(pricing).find(item => {
    let p = false
    item = item.replace("X", "x")
    let [itemWidth, itemLength] = item.split("-")[0].split("x")

    if (itemWidth === width && itemLength === length && item.includes("SHED")) {
      if (siding === "OSB"){
        p = item.includes("OSB")
      } else if (siding === "Smart Panel") {
        p = item.includes("SMART PANEL")
      } else if (siding === "Challet") {
        p = item.includes("CHALET")
      } else if (siding.includes("Vinyl")) {
        p = item.includes("VINYL")
      }
    }

    return p
  })

  if(!key){
    price = "Error: Contact Star for pricing"
  } else {
    price = pricing[key]
  }

  if (options.includes("6x6 Ramp") && key) {
      let key = Object.keys(pricing).find(item => item.includes("RAMP"))

      if(!key){
        price = "Error: Contact Star for pricing"
      } else {
        price += pricing[key]
      }
  }

  if (options.includes("Double Door") && key) {
      let key = Object.keys(pricing).find(item => item.includes("DOUBLE DOOR"))

      if(!key){
        price = "Error: Contact Star for pricing"
      } else {
        price += pricing[key]
      }
  }

  return price
}

const getPrice = (requirements, type, pricing) => {
    let price
    switch (type) {
      case "shed":
        price = getShedPrice(requirements, pricing)
        break;
      case "garage":
        price = getGaragePrice(requirements, pricing)
        break;
      default:
        price = "Error"

    }
    if (typeof(price) === "number"){
      price = price.toFixed(2)
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

let mydata = {}

const Price = props => <Container className="infoSection">
{useEffect(() => {
   axios.get('https://staging.starbuilding.ca/pricing-json.php').then((response) => mydata=response.data)
}, [])}

    <h1>Estimate</h1>
    {valid(props.requirements) ? <section>
        <p>The estimate for your {props.type} is</p>
        <div id="price">
            <span id="priceSymbol">
              {!getPrice(props.requirements, props.type, mydata).includes("Error") && "$"}
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
