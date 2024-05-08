'use client'
import { useRouter } from 'next/navigation'
import { DynamicConnectButton } from '@dynamic-labs/sdk-react-core'

export const Header = () => {
  const router = useRouter()

  return (
    <div className='w-full px-10 flex justify-end items-center h-[100px] fixed top-0 left-0  bg-transparent'>
      <div className='w-full lg:w-auto flex justify-between gap-x-8'>
        <button
          onClick={() => router.push('/app')}
          className='relative outline-none focus:outline-none active:outline-none inline-flex  group'
        >
          <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
          <span className='relative inline-flex items-center justify-center px-3  md:px-4 lg:px-8 py-4 text-base lg:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none'>
            Launch App
          </span>
        </button>

        <DynamicConnectButton>
          <button className='relative outline-none focus:outline-none active:outline-none inline-flex  group'>
            <div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
            <span className='relative inline-flex items-center justify-center px-3 md:px-4 lg:px-8 py-4 text-base lg:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none'>
              Connect Wallet
            </span>
          </button>
        </DynamicConnectButton>
      </div>
    </div>
  )
}
