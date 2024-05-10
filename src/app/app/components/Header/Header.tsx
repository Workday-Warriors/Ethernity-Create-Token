import { useForm } from 'react-hook-form'
import {
  DynamicConnectButton,
  DynamicWidget,
  useDynamicContext,
} from '@dynamic-labs/sdk-react-core'

interface Props {
  form: ReturnType<typeof useForm>
}

const WalletIcon = () => (
  <svg
    width='16'
    height='14'
    viewBox='0 0 16 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M14.5116 2.94737H13.7674V0.736842C13.7674 0.541419 13.689 0.354001 13.5495 0.215816C13.4099 0.0776313 13.2206 0 13.0233 0H2.23256C1.64045 0 1.07259 0.232894 0.653901 0.647448C0.235215 1.062 0 1.62426 0 2.21053V11.0526C0 11.6389 0.235215 12.2012 0.653901 12.6157C1.07259 13.0303 1.64045 13.2632 2.23256 13.2632H14.5116C14.709 13.2632 14.8983 13.1855 15.0378 13.0473C15.1774 12.9092 15.2558 12.7217 15.2558 12.5263V3.68421C15.2558 3.48879 15.1774 3.30137 15.0378 3.16318C14.8983 3.025 14.709 2.94737 14.5116 2.94737ZM2.23256 1.47368H12.2791V2.94737H2.26977C2.08591 2.9507 1.90676 2.88971 1.76383 2.77516C1.62091 2.6606 1.52337 2.4998 1.48837 2.32105C1.47218 2.21545 1.47938 2.10762 1.50946 2.00504C1.53953 1.90246 1.59178 1.80758 1.66256 1.72698C1.73335 1.64638 1.82099 1.58197 1.91942 1.53824C2.01784 1.4945 2.12469 1.47247 2.23256 1.47368ZM13.7674 5.89474H9.30233C9.10496 5.89474 8.91567 5.97237 8.77611 6.11055C8.63655 6.24874 8.55814 6.43616 8.55814 6.63158V9.57895C8.55814 9.77437 8.63655 9.96179 8.77611 10.1C8.91567 10.2382 9.10496 10.3158 9.30233 10.3158H13.7674V11.7895H2.23256C2.03519 11.7895 1.8459 11.7118 1.70634 11.5737C1.56678 11.4355 1.48837 11.2481 1.48837 11.0526V4.42105H13.7674V5.89474ZM11.5349 8.10526C11.5349 8.251 11.4912 8.39346 11.4095 8.51463C11.3277 8.6358 11.2115 8.73025 11.0755 8.78602C10.9395 8.84179 10.7899 8.85638 10.6455 8.82795C10.5012 8.79952 10.3686 8.72934 10.2645 8.62629C10.1604 8.52324 10.0895 8.39195 10.0608 8.24901C10.0321 8.10608 10.0468 7.95793 10.1032 7.82329C10.1595 7.68864 10.2549 7.57357 10.3772 7.4926C10.4996 7.41164 10.6435 7.36842 10.7907 7.36842C10.9881 7.36842 11.1774 7.44605 11.3169 7.58424C11.4565 7.72242 11.5349 7.90984 11.5349 8.10526Z'
      fill='white'
    ></path>
  </svg>
)

export const Header = ({ form }: Props) => {
  const { primaryWallet } = useDynamicContext()

  const isConnected = primaryWallet?.connected

  const onLogout = () => {
    window.location.reload()
    localStorage.clear()
  }

  return (
    <div className='border-b-[0.5px] border-b-[#303030] w-full '>
      <div className='text-white container gap-y-2  min-h-[70px] w-full flex flex-col lg:flex-row px-4  lg:px-0 justify-between items-start pt-4 lg:pt-0 lg:items-center'>
        <div className='flex flex-col py-4 px-4 w-full lg:w-[85%]  overflow-x-auto gap-y-4 lg:flex-row gap-x-4'>
          <div className='flex gap-x-1 items-center'>
            <span className=' font-extrabold'>Token Symbool:</span>
            <span className='text-[#9ca3af]'>
              {form.watch('token')?.slice(0, 15)}
            </span>
          </div>
          {form.watch('token_name') && (
            <div className='flex items-center gap-x-2'>
              <span className='font-extrabold'>Token Name:</span>{' '}
              <span className='text-[#9ca3af]'>
                {form.watch('token_name')?.slice(0, 15)}
              </span>
            </div>
          )}
          {form.watch('token_icon') && (
            <div className='flex items-center gap-x-2'>
              <span className=' font-extrabold'>Token Icon:</span>{' '}
              <img
                src={URL?.createObjectURL(form.watch('token_icon') || {})}
                alt={form.watch('token')}
                className='w-[30px] h-[30px] rounded-full'
              />
            </div>
          )}
          {Boolean(form.watch('max_supply')) && (
            <div className='flex items-center gap-x-2'>
              <span className=' font-extrabold'>Max Supply:</span>{' '}
              <span className='text-[#9ca3af]'>
                {Number(form.watch('max_supply')).toLocaleString()}
              </span>
            </div>
          )}
          {form.watch('mintable') && (
            <div className='flex items-center gap-x-2'>
              <span className='font-extrabold'>Mintable:</span>{' '}
              <span className='text-[#9ca3af]'>{form.watch('mintable')}</span>
            </div>
          )}
          {form.watch('burnable') && (
            <div className='flex items-center gap-x-2'>
              <span className='font-extrabold'>Burnable:</span>{' '}
              <span className='text-[#9ca3af]'>{form.watch('burnable')}</span>
            </div>
          )}
        </div>
        <div className='w-full lg:w-auto'>
          {isConnected ? (
            <button
              className='px-5 py-2  text-[14px] rounded-[8px] border border-[#303030] text-white flex items-center gap-x-2'
              onClick={onLogout}
            >
              {primaryWallet?.address.slice(0, 6)}...
              {primaryWallet?.address.slice(-4)}
            </button>
          ) : (
            <DynamicConnectButton buttonClassName='w-full'>
              <button className='px-5 w-full py-4 mb-2 lg:mb-0 lg:py-2 text-[14px] rounded-[8px] border border-[#303030] text-white flex items-center gap-x-2'>
                <WalletIcon /> Connect Wallet
              </button>
            </DynamicConnectButton>
          )}
        </div>
      </div>
    </div>
  )
}
