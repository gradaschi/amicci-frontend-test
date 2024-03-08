import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

interface AlertContextProps {
  showAlert: (severity: string, message: string) => void
}

interface AlertProviderProps {
  children: ReactNode
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined)

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context.showAlert
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<{
    severity: string
    message: string
  } | null>(null)

  const showAlert = (severity: string, message: string) => {
    setAlert({ severity, message })
  }

  const handleClose = (
    event: React.SyntheticEvent<Element, Event>,
    reason: string | undefined,
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setAlert(null)
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Snackbar
        open={!!alert}
        autoHideDuration={6000}
        onClose={handleClose as any}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose as any}
          severity={
            (alert?.severity as 'info' | 'success' | 'warning' | 'error') ||
            'info'
          }
        >
          {alert?.message || ''}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  )
}
