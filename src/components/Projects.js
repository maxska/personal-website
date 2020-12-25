import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style/Home.css'

import TopBar from './TopBar.js'


import "./style/ProjectsText.css";
import ProjectsTexts from "./texts/ProjectsTexts";
import ProjectElement from "./ProjectElement.js"


const Projects = () =>
{
	return(
		<div>
      
			<div className="page">
				<h1 className="heading">Projects</h1>

				<p>
					{ProjectsTexts["info"]}
				</p>

				{
					ProjectsTexts["projects"].map(project => {
						return (
							<ProjectElement 
							title={project.title}
							languages={project.languages}
							repo={project.repo}
							liveDemo={project.liveDemo}
							description={project.description}
							workInProgress={project.workInProgress}
							/>
						);
					})
				}
			</div>

		</div>
	)
}

export default Projects;