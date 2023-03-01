import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Home() {
  const notify = () => toast('Wow so easy!')

  return (
    <section>
      <h1>Home</h1>

      <input type="text" placeholder="input" />
      <button onClick={notify}>Notify</button>

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
