import { Controller, useForm } from 'react-hook-form'

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
        const parseValue = (input: string): number => {
          const num = parseFloat(input)
          if (isNaN(num)) return 0
          return num
        }

        const formatValue = (value: number): string => {
          if (value >= 1_000_000_000_000) {
            return `${(value / 1_000_000_000_000).toFixed(2)}T`
          } else if (value >= 1_000_000_000) {
            return `${(value / 1_000_000_000).toFixed(2)}B`
          } else if (value >= 1_000_000) {
            return `${(value / 1_000_000).toFixed(2)}M`
          } else if (value >= 1_000) {
            return `${(value / 1_000).toFixed(2)}K`
          } else {
            return value.toFixed(0)
          }
        }

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedValue = e.target.value
          const num = parseValue(selectedValue)
          onChange(num)
        }

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
                  onChange={handleChange}
                  value={value}
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
                  onChange={(e) => onChange(parseValue(e.target.value))}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option value='1'> </option>
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
