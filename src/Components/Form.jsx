import React from 'react'
import { useState } from 'react';
import './Form.css'


function Form() {
    const [name, setName] = useState(null);
    const [department, setDepartment] = useState(null);
    const [rating, setRating] = useState(null);
    const [items, setitems] = useState([]);

    const updateStudentName = (event) => {
        setName(event.target.value);
    }
    const updateDepartment = (event) => {
        setDepartment(event.target.value);
    }

    const updateRating = (event) => {
        setRating(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setitems((values) => {
            return [...values, [<span>Name</span>, ' : ', name, " | ", <span>Department</span>, ' : ', department, " | ", <span>Rating</span>, ' : ', rating]]

        })
    }

    return (
        <div className='wrapper'>
            <h1>EMPLOYEE FEEDBACK FORM</h1> <br />
            <form onSubmit={handleSubmit}>
                <label id="name">Name:</label>
                <input type="text" className="name" value={name} onChange={updateStudentName} required></input><br></br><br></br>
                <label id="dept">Department:</label>
                <input type="text" className="classDepartment" value={department} onChange={updateDepartment} required></input><br></br><br></br>
                <label id="ratings">Rating:</label>
                <input type="number" className="rating" value={rating} onChange={updateRating} required></input><br></br><br></br>
                <button id="submit">Submit</button><br></br>
            </form>

            <div className="result">
                {
                    items.map((values) => {
                        return <div className="containsResult">{values}</div>
                    })
                }
            </div>

        </div>
    );
}

export default Form