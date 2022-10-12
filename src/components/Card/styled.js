import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 15rem;
  min-width: 15rem;
  width: 100%;
  position: relative;
  height: 100%;
  max-height: 19rem;
  border-radius: 5px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

export const Image = styled.img`
  background-color: #38bdf8;
  width: 100%;
  height: 10rem;
  user-select: none;
`;

export const Title = styled.h3`
  width: 100%;
  padding-top: 0.2rem;
  font-size: medium;
  text-align: center;
  text-transform: uppercase;
  object-fit: cover;
  color: #1e293b;
`;

export const Description = styled.p`
  font-size: x-small;
  text-align: justify;
  padding: 0.5rem 0;
  color: #475569;
  :after {
    content: '...';
  }
`;

export const Content = styled.div`
  padding: 0 0.5rem;
`;



export const Price = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  background-color: #10b981;
  font-size: small;
  font-weight: bolder;
  color: white;
  text-transform: capitalize;
`;

export const More = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  font-size: smaller;
  text-transform: uppercase;
  padding: 0.3rem;
  border-radius: 3px;
  background-color: #10b981;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #059669;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  background-color: #f1f5f9;
`;
