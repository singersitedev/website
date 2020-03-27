import React from 'react';

class AboutMe extends React.Component {

    render() {
        return(
            <div id="aboutMePage" className="contentMain">
                <img id="aboutMeImage" src="./img/aboutMe.jpg" alt="aboutMeImage"></img>
                <div id="aboutMeText" className="contentText">The Ayala Museum is a museum in Makati, Metro Manila, Philippines. It is located in Ayala Center adjacent to Greenbelt mall and is run 
                privately by the Ayala Foundation. This six-storey edifice houses ethnographic and archaeological exhibits on Filipino culture, art, and history. Since its establishment 
                in 1967,[2] the museum has been committed to showcasing overseas collections and situating contemporary Philippine art in the global arena in a two-way highway of mutual cooperation 
                and exchange with local and international associates.[3]<br /><br />Envisioned during the 1950s by Philippine abstract painter Fernando Zóbel de Ayala y Montojo, as a museum of Philippine 
                history and iconography, the Ayala Museum was established in 1967 as a project of the Filipinas Foundation, now known as the Ayala Foundation.[2] The museum was housed at the Insular 
                Life Building and was transferred to[4] the old Makati Stock Exchange 
                Building.[5] The old building was designed by National Artist Leandro Locsin.[4]
                </div>
            </div>
        );
    }
};

export default AboutMe; 