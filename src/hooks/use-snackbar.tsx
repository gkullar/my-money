import React, {
  FunctionComponent,
  createContext,
  useContext,
  useState
} from 'react';
import Snackbar from '../components/snackbar';

interface State {
  text: string;
  show: boolean;
  open: (message: string) => void;
  close: () => void;
}

function useSnackbarProvider(): State {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  function open(message: string) {
    setText(message);
    setShow(true);
  }

  function close() {
    setShow(false);
  }

  return { text, show, open, close };
}

const SnackbarContext = createContext<State>({} as any);

const SnackbarProvider: FunctionComponent<{}> = ({ children }) => {
  const snackbar = useSnackbarProvider();

  return (
    <SnackbarContext.Provider value={snackbar}>
      {children}
      <Snackbar show={snackbar.show}>{snackbar.text}</Snackbar>
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => useContext(SnackbarContext);

export { useSnackbar, SnackbarProvider };
