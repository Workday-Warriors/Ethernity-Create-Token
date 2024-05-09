'use client'
import { Step, Stepper } from '@/components/Stepper/Stepper'
import { useForm } from 'react-hook-form'
import { Header, MaxSupply, TokenInput, TokenName } from './components'
import { useState } from 'react'
import { TokenIcon } from './components/TokenIcon'
import { Mintable } from './components/Mintable'
import { Burnable } from './components/Burnable'
import { InitialMint } from './components/InitialMint'
import { TokenContract } from './components/TokenContract'
import {
  DynamicConnectButton,
  DynamicWidget,
  useDynamicContext,
} from '@dynamic-labs/sdk-react-core'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const STEP: Step[] = [
  {
    title: 'Token Symbol',
    description:
      'Token Symbol: a up to 8 characters string, no spaces or special characters (only letters and numbers)',
  },
  {
    title: 'Token Name',
    description:
      'Token Name: a up to 16 characters string, no special characters ',
  },
  {
    title: 'Token Icon',
    description: 'allow to upload from computer (browse or drag and drop) ',
  },
  {
    title: 'Max supply',
    description:
      ' An integer number. Would be ideal to have some preloaded options or something where user does not have to type in a lot of zeroes (e.g. a dropdown with numbers from 1 to 100 and then another combo with K (thousands), M (millions), T (trillions), or a bar with a selector, etc. look on the web)      ',
  },
  {
    title: 'Mintable',
    description: ' Yes or NO',
  },
  {
    title: 'Burnable',
    description: ' Yes or NO',
  },
  {
    title: 'Initial mint to:',
    description: ' for now only creator wallet',
  },
  {
    title: 'Ethereum token contract:',
    description:
      'allow entry of token address on Ethereum (if the creator already has the same token on Ethereum blockchain and wants to make it bridgeable)',
  },
]

export default function App() {
  const form = useForm()
  const { primaryWallet } = useDynamicContext()
  const [active, setActive] = useState(0)
  const isConnected = primaryWallet?.connected

  const onSubmit = (formData: any) => {
    if (!isConnected) {
      toast.error('Please connect wallet', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        toastId: 'error',
      })
      return
    }
    if (active === 0 && formData.token) {
      setActive(1)
    }

    if (active === 1 && formData?.token_name) {
      setActive(2)
    }

    if (active === 2 && formData?.token_icon) {
      setActive(3)
    }
    if (active === 3 && formData?.max_supply) {
      setActive(4)
    }

    if (active === 4 && formData?.mintable) {
      setActive(5)
    }
    if (active === 5 && formData?.burnable) {
      setActive(6)
    }
    if (active === 6 && formData?.initial_mint) {
      setActive(7)
    }
    if (active === 7 && formData?.token_contract) {
      setActive(8)
    }

    if (active === STEP.length - 1) {
      console.log('submit', formData)
    }
  }

  const renderInput = () => {
    if (active === 0) {
      return <TokenInput form={form} />
    } else if (active === 1) {
      return <TokenName form={form} />
    } else if (active === 2) {
      return <TokenIcon form={form} />
    } else if (active === 3) {
      return <MaxSupply form={form} />
    } else if (active === 4) {
      return <Mintable form={form} />
    } else if (active === 5) {
      return <Burnable form={form} />
    } else if (active === 6) {
      return <InitialMint form={form} />
    } else {
      return <TokenContract form={form} />
    }
  }

  return (
    <>
      <Header form={form} />
      <div className=' container'>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />

        <div className='pt-10 gap-x-10 lg:flex-row flex-col flex'>
          <Stepper
            onChange={(act) => setActive(act)}
            active={active}
            steps={STEP}
          />
          <div className='w-full lg:px-0 px-4 lg:w-[60%]'>
            <p className='text_gradiant mt-4 lg:mt-0 text-[15px]'>
              {STEP[active].description}
            </p>
            <div>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='my-10'>{renderInput()}</div>
                {STEP.length - 1 === active ? (
                  <DynamicWidget />
                ) : (
                  <button className='text-small text-white highlight-gradient h-[42px] rounded-lg px-3 w-full'>
                    Next
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
