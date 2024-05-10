import { useEffect, useState } from 'react'
import { Controller, set, useForm } from 'react-hook-form'

interface Props {
  form: ReturnType<typeof useForm>
}

export const MaxSupply = ({ form }: Props) => {
  return (
    <Controller
      control={form.control}
      rules={{
        required: 'This field is required',
      }}
      name='max_supply'
      render={({ field: { onChange, value } }) => {
        const [firstNumber, setFirstNumber] = useState(1)
        const [secondNumber, setSecondNumber] = useState(1000)

        useEffect(() => {
          if (onChange) {
            onChange(firstNumber * secondNumber)
          }
        }, [firstNumber, secondNumber, onChange])

        useEffect(() => {
          if (value) {
            if (value >= 1000) {
              setFirstNumber(value / 1000)
            }

            if (value >= 1000000) {
              setFirstNumber(value / 1000000)
            }

            if (value >= 1000000000) {
              setFirstNumber(value / 1000000000)
            }

            if (value >= 1000000000000) {
              setFirstNumber(value / 1000000000000)
            }
          }

          if (value) {
            setSecondNumber(value)
          }
        }, [])

        return (
          <>
            <div>
              <label
                htmlFor='maxSupply'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Maximum Supply
              </label>
              <div className='flex items-center space-x-2'>
                <select
                  onChange={(e) => setFirstNumber(Number(e.target.value))}
                  value={String(firstNumber)}
                  id='maxSupply'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => setSecondNumber(Number(e.target.value))}
                  value={String(secondNumber)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option value='1000'>K</option>
                  <option value='1000000'>M</option>
                  <option value='1000000000'>B</option>
                  <option value='1000000000000'>T</option>
                </select>
              </div>
            </div>
            {form.formState.errors.max_supply?.message && (
              <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
                {form.formState.errors.max_supply?.message as string}
              </p>
            )}
          </>
        )
      }}
    />
  )
}
