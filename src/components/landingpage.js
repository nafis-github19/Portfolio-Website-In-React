import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://avatarfiles.alphacoders.com/211/211184.jpg" alt="batman avatar" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <h4>Front-End:</h4>
                            <p>Html5, CSS3, Sass, JavaScript, JQuery, React</p>
                            <h4>Back-End:</h4>
                            <p>PHP, MySQL, Database Design, Python, C++</p>
                            <h4>Dev Tools:</h4>
                            <p>Git, Github, AWS, Cloud-Computing, NPM</p>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>

                                <a href="https://github.com/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>

                                <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>

                                <a href="https://www.youtube.com/" target="_blank"  rel="noopener noreferrer"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                            </div>
                        </div>

                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage; 