import { use, useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  form: ReturnType<typeof useForm>
}

export const TokenIcon = ({ form }: Props) => {
  const inputFile = useRef<any>(null)

  return (
    <Controller
      control={form.control}
      name='token_icon'
      render={({ field: { onChange, value } }) => (
        <div className='w-full flex justify-center flex-col items-center'>
          <div className='flex w-1/2 items-center justify-center'>
            <label
              htmlFor='dropzone-file'
              className={`flex flex-col items-center justify-center w-full h-64 ${
                !inputFile.current?.files[0]
                  ? 'border-2 border-gray-300 border-dashed'
                  : ''
              } rounded-lg cursor-pointer overflow-hidden bg-[#171717] dark:bg-gray-700 hover:opacity-80 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
            >
              {inputFile.current?.files[0] || value ? (
                <div className='w-full h-full'>
                  <img
                    src={
                      inputFile.current?.files[0]
                        ? URL.createObjectURL(inputFile.current?.files[0])
                        : URL.createObjectURL(value)
                    }
                    alt='icon'
                    className='w-full h-full object-cover'
                  />
                </div>
              ) : (
                <>
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <svg
                      className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </>
              )}
              <input
                onChange={(e: any) => onChange(e.target.files[0] as any)}
                id='dropzone-file'
                type='file'
                className='hidden'
                ref={inputFile}
              />
            </label>
          </div>
          <button
            type='button'
            onClick={() => inputFile.current?.click()}
            className='px-5 py-2  text-[14px] rounded-[8px] border border-[#303030] text-white flex items-center gap-x-2 w-1/2 mt-5 justify-center'
          >
            {inputFile.current?.files[0] ? 'Replace' : 'Upload'}
          </button>
        </div>
      )}
    />
  )
}
