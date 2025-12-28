import React, { useState } from 'react'

const App = () => {

  const [currentStep,setCurrentStep] = useState(1);
  const [FormData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
    age:"",
    city:""
  });
  const totalStep = 3;

  const handleNext = () => {
    // Validation Step 1
    if (currentStep === 1) {
      if (!FormData.name || !FormData.email || !FormData.password) {
        alert("Please fill all fields in Personal Information");
        return;
      }
    }

    // Validation Step 2
    if (currentStep === 2) {
      if (!FormData.phone || !FormData.age || !FormData.city) {
        alert("Please fill all fields in Contact Information");
        return;
      }
    }

    // Agar last step pe hai to submit karo
    if (currentStep === totalStep) {
      alert('Registration Successful! 🎉\nThank you for registering!');
      
      // Form reset
      setFormData({
        name: "", email: "", password: "", phone: "", age: "", city: ""
      });
      setCurrentStep(1); // Wapas first step pe
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
   
    

  return (
    <>
    <div className='md:max-w-lg  max-w-lg   mx-auto mt-3 px-8 py-3 bg-orange-400 shadow-lg rounded-lg'>
        
        <h2 className='text-center text-2xl font-bold mb-5'>Multi-Step Registration Form</h2>

        {/* // Progress Bar start */}
        <div>
          <div className='flex justify-between mb-2'>
            {[1,2,3].map((step)=>(
              <div key={step} className={`w-10 h-10 rounded-full  flex items-center justify-center font-bold text-white${
                currentStep >= step ? ' bg-green-500' : ' bg-gray-300'
              }`}>
                {step}
              </div>
            ))}
          </div>
          <div className='h-2 bg-gray-300 rounded-full overflow-hidden'>
            <div className='h-full bg-green-500 rounded-full transition-all duration-300'
              style={{width: `${((currentStep - 1) / (totalStep - 1)) * 100}%`}}>
            </div>
          </div>
        </div>
        {/* Center Content start  */}
            <p className='text-center text-gray-700 font-bold mt-1'>Step {currentStep} of {totalStep}</p>
        {/* Center Content End  */}
            {/* Input field code Start */}
            {currentStep === 1 && (
              <div>
                <h3 className='text-xl font-semibold mb-2 text-center'>Personal Information</h3>
                <label className='text-lg ml-1.5 text-black'>Full Name :</label>
                <input type="text" placeholder='Enter your First name' value={FormData.name} 
                onChange={(e)=>{
                  setFormData({...FormData,name:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
                <label className='text-lg ml-1.5 text-black'>Email :</label>
                <input type="email" placeholder='Enter your email' value={FormData.email} 
                onChange={(e)=>{
                  setFormData({...FormData,email:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
                <label className='text-lg ml-1.5 text-black'>Password :</label>
                <input type="password" placeholder='Enter your password' value={FormData.password} 
                onChange={(e)=>{
                  setFormData({...FormData,password:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <h3 className='text-xl font-semibold mb-2 text-center'>Contact Information</h3>
                <label className='text-lg ml-1.5 text-black'>Phone Number :</label>
                <input type="tel" placeholder='Enter your phone number' value={FormData.phone} 
                onChange={(e)=>{
                  setFormData({...FormData,phone:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
                <label className='text-lg ml-1.5 text-black'>Age :</label>
                <input type="number" placeholder='Enter your age' value={FormData.age} 
                onChange={(e)=>{
                  setFormData({...FormData,age:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
                <label className='text-lg ml-1.5 text-black'>City :</label>
                <input type="text" placeholder='Enter your city' value={FormData.city} 
                onChange={(e)=>{
                  setFormData({...FormData,city:e.target.value})
                }}
                className='w-full p-2  border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3'
                />
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <h3 className='text-xl font-semibold mb-2 text-center'>Review Information</h3>
                <p className='mb-2'><strong>Full Name:</strong> {FormData.name}</p>
                <p className='mb-2'><strong>Email:</strong> {FormData.email}</p>
                <p className='mb-2'><strong>Phone Number:</strong> {FormData.phone}</p>
                <p className='mb-2'><strong>Age:</strong> {FormData.age}</p>
                <p className='mb-2'><strong>City:</strong> {FormData.city}</p>
                <p className='text-green-600 font-bold text-center mt-4'>Thank you for registering!</p>
              </div>
            )}
            {/* Input field code End */}
                    {/* Next and Previous Button Start */}
            <div className='py-1 justify-between flex mt-5'>
            <button className='cursor-pointer px-5 py-2 mt-1 rounded-lg bg-gray-300 ' onClick={()=>{
              if(currentStep == 1){
                setCurrentStep(1)
              }else{
                setCurrentStep(currentStep-1)
              }
            }}>Previous</button>
            <button className='cursor-pointer px-5 py-2 mt-1 rounded-lg bg-green-500 ' onClick={()=>{
              handleNext();
            }}>{currentStep == totalStep ? 'Submit' : 'Next'}</button>
            </div>
            {/* Next and Previous Button Start */}
    </div>
    </>
  )
}

export default App