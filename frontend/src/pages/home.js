import { useEffect, useState } from 'react';
import CourseCard from '../components/courseCard';
import CourseForm from '../components/addCourseForm';
import { useAuthContext } from '../hooks/userAuthContext';


const Home = () => {

    const [courses, setCourses] = useState(null);
    const [serverNotContacted, setServerNotContacted] = useState(false);
    const { user } = useAuthContext();

    const fetchCourses = async () => {

        try{
        const response = await fetch('http://localhost:5000/api/courses', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        const json = await response.json();

        if (response.ok) {
            console.log(json.courses);
            setCourses(json.courses);
            setServerNotContacted(false);



        }
    } catch (error) {
        console.log(error);
        setServerNotContacted(true);
    
    }

    }

    
    useEffect(() => {
        if(user){
            fetchCourses();

        }

        
    }, [user])


    return <div className='home'>
        

        {serverNotContacted && <p>Server not contacted</p>}
        <div className="flex">
            <div className='courses'>

                {courses && courses.map(course => {
                    return <CourseCard key={course._id} course={course} getCourses={fetchCourses} />


                })}
            </div>

            <CourseForm  getCourses={fetchCourses} />

           
        </div>

    </div>
}

export default Home;