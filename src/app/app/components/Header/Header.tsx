import { useForm } from 'react-hook-form'
import {
  DynamicConnectButton,
  DynamicWidget,
  useDynamicContext,
} from '@dynamic-labs/sdk-react-core'

interface Props {
  form: ReturnType<typeof useForm>
}

export const Header = ({ form }: Props) => {
  const { primaryWallet } = useDynamicContext()

  const isConnected = primaryWallet?.connected

  const onLogout = () => {
    window.location.reload()
    localStorage.clear()
  }

  return (
    <div className='text-white min-h-[70px] w-full flex  px-4  xl:px-0 justify-between items-start pt-4 xl:pt-0 xl:items-center'>
      <div className='flex flex-col  gap-y-4 xl:flex-row gap-x-4'>
        <div className='flex gap-x-1'>
          <span className=' font-extrabold'>Token Symbool:</span>
          <span className='text-[#9ca3af]'>{form.watch('token')}</span>
        </div>
        {form.watch('token_name') && (
          <div>
            <span className=' font-extrabold'>Token Name:</span>{' '}
            {form.watch('token_name')}
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
        {form.watch('max_supply') && (
          <div>
            <span className=' font-extrabold'>Max Supply:</span>{' '}
            {form.watch('max_supply')}
          </div>
        )}
        {form.watch('mintable') && (
          <div>
            <span className='font-extrabold'>Mintable:</span>{' '}
            {form.watch('mintable')}
          </div>
        )}
        {form.watch('burnable') && (
          <div>
            <span className='font-extrabold'>Burnable:</span>{' '}
            {form.watch('burnable')}
          </div>
        )}
      </div>
      <div>
        {isConnected ? (
          <button
            className='text-small text-white highlight-gradient h-[42px] rounded-lg  px-3 lg:w-[200px] 2xl:w-[280px] w-full'
            onClick={onLogout}
          >
            {primaryWallet?.address.slice(0, 6)}...
            {primaryWallet?.address.slice(-4)}
          </button>
        ) : (
          <DynamicConnectButton>
            <button className='text-small text-white highlight-gradient h-[42px] rounded-lg  px-3 lg:w-[200px] 2xl:w-[280px] w-full'>
              Connect Wallet
            </button>
          </DynamicConnectButton>
        )}
      </div>
    </div>
  )
}
