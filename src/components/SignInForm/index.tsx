import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  ISignInRequest,
  useSignInMutation,
} from 'src/services/hooks/useSignInMutation'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'

const signInFormValidationSchema = zod.object({
  email: zod.string().email('Insira um email válido'),
  password: zod.string().min(7, 'Insira uma senha válida'),
})

export type SignInFormData = zod.infer<typeof signInFormValidationSchema>

export function SignInForm() {
  const navigate = useNavigate()

  const newSignInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = newSignInForm

  const signInMutation = useSignInMutation()

  const handleSignInUserSubmit: SubmitHandler<ISignInRequest> = async (
    signInInputs,
  ) => {
    await signInMutation.mutateAsync(signInInputs)
    reset()
    toast('Bem-vindo(a) de volta!')
    navigate('/dashboard')
  }

  return (
    <Form onSubmit={handleSubmit(handleSignInUserSubmit)}>
      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          {...newSignInForm.register('email')}
          name="email"
        />
      </FieldContainer>

      {errors?.email && <Validate>{errors.email.message}</Validate>}

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          {...newSignInForm.register('password')}
          name="password"
          type="password"
        />
      </FieldContainer>

      {errors?.password && <Validate>{errors.password.message}</Validate>}

      <button
        data-testid="signin-submit"
        disabled={signInMutation.isLoading}
        type="submit"
      >
        Entrar
      </button>

      <WarningsContainer>
        {signInMutation.isLoading && <span>Entrando...</span>}
        {signInMutation.isSuccess && <span>Entrada com sucesso.</span>}
        {signInMutation.isError && (
          <span>
            Erro ao entrar: <br />
            {String(signInMutation.error)}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
