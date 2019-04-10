import React, { Component } from 'react';
import styles from '../ProjectSections.css';
import CSSModules from 'react-css-modules';
import ProjectTile from '../../ProjectTile/ProjectTile';
import projectsInfo from '../../../../assets/projectsInfo';
import Icon from '../../../../components/Icon/Icon';
import {NavLink} from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import links from '../../../../assets/links';

var projectsArray = projectsInfo.headings.order;
class Hackathons extends Component {
    state = {
        leftArrow: true,
        rightArrow: true
    }

    componentDidMount() {
        window.scrollTo(0,0);
        if(projectsArray.indexOf((projectsInfo.headings.hackathons.link).toLowerCase()) === 0) {
            this.setState({leftArrow: false});
        }
        if(projectsArray.indexOf((projectsInfo.headings.hackathons.link).toLowerCase()) === projectsArray.length - 1) {
            this.setState({rightArrow: false});
        }
    }
    

    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row" styleName="title-block">
                        <div className="col-md-2">
                            {this.state.leftArrow ? 
                                <NavLink styleName="btn-prev" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.hackathons.link.toLowerCase()) - 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </NavLink>: 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon>
                                </a>
                            }
                        </div> 
                        <div className="col-md-8" styleName="heading-div">
                            <h1>
                                {projectsInfo.headings.hackathons.title}
                            </h1>
                        </div>
                        <div className="col-md-2">
                            {this.state.rightArrow ? 
                                <NavLink styleName="btn-next" to={`/projects/${projectsArray[projectsArray.indexOf(projectsInfo.headings.hackathons.link.toLowerCase()) + 1]}`} >
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </NavLink> : 
                                <a className="btn-disabled" styleName="btn-disabled">
                                    <Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon>
                                </a>
                            }
                        </div>
                    </div>
                        <p>
                            {projectsInfo.headings.hackathons.description}
                        </p>
                </span>
                <div className="row">
                    <ProjectTile activateModal = {() => this.props.openProject(projectsInfo.airdrums)} to="/projects/hackathons/airdrums" singleTile="true" tag={projectsInfo.airdrums.tag} title={projectsInfo.airdrums.name} shortDesc={projectsInfo.airdrums.description} />
                </div>
                <div className="row">
                    <ProjectTile activateModal = {() => this.props.openProject(projectsInfo.ryse)} to="/projects/hackathons/ryse" reverse="true" imageHeight="400px" imageName="projects/ryse.png" tag={projectsInfo.ryse.tag} title={projectsInfo.ryse.name} shortDesc={projectsInfo.ryse.description} />
                </div>
                <div className="row">
                    <ProjectTile activateModal = {() => this.props.openProject(projectsInfo.moodify)} to="/projects/hackathons/moodify" imageHeight="400px" imageName="projects/moodify.png" tag={projectsInfo.moodify.tag} title={projectsInfo.moodify.name} shortDesc={projectsInfo.moodify.description}/>
                </div>
                <div className="row">
                    <Button newPage="true" link={links.devpost} btnType="btnLarge" >View Devpost</Button>
                </div>
            </div>
        )
    }
};



export default CSSModules(Hackathons, styles);