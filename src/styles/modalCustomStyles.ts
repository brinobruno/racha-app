import { Styles } from 'react-modal'

export const modalCustomStyles: Styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0 ,0, 0.6)',
    zIndex: 100,

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    width: '30rem',
    maxWidth: '90%',

    color: '#E9EDF5',
    border: '1px solid #202024',

    borderRadius: '5px',
    padding: '2rem',
  },
}
