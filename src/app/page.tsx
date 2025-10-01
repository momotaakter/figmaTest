import React from 'react'
import Common from '@/component/common/CommonSection';
import Preheader from '@/component/header/Preheader';
import HeroSection from '@/component/heroSection';
import Header from '@/component/header/Header';
import FeaturesSection from '@/component/featuresSection/FeaturesSection';
import LearnerStudent from '@/component/learningstudent/learnerStudent'

function page() {
  return (
 
<div className="max-w-[1278px] mx-auto p-8">

  
  <Preheader></Preheader>
  <Header></Header>



<div className="space-y-[100px]">

   <HeroSection></HeroSection>

<Common
  buttonText="Our Features"
  heading="Our Special Features"
  text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
/>

<FeaturesSection></FeaturesSection>

<Common
  buttonText="Click Me"
  heading="What Students Learn"
  text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
/>


<LearnerStudent></LearnerStudent>

</div>

</div>

  )
}

export default page