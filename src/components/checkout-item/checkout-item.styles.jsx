import styled from 'styled-components';

export const ItemsContainerWrapper = styled.div`
display:grid;
`
export const CheckoutItemsContainer = styled.div`
font-size:1.2em;height:auto; display: grid;width: 100%;
    /*grid-template-columns: 250px repeat(5, 1fr);
    column-gap: 10px;*/
`
export const ItemsContainer = styled.div`
display:flex;
flex-direction:column;
flex:0 0 100%;


`
export const CheckoutButton = styled.div`
  min-width: fit-content;padding:0 20px;background: none;color:gray;
  `
export const CheckoutItemButtonContainer = styled.div`
  
  `
export const ItemDetails = styled.div`
    grid-template-columns: 250px repeat(5, 1fr);
    column-gap: 10px;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid gray;
    display: grid;
    text-align: center;
`
export const Price = styled.div`
`
export const ItemName = styled.div`

`
export const ItemDetailsImgContainer = styled.div`
max-width: 80%;margin:auto;
`
export const ItemDetailsImg = styled.img`
    max-width:100%;
`
//export const ItemDetailsHeader = styled.div`max-width: 80%;`
export const ChevronIcon = styled.div`
  cursor: pointer;
    display:inline-block;
    font-size: 2.5em;
    line-height: 0;
    transform: translateY(6px);
`
export const ChevronContainer = styled.div`

`

/*.checkout-items{font-size:1.2em;height:auto;
    .button-container{min-width: fit-content;padding:0 20px;background: none;color:gray;}
      
      .item-details{margin-top: 20px;padding-bottom:20px;border-bottom:2px solid gray;}
      .item-details-header,
      .item-details > span img{max-width: 80%;}

      .decreaseQ,.increaseQ{
        cursor: pointer;
        display:inline-block;
        font-size: 2.5em;
        line-height: 0;
        transform: translateY(6px);
      }
      .checkout-items img {
          width: 10%;
          height: auto;
      }
      
    }*/