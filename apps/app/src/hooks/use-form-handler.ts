import { type FieldValues, useForm } from 'react-hook-form'
import type { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useSubmit } from '@remix-run/react'

export default function useFormHandler<T extends FieldValues>(
  schema: z.Schema<T>,
  formRef?: React.MutableRefObject<null>
) {
  const _formRef = useRef(null)
  const ref = formRef || _formRef
  const submit = useSubmit()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: false,
  })

  const _handleSubmit = handleSubmit((data) => submit(ref.current))

  return { ref, register, errors, handleSubmit: _handleSubmit }
}
