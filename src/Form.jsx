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
