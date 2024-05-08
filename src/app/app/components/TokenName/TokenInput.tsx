import { TextInput } from '@/components'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  form: ReturnType<typeof useForm>
}

export const TokenName = ({ form }: Props) => {
  return (
    <>
      <Controller
        control={form.control}
        name='token_name'
        rules={{
          required: 'Token Name is required',
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Token Name'
            label='Token Name:'
            value={value}
            onChange={onChange}
            errorMessage={form.formState.errors.token_name?.message as string}
          />
        )}
      />
    </>
  )
}
