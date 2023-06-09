import styled from 'styled-components';

export const CheckoutContainer=styled.div`
display:flex;flex-wrap: wrap;
/*CheckoutContainer*/
`
export const ItemDetailsHeader= styled.div`
  font-size:1.2em;
  padding-bottom:20px;
  border-bottom:2px solid gray;
  display: flex;
  flex: 0 0 100%;
  flex-direction: row;
  height: fit-content;
  display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr .5fr;
    grid-template-columns:250px repeat(5, 1fr);
    grid-column-gap:10px;
`

export const CartTotalCont=styled.div`
  text-align: right;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5em;
  justify-content: center;
  margin: 20px auto;
`
export const ItemDetailsHeaderSpan= styled.div`
  display: inline-flex;
  
  justify-content: center;
`

export const ItemDetailsSpan= styled.span(ItemDetailsHeaderSpan);
export const CheckoutButton= styled.span(ItemDetailsHeaderSpan);
/*.checkout-container {
  .item-details-header{font-size:1.2em;padding-bottom:20px;border-bottom:2px solid gray;}
  .item-details-header > span,
  .item-details > span,
  .item-details > button {
    display: inline-flex;
    width: 20%;
    justify-content: center;
  }
  
  .button-container{
    min-width: fit-content;
    padding: 0 20px;
    color: gray;
    display: flex;
    width: fit-content;
    margin-left: auto;
  }
  img {max-width: 100%;}
  .checkout-items .item-details,
  .item-details-header {
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;
    justify-content: space-evenly;
    align-items:center;
  }
  .cart-total {
    text-align: right;
    display: flex;
    flex: 0 0 40%;
    flex-direction: column;
    gap: 20px;
    font-size: 1.5em;
    justify-content: center;
    margin: 20px auto;
  }
  
  }*/