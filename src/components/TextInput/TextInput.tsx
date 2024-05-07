export interface Props {
  placeholder?: string
  errorMessage?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export const TextInput = ({
  placeholder,
  errorMessage,
  value,
  onChange,
  label,
  ...props
}: Props) => (
  <label>
    <span
      className={`block mb-2 text-sm font-medium ${
        errorMessage ? 'text-red-700 dark:text-red-500' : 'text-white'
      }`}
    >
      {label}
    </span>
    <input
      type='text'
      value={value}
      onChange={onChange}
      id='error'
      className={`bg-red-50 border  h-[60px] text-xl ${
        errorMessage
          ? 'border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
          : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      }  text-sm rounded-lg  dark:bg-gray-700  block w-full p-2.5 `}
      placeholder={placeholder}
      {...props}
    />
    {errorMessage && (
      <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
        {errorMessage}
      </p>
    )}
  </label>
)
