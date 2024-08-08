


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import CTA from '../components/CTA';




import React from 'react'
import { skills, experiences} from '../constants'


const About = () => {
  return (
    <section className="max-container">
      
      <h1 className="head-text"> Hello, I'm <span className="blue-gradient_text font_semibold  drop-shadow ">Keerat</span> 



      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> Software Engineer based in India, specializing in learning and building web applications.</p>
      </div>

      <div className="py-10 flex flex-col">

        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">

          {skills.map((skill)=>(
            <div  className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-centre items-centre">

                      <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className=" w-1/2 h-1/2 object-contain"
                      />

                  </div>
            </div>
          ))}

        </div>

      </div>


      <div className="py-16">

            <h3 className="subhead-text">Education</h3>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
       
        <p> Graduated with a Bachelor of Technology in Computer Science Engineering from Guru Tegh Bahadur Institute of Technology.</p>
     


          <div className="mt-12 flex ">

            <VerticalTimeline>
              {experiences.map((experience)=>(
                <VerticalTimelineElement
                
                 key={experience.company_name}
                 date={experience.date}
                 icon={<div className="flex justify-center items-center w-full h-full">
                  <img

                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[110%] h-[100%] object-contain'

                  />
                 </div>}
                 iconStyle={{background: experience.iconBg}}
                 contentStyle={
                  {
                    borderBottom:'8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow:'none',

                  }
                 }    
                
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font base'
                      style={{margin:0}} >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point,index)=>(
                        <li key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal'>
                          {point}
                        </li>
                      ))}
                  </ul>
                </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
          
          </div>

      </div>

      </div>
      <hr className='border-slate-200'/>
      {/* <CTA />   */}
    </section>
  )
}

export default About
















// import React from 'react';
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import CTA from '../components/CTA';
// import { skills, experiences } from '../constants';

// const About = () => {
//   return (
//     <section className="max-container">
//       <h1 className="head-text">
//         Hello, I'm <span className="blue-gradient_text font_semibold drop-shadow">Keerat</span>
//       </h1>

//       <div className="mt-5 flex flex-col gap-3 text-slate-500">
//         <p>Software Engineer based in India, specializing in learning and building web applications.</p>
//       </div>

//       <div className="py-10 flex flex-col">
//         <h3 className="subhead-text">My Skills</h3>

//         <div className="mt-16 flex flex-wrap gap-12">
//           {skills.map((skill) => (
//         <div className="relative group w-20 h-20 flex flex-col items-center justify-center">
//         {/* Skill Icon */}
//         <div className="block-container w-full h-full flex justify-center items-center relative z-10">
//           <div className="btn-back rounded-xl group-hover:bg-blue-500 transition-colors duration-300 ease-in-out" />
//           <div className="btn-front rounded-xl flex justify-center items-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
//             <img
//               src={skill.imageUrl}
//               alt={skill.name}
//               className="w-1/2 h-1/2 object-contain"
//             />
//           </div>
//         </div>
      
//         {/* Popup */}
//         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-teal-800 bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl p-2">
//           <p className="text-sm font-extrabold">{skill.name}</p>
//         </div>
//       </div>
      
       
         
//           ))}
//         </div>
//       </div>

//       <div className="py-16">
//         <h3 className="subhead-text">Work Experience</h3>
//         <div className="mt-5 flex flex-col gap-3 text-slate-500">
//           <p>I've worked in several MNCs, and I enjoy working with different technologies.</p>

//           <div className="mt-12 flex">
//             <VerticalTimeline>
//               {experiences.map((experience) => (
//                 <VerticalTimelineElement
//                   key={experience.company_name}
//                   date={experience.date}
//                   icon={
//                     <div className="flex justify-center items-center w-full h-full group">
//                       <img
//                         src={experience.icon}
//                         alt={experience.company_name}
//                         className="w-[60%] h-[60%] object-contain transition-transform duration-300 ease-in-out transform group-hover:scale-110"
//                       />
//                     </div>
//                   }
//                   iconStyle={{ background: experience.iconBg }}
//                   contentStyle={{
//                     borderBottom: '8px',
//                     borderStyle: 'solid',
//                     borderBottomColor: experience.iconBg,
//                     boxShadow: 'none',
//                   }}
//                 >
//                   <div>
//                     <h3 className="text-black text-xl font-poppins font-semibold">
//                       {experience.title}
//                     </h3>
//                     <p className="text-black-500 font-medium font base" style={{ margin: 0 }}>
//                       {experience.company_name}
//                     </p>
//                   </div>
//                   <ul className="my-5 list-disc ml-5 space-y-2">
//                     {experience.points.map((point, index) => (
//                       <li key={`experience-point-${index}`} className="text-black-500/50 font-normal">
//                         {point}
//                       </li>
//                     ))}
//                   </ul>
//                 </VerticalTimelineElement>
//               ))}
//             </VerticalTimeline>
//           </div>
//         </div>
//       </div>

//       <hr className="border-slate-200" />
//       <CTA />
//     </section>
//   );
// };

// export default About;













