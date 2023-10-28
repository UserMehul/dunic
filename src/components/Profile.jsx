import React from 'react';
import DUNIC from '../images/dunic.jpg';

const Profile = () => {
  const isMobile = true;

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl font-semibold mb-20">Hi, DUNIC</h1>
    
        <div className="flex flex-col md:flex-row m-4 p-2 bg-slate-100 shadow-md">
           <div className="w-full md:w-4/12 flex justify-center">
             <img
      className="w-full md:w-half rounded-lg object-cover object-center m-2" alt=""
      src={DUNIC}
    />
          </div>
          <div className="w-full md:w-8/12 p-4">
            <h2 className="text-xl font-semibold">DUNIC: Develop Unique Notion In Creativity</h2>
            <p>
              At DUNIC, we empower students to explore the world of design confidently. Our mission is to introduce them to the art of design while providing guidance at every step.
            </p>
            <p className="mt-2">
              DUNIC is a specialized coaching institute for top design entrance exams like IIT, NID, NIFT, and others. We also provide crash courses and portfolio consultations for national and international colleges. Join us for a transformative journey where creativity knows no bounds, and innovation is the destination.
            </p>
            <p className="mt-2">
              We seamlessly blend traditional and contemporary design thinking, bridging the gap between manual and digital design to enhance comprehension and feasibility. Education at DUNIC transcends the classroom. Alongside design, we offer diverse activities such as music, art, dance, and design talks, encouraging students to embrace a broader perspective.
            </p>
            <p className="mt-2">
              DUNIC goes beyond conventional education; it's a journey of self-discovery and personal growth. We see design as a meditative process, unlocking innate creativity and guiding students toward a more innovative mindset. We also prepare students for success in the design industry, offering thoughtful mentorship and recognizing the importance of a balanced, healthy lifestyle.
            </p>
          </div>
        
         
        </div>
  
    </div>
  );
};

export default Profile;
