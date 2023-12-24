import styled from "styled-components";

/* table */
export const StyledTableContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #e9e0c9;
`;

/* switch toggle */
export const StyledToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25.5px;
`;

export const StyledToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#2196F3" : "#ccc")};
  transition: 0.4s;
  border-radius: 25.5px;

  &:before {
    position: absolute;
    content: "";
    height: 19.5px;
    width: 19.5px;
    left: ${(props) => (props.checked ? "4px" : "21.5px")};
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

/* search box */
export const StyledSearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: fit-content;
`;

export const StyledSearchBoxLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin-right: 10px;
  flex: 1;
`;

export const StyledSearchBoxInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 4;
`;

/* pagination */
export const StyledPaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 110%;
`;

export const StyledPaginationButton = styled.button`
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
    background-color: #f5f5f5;
  }

  &:not(:disabled) {
    background-color: #e7e7e7;
    &:hover {
      background-color: #d4d4d4;
    }
  }
`;

export const StyledPaginationSelect = styled.select`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
`;

export const StyledPaginationPageInfo = styled.span`
  padding: 8px 10px;
`;

/* table summary */
export const StyledTableSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledTableSummaryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StyledTableSummaryColumn = styled.div`
  flex: 1 1 auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  display: ${({ content }) => (content ? "block" : "none")};
  min-width: 100px;
  word-wrap: break-word;
`;

/* table header filter */
export const StyledFilterContainer = styled.div`
  flex: 1;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFilterInput = styled.input`
  padding: 6px;
  margin: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
  font-size: 14px;
`;

/* table header sort */
export const StyledSortButton = styled.button`
  padding: 6px 10px;
  margin: 2px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

/* table header  */
export const StyledHeaderContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`;

export const StyledSortAndNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledHeaderName = styled.span`
  font-weight: bold;
  font-size: 14px;
  flex: 1;
  text-align: center;
`;
