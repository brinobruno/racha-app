import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useUsers } from '../../services/hooks/useUsers'

export function Dashboard() {
  const notify = () => toast('Wow so easy!')

  const { data, isLoading, error } = useUsers()

  return (
    <section>
      <h1>Dashboard</h1>

      <input type="text" placeholder="input" />
      <button onClick={notify}>Notify</button>

      <div>
        {isLoading && <span>Loading...</span>}
        {typeof error === 'string' && <span>{error}</span>}

        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                <div>ID: {user.id}</div>
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
                <div>Created at: {user.created_at}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  )
}
