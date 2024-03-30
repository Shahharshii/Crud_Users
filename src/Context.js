import React, { Component } from 'react'
import { rowdata } from './Appdata'

const ProductContext = React.createContext();
 export default class  ProductProvider  extends Component {

    state= {
        Alldata: rowdata
    }
  render() {
    
    // console.log(this.state.Alldata);
    return (
      <div>
        <ProductContext.Provider
        value={{...this.state}}
         >
            {this.props.children}
        </ProductContext.Provider>
      </div>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
