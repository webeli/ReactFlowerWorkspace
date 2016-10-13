import * as firebase from 'firebase';

// Load All Projects
export function loadAllProjectsSuccess(projects) {
    return {
        type: 'GET_ALL_PROJECTS_DATA',
        payload: projects
    }
}
export function getAllProjects() {
    return function(dispatch) {
        firebase.database().ref('projects').on('value', (snap) => {
            dispatch(loadAllProjectsSuccess(snap.val()));
    });
    }
}