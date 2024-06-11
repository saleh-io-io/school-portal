import React, { useState } from 'react';

import { useAuthContext } from '../hooks/userAuthContext';

const CourseForm = ({getCourses}) => {
    const { user } = useAuthContext();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        if(!user && user.role == "teacher"){
            setError('You must be logged in to add a course');
            return
        }
        const teacher = user.email;
        const course = { name, description, teacher , startDate, endDate};
        console.log(course);
        
        const response = await fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`

            }
        });
        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
             setError(json.error);
        }
        if (response.ok){
            setName('');
            setDescription('');

            setStartDate('');
            setEndDate('');
            getCourses();
        }
    }

    return user.role == "teacher" && ( 
        <div className='form courseForm'>

            <form  onSubmit={handleSubmit}>
                <h2>add new Course: </h2> <br />
                <input type="text" name="name" placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <input type="text" name="description" placeholder="Course Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
              
                <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"/>
                <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End Date"
        />

                <button type="submit">Add Course</button>
            {error && <div className='error'><p>{error}</p> </div>}

            </form>
        </div>
    )
}

export default CourseForm;