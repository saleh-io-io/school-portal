import { createContext, useReducer } from "react";

const CourseContext = createContext();

const courseReducer = (state, action) => {
    switch(action.type) {
        case 'GET_COURSES':
            return {...state, Courses: action.payload};
        case 'ADD_COURSE':
            return {...state, Courses: [...state.Courses, action.payload]};
        case 'DELETE_COURSE':
            return {...state, Courses: state.Courses.filter(course => course._id !== action.payload)};
        default:
            return state;
    }
}

const CourseProvider = ({children}) => {
    const [state, dispach] = useReducer( courseReducer, {Courses: null})

    return (
        <CourseContext.Provider value={{Courses : []}}>
            {children}
        </CourseContext.Provider>
    );
};


export  {CourseContext, CourseProvider, courseReducer};