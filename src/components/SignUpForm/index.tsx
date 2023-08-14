import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  ISignUpRequest,
  useSignUpMutation,
} from 'src/services/hooks/useSignUpMutation'
import { FieldContainer, Form, Validate, WarningsContainer } from './styles'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const signUpFormValidationSchema = zod.object({
  username: zod.string().min(2, 'Insira um apelido (mínimo 2 caracteres)'),
  email: zod.string().email('Insira um email válido'),
  password: zod.string().min(7, 'Insira uma senha válida'),
})

export type SignUpFormData = zod.infer<typeof signUpFormValidationSchema>

export function SignUpForm() {
  const navigate = useNavigate()
  const newSignUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = newSignUpForm

  const signUpMutation = useSignUpMutation()

  const handleSignUpUserSubmit: SubmitHandler<ISignUpRequest> = async (
    signUpInputs,
  ) => {
    await signUpMutation.mutateAsync(signUpInputs)
    reset()
    toast('Bem-vindo(a) ao Racha!')
    navigate('/dashboard')
  }

  return (
    <Form onSubmit={handleSubmit(handleSignUpUserSubmit)}>
      <FieldContainer>
        <label htmlFor="username">Apelido</label>
        <input
          required
          id="username"
          {...newSignUpForm.register('username')}
          name="username"
          autoFocus
        />
      </FieldContainer>

      {errors?.username && <Validate>{errors.username.message}</Validate>}

      <FieldContainer>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          {...newSignUpForm.register('email')}
          name="email"
        />
      </FieldContainer>

      {errors?.email && <Validate>{errors.email.message}</Validate>}

      <FieldContainer>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          {...newSignUpForm.register('password')}
          name="password"
          type="password"
        />
      </FieldContainer>

      {errors?.password && <Validate>{errors.password.message}</Validate>}

      <button
        data-testid="signup-submit"
        disabled={signUpMutation.isLoading}
        type="submit"
      >
        Entrar
      </button>

      <WarningsContainer>
        {signUpMutation.isLoading && <span>Criando conta...</span>}
        {signUpMutation.isError && (
          <span>
            Erro ao criar conta: <br />
            {String(signUpMutation.error)}
          </span>
        )}
      </WarningsContainer>
    </Form>
  )
}
