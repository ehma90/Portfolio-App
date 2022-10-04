import React from 'react';

function About() {
  return (
    <div className='mt-[150px] text-md md:text-lg'>
      <p className='leading-7'>I'm <span className='text-green-900 font-semibold '>Emmanuel,</span> a software developer and Content writer from Nigeria.</p>
      <p className='leading-7'>Currently building side project, you can find it in <a href="https://github.com/ehma90" className='font-bold text-green-900 underline decoration-1'>my Github</a> repository.</p>
      <p className='leading-7'>Available for jobs and collaborations.</p>
      <p className='leading-7'>Join me on <a href="https://twitter.com/ehmaessieen">Twitter</a>, where I share tweets about new things I learnt and memes.</p>
      <p className='leading-7'>Feel free to send an <a href="mailto:ehmaessien@gmail.com" className=' font-bold text-green-900 underline decoration-1'>Email</a> </p>
    </div>
  );
}

export default About;
