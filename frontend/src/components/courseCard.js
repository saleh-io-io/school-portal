import { useAuthContext  } from "../hooks/userAuthContext";


const CourseCard = ({ course , getCourses}) => {
    const { user } = useAuthContext();

    const handleClick = async () => {

        if(!user){
            return
        }
        console.log(user.token);

        const response = await fetch(`http://localhost:5000/api/courses/${course._id}`, {
            method: 'DELETE',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            }

        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
        }
        if (response.ok) {
            console.log(json.message);
            getCourses();
        }
    }

    return (<div className="courseCont">
        <div className="flex">
        <div className="info">
        <p><b>Course:</b> &nbsp; {course.name} </p>
        <p><b>Description: &nbsp; </b> {course.description}</p>
        <p><b>Instructor:</b> &nbsp; {course.teacher}</p> 
        <p><b>Start Date:</b> &nbsp; {new Date(course.startDate).toLocaleDateString()}</p>
        <p><b>End Date:</b> &nbsp; {new Date(course.endDate).toLocaleDateString()}</p>
        
        </div>
        {user && user.role == "teacher" && user.email == course.teacher && (
             <span className="deleteBtn" onClick={handleClick}>delete</span> )}
        </div>
         </div>)
}

export default CourseCard;