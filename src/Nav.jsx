import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { scroller } from 'react-scroll';



export default class Nav extends Component {

    
    render() {
        const navbarItems = [{
                        label: " الصفحة الرئيسية",
                        target: "Home"
                    }, {
                        label: "من نحن",
                        target: "item-2"
                    }, {
                        label: "الأسئلة الشائعة",
                        target: "item-3"
                    }, {
                        label: "تواصل معنا ",
                        target: "item-4"
                    }, ]
        return (

            
            <div>


                
                <div class="topnav">
                    
                    
                <a  class="active" href="#Sign">تسجيل الدخول </a>
                    <a href="#Signup">تسجيل جديد</a>
                    <a href="#about">تواصل معنا </a>
                    <a href="#news">من نحن </a>
                    <a href="#contact">الأسئلة الشائعة</a>
               
                 
                    <a  href="#home" > الصفحة الرئيسية </a>
                </div>
            </div>
        )
    }
}



// import React, { Component } from 'react'
// import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
// import Home from './Home'
// import About from './About'
// import FAQ from './FAQ'
// import Contactus from './Contactus'




// class Nav extends Component {
    
//     render() {
//         const navbarItems = [{
//             label: " الصفحة الرئيسية",
//             target: "Home"
//         }, {
//             label: "من نحن",
//             target: "item-2"
//         }, {
//             label: "الأسئلة الشائعة",
//             target: "item-3"
//         }, {
//             label: "تواصل معنا ",
//             target: "item-4"
//         }, ]
//         return (
//             <div>
//                 <NavBar  items={navbarItems} offset={-80} duration={500} delay={0}    navWidth={100}>
//                 </NavBar>
//                 <div  className="nav1">
//                     <ElementsWrapper items={navbarItems}>

//                         <Home />
//                         <About />
//                         <FAQ />
//                         <Contactus/>
//                     </ElementsWrapper>
//                 </div>

                
//             </div>
//         );
//     }
// }

// export default Nav;