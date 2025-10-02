import React from 'react'
import Common from '@/component/common/CommonSection';

import HeroSection from '@/component/heroSection';

import FeaturesSection from '@/component/featuresSection/FeaturesSection';
import LearningStudentSection from '@/component/LearningStudentSection'



function page() {
  return (
 
<>

  
  



<div className="space-y-[100px]">

   <HeroSection></HeroSection>

<Common
  btn="Our Features"
  heading="Our Special Features"
  text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
/>

<FeaturesSection></FeaturesSection>

<Common
  btn="Our Features"
  heading="What Students Learn"
  text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
/>



<LearningStudentSection></LearningStudentSection>


</div>

</>

  )
}

export default page