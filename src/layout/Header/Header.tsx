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
          className='text-small text-white highlight-gradient h-[42px] rounded-lg px-3 lg:w-[200px] 2xl:w-[280px] w-full'
        >
          Launch App
        </button>
        <DynamicConnectButton>
          <button className='text-small text-white highlight-gradient h-[42px] rounded-lg  px-3 lg:w-[200px] 2xl:w-[280px] w-full'>
            Connect Wallet
          </button>
        </DynamicConnectButton>
      </div>
    </div>
  )
}
