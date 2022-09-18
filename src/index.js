import "./styles/styles.css";
import { ProjectList, Project } from "./scripts/project.js";
import { Display } from "./scripts/display.js";
import { Task } from "./scripts/task.js";

let DEFAULTLIST = new ProjectList();
let DEFAULTDISPLAY = new Display();
let DEFAULTPROJECT = new Project("default", true);

DEFAULTDISPLAY.init(DEFAULTLIST, DEFAULTPROJECT);
DEFAULTLIST.addProject(DEFAULTPROJECT, DEFAULTDISPLAY);
DEFAULTPROJECT.addTask(new Task(1,1,1,1,1,1,1), DEFAULTDISPLAY);
//working within create task item

//switch the text section of creating new projects to be buttons, the event listener for click should run switch project and send the index of the button over to switchProject()
//feature: needs to be able to switch project names and update task fields
//after that use css to style the current Project.
//maybe add something to highlight the current Project when update display is called that would mean calling update display within the switch project function.

//update task indexes should take priority into account. for example if a prority is high it will be placed first on the list
//bug warning if all projects are deleted no project will be set as the current project, also if currentProject is deleted there is no longer any currentProject which breaks the program.