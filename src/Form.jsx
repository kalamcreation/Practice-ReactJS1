<<<<<<< HEAD
import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        userEmail: '',
        userPassword: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <form onSubmit={submitForm} className="space-y-4">
                {/* Full Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Username */}
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your username"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="userPassword" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Gender */}
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
=======
import React from 'react'

export default function Form() {
    const Form = () =>{
        return (
            <div className='max-w-md mx-auto'>
                <form  className="space-y-4">
                    <div>
                        <label
                        htmlFor="name"
                        className='block text-sm font-medium text-gray-700'
                        >
                            Name

                        </label>
                        <input
                        type="text"
                        id='name' 
                        name='name'
                        className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500'
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="name"
                        className='block text-sm font-medium text-gray-700'
                        >
                            Name

                        </label>
                        <input
                        type="text"
                        id='name' 
                        name='userName'
                        className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500'
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="email"
                        className='block text-sm font-medium text-gray-700'
                        >
                            Email

                        </label>
                        <input
                        type="text"
                        id='name' 
                        name='UserName'
                        className='mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500'
                        />
                    </div>
                </form>
            </div>
          )
    }
  
}
>>>>>>> f0856b8ed05e1826adaa821efd53fe3a71f12f62
