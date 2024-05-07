import { TextInput } from '@/components'
import { Controller, useForm } from 'react-hook-form'

interface Props {
  form: ReturnType<typeof useForm>
}

export const TokenContract = ({ form }: Props) => {
  return (
    <>
      <Controller
        control={form.control}
        name='token_contract'
        rules={{
          required: 'This field is required',
          pattern: {
            value: /^[\w-]+\.[\w-]+\.[\w-]+$/,
            message: 'Invalid token',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Token...'
            label='Token'
            value={value?.replace(' ', '')}
            onChange={onChange}
            errorMessage={form.formState.errors.token?.message as string}
          />
        )}
      />
    </>
  )
}
