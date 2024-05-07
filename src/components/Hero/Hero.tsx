import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='reltive min-h-screen flex justify-center items-center w-full'>
      <div className='w-full flex flex-col items-center'>
        <h1 className='hero_title text-[32px] md:text-[56px] lg:text-[80px] font-medium  mb-10'>
          Ethernity Ecosystem
        </h1>
        <p className=' w-[80%] lg:w-[50%] text-white text-center text-xl not-italic font-normal leading-[33px] tracking-[0.72px]'>
          Dive into the Ethernity Ecosystem, where the ERN token intersects with
          utility, shaping the next chapter of crypto evolution.
        </p>
      </div>
      <div className='absolute inset-0 z-[-1] h-full w-full'>
        <Image
          className='w-full h-full'
          src='/hero.png'
          width={1000}
          height={1000}
          alt='hero'
        />
      </div>
    </div>
  )
}
