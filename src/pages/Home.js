import React from 'react';
import HeroSection from '../components/HeroSection';
import Animation from '../components/Animation';
import pic from '../images/gif.gif';
import ChefAnimation from '../components/ChefAnimation';
import chefPhoto from '../images/miguel-square.jpg';
import ImageAnimation from '../components/ImageAnimation';
import burger from '../images/burger.png';


function Home() {
    return (
        <>
            <HeroSection />
            <ChefAnimation
                image={chefPhoto}
                text='a taste of innovation that tampa bay deserves'
                paragraph="At Ocho Trece, every dish tells the story of our chef, Miguel Bravo, a culinary artist whose passion knows no bounds. Cooking daily with unwavering dedication, Chef Bravo is constantly on the quest for new flavors, elevating his creations to new heights with each innovative twist."
                paragraph2="Trained at the prestigious Le Cordon Bleu in Lima,Peru, Chef Bravo graduated with the esteemed Cordon Bleu Mention, a testament to his exceptional skills and talent. Beyond his accolades, it is his love for cooking that truly sets him apart. For Chef Bravo, every plate is more than just food—it's an expression of his passion, an art form that he shares with every guest who dines with us."
                button='get to know ocho trece' />

            <ImageAnimation
                image={burger}
                tittle='crafted with passion, served with excellence'
                paragraph="We believe that when someone finds their true passion, it makes all the difference in everything they do. At Ocho Trece, that passion is evident in every bite, every aroma, and every presentation that graces your table. We are honored to bring Chef Bravo's talent and vision to Tampa Bay, offering a dining experience that this city truly deserves."
                button='savor the flavors' />

            <Animation
                imageSrc={pic}
                text='elevate your event with our catering service!'
                paragraph='discover our exquisite selection of gastronomic options for all types of events. from weddings to corporate gatherings, our personalized catering service ensures an exceptional culinary experience that will delight your guests.' />
        </>
    );
}

export default Home;