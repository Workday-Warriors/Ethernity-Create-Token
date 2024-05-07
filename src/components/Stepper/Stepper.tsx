import React from 'react'

export type Step = {
  title: string
  description: string
}
export interface Props {
  steps: Step[]
  active: number
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

export const Stepper = ({ steps, active }: Props) => {
  return (
    <ol className='space-y-4 w-72'>
      {steps.map((step, index) => (
        <li key={index}>
          <div
            className={`w-full p-4 ${
              active > index
                ? 'text-green-700 border-green-300 dark:border-green-800 dark:text-green-400'
                : index === active
                ? 'text-blue-700 dark:border-blue-800 dark:text-blue-400 border-blue-300'
                : 'text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
            } border  rounded-lg bg-green-50 dark:bg-gray-800  `}
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
        </li>
      ))}
    </ol>
  )
}
