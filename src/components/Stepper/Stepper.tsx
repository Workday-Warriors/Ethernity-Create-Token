import React from 'react'

export type Step = {
  title: string
  description: string
}
export interface Props {
  steps: Step[]
  active: number
  onChange?: (index: number) => void
}

const CheckIcon = () => (
  <svg
    className='w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 12'
  >
    <path
      stroke='currentColor'
      stroke-linecap='round'
      strokeWidth='2'
      d='M1 5.917 5.724 10.5 15 1.5'
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    className='rtl:rotate-180 w-4 h-4'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 14 10'
  >
    <path
      stroke='currentColor'
      stroke-linecap='round'
      strokeWidth='2'
      d='M1 5h12m0 0L9 1m4 4L9 9'
    />
  </svg>
)

export const Stepper = ({ steps, active, onChange }: Props) => {
  const handleClick = (index: number) => {
    if (onChange) {
      if (index < active) {
        onChange(index)
      }
    }
  }

  return (
    <ol className='space-y-4 grid px-4 lg:px-0 grid-cols-1 w-full lg:block  lg:w-72'>
      {steps.map((step, index) => (
        <li key={index}>
          <div
            onClick={() => handleClick(index)}
            className='highlight-gradient cursor-pointer rounded-lg p-0.5'
          >
            <div
              className={`w-full p-4 text-small   ${
                active > index
                  ? 'text-green-700 bg-gray-800 border-green-300'
                  : index === active
                  ? ' bg-gray-800 border-blue-800 text-blue-400'
                  : '  border-gray-300 rounded-lg bg-gray-800 text-gray-400'
              }  rounded-lg  `}
              role='alert'
            >
              <div className='flex items-center justify-between'>
                <span className='sr-only'>{step.title}</span>
                <h3 className='font-medium'>
                  {index + 1}. {step.title}
                </h3>
                {active > index ? (
                  <CheckIcon />
                ) : index === active ? (
                  <ArrowRightIcon />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
