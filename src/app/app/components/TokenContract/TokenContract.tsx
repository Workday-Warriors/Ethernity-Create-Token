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
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Token...'
            label='Token (optional)'
            value={value?.replace(' ', '')}
            onChange={onChange}
            errorMessage={
              form.formState.errors.token_contract?.message as string
            }
          />
        )}
      />
    </>
  )
}
