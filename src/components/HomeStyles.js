import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  //width: 100%;
  //max-width: 300px;
    display: flex;
    justify-content: center;
  border-radius: 10px;
    
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InfoCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Label = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 10px;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
