import React from 'react'
import {apple,bill,google} from '../assets'
import styles, { layout } from '../styles'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionImgReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div  className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[80%] white__gradient rounded-full'/>
        <div  className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[50%] pink__gradient rounded-full'/>
      </div>

      {/* right div */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br  className='sm:block hidden'/>billing & invoicing.</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'> 
        <img src={apple} alt="apple-store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        <img src={google} alt="google_Play" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
      </div>
    </section>
  )
}

export default Billing