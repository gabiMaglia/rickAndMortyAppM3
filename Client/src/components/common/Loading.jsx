import styled from "styled-components";
const Container = styled.div`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: purple purple purple purple;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #00801c;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  return (
    <Container>
      <Loader />
      <h4>Loading...</h4>
    </Container>
  );
};

export default LoadingSpinner;
