import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  flex-wrap: ${(props) => props.flexWrap || "unset"};
  gap: ${(props) => props.gap + "px"};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  flex-grow: ${(props) => props.flexGrow};
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "unset"};
  align-items: ${(props) => props.alignItems || "unset"};
  flex-wrap: ${(props) => props.flexWrap || "unset"};
  gap: ${(props) => (props.gap ? props.gap + "px" : "none")};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  flex-grow: ${(props) => props.flexGrow};
`;

export const FlexFullWidth = styled(Flex)`
  width: 100%;
`;

export const FlexColFullWidth = styled(FlexCol)`
  width: 100%;
`;


//styling for video description
export const Description = styled.div`
.description-container {
  max-width: 1000px;
  background-color: rgb(229 231 235);
  padding:10px;
  border-radius: 0.75rem;
  display: flex;
  position : relative;

}

.description {
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}

.collapsed {
  max-height: 3.6em; 
  white-space: nowrap;
  text-overflow: ellipsis;
}

.expanded {
  max-height: 100vh; 
  white-space: normal;
}

button{
  background-color: transparent;
  border: none;
  width:100%;
  position: relative;
  height: 1px;
}

p{
  margin-bottom: 0rem;
}

`;

export const Heading3 = styled.div`

/* PC Screen */
@media only screen and (min-width: 1024px) {
  .h2{
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom : 10px;
    letter-spacing: 0em;
  }
}

/* Tablet screens */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .h2{
    font-size: 30px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom : 10px;
    letter-spacing: 0em;
  } 
}

/* Mobile screens */
@media only screen and (max-width: 767px) {
  .h2{
    font-size: 23px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom : 10px;
    letter-spacing: 0em;
  }
}
`;