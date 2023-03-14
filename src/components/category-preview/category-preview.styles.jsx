import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const CategoryPreviewTitle = styled.div`
  font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`
export const Preview = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 20px;
`
/*.category-preview-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .category-preview-title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
}*/
