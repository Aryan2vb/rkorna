import React from 'react';
import { Container, Header, InfoBox, InfoCard, InfoCardItem, Label, Value, Footer, FooterItem } from './HomeStyles';
import StatusCarousel from "./StatusCarousel";
import LogoCarousel from "./LogoCarousel";
const Home = () => {
    const statuses = [
        {
            image: 'https://via.placeholder.com/100',
            link: 'https://www.instagram.com/reel/C4vmo0Bv1AI/?igsh=cGEweDl0YnZxYnBm',
            title: 'Fancy Jhala',
        },
        {
            image: 'https://via.placeholder.com/100',
            link: 'https://www.instagram.com/example2',
            title: 'Single Pendant 20K',
        },
        {
            image: 'https://via.placeholder.com/100',
            link: 'https://www.instagram.com/example3',
            title: 'Double Pendant 20K',
        },
        {
            image: 'https://via.placeholder.com/100',
            link: 'https://www.instagram.com/example4',
            title: 'L Ring',
        },
        {
            image: 'https://via.placeholder.com/100',
            link: 'https://www.instagram.com/example5',
            title: 'Nathiya',
        }
        // Add more status items as needed
    ];

    const logos = [
        {
            src: "/images/360_F_441928761_MVjFNmnOl1djWtuU1LZrYSy5B8esou2C.jpg",
            alt: "Logo 1"
        },
        {
            src: "/images/logo2.png",
            alt: "Logo 2"
        },
        {
            src: "/images/logo3.png",
            alt: "Logo 3"
        },
        {
            src: "/images/logo4.png",
            alt: "Logo 4"
        },
        {
            src: "/images/logo5.png",
            alt: "Logo 5"
        }
    ];

    return (

        <Container>
            <StatusCarousel statuses={statuses}/>
            <Header>
                <LogoCarousel logos={logos} />
                {/*<Logo src="/images/360_F_441928761_MVjFNmnOl1djWtuU1LZrYSy5B8esou2C.jpg" alt="Ramakrishna Ornaments" />*/}
            </Header>
            <InfoBox>
                <InfoCard>
                    <InfoCardItem>
                        <img
                            src="/images/png-transparent-two-100-g-fine-gold-bars-california-gold-rush-gold-as-an-investment-gold-bar-gold-investment-bullion-gold-thumbnail.png"
                            alt="Gold Bar"
                            width="40"
                        />
                        <Label>नम्बर 99.99</Label>
                        <Value>₹50650</Value>
                        <Label>Last Update: 29-05-21 02:48 PM</Label>
                    </InfoCardItem>
                    <InfoCardItem>
                        <img
                            src="/images/png-transparent-two-100-g-fine-gold-bars-california-gold-rush-gold-as-an-investment-gold-bar-gold-investment-bullion-gold-thumbnail.png"
                            alt="Gold Bar"
                            width="40"
                        />
                        <Label>ब्रेड 99.50</Label>
                        <Value>₹50400</Value>
                        <Label>Last Update: 29-05-21 02:48 PM</Label>
                    </InfoCardItem>
                </InfoCard>
                <InfoCard>
                    <InfoCardItem>
                        <img
                            src="/images/360_F_118012591_mprEDOWCpxMj2HU1Zpxja0L205oku5CW.jpg"
                            alt="Silver"
                            width="40"
                        />
                        <Label>चाँदी बटिया</Label>
                        <Value>₹72800</Value>
                        <Label>Last Update: 29-05-21 11:57 AM</Label>
                    </InfoCardItem>
                    <InfoCardItem>
                        <img
                            src="/images/360_F_118012591_mprEDOWCpxMj2HU1Zpxja0L205oku5CW.jpg"
                            alt="Bank"
                            width="40"
                        />
                        <Label>बैंक/फ़ोन पे</Label>
                        <Value>₹50425</Value>
                        <Label>Last Update: 29-05-21 02:49 PM</Label>
                    </InfoCardItem>
                </InfoCard>
            </InfoBox>
            <Footer>
                <FooterItem>
                    <Label>Gold</Label>
                    <Value>₹48550</Value>
                    <Label>+23</Label>
                </FooterItem>
                <FooterItem>
                    <Label>Silver</Label>
                    <Value>₹71526</Value>
                    <Label>-189</Label>
                </FooterItem>
            </Footer>
        </Container>
    );
};

export default Home;
