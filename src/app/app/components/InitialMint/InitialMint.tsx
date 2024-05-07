import { TextInput } from '@/components'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  form: ReturnType<typeof useForm>
}

export const InitialMint = ({ form }: Props) => {
  return (
    <>
      <Controller
        control={form.control}
        name='initial_mint'
        rules={{
          required: 'This field is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Token Name'
            label='Token Name:'
            value={value}
            onChange={onChange}
            errorMessage={form.formState.errors.initial_mint?.message as string}
          />
        )}
      />
    </>
  )
}
