import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header.png';

class Home extends Component
{
    render ()
    {
        return(
         <div>
             <Header 
                title = "Learning a complete Full-Stack JS course"
                subtitle = "Gabriel Francez"
                buttonText = "Tell me more"
                link="/services"
                showButton={true}
                image={image}
             />
         </div>

        );
    }
}

export default Home;