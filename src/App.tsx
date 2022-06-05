import { Close } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
  ReactElement,
  useEffect,
} from "react";
import { Header } from "./components";
import { useAuth } from "./hooks/useAuth";
import { Home } from "./pages";
import { useAppDispatch } from "./store/hooks";
import { refreshUserToken } from "./store/thunks/authThunks";

export interface IContextModal {
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
  setContentModal: Dispatch<SetStateAction<ReactElement>>;
}

export const contextModal = createContext<IContextModal>({} as IContextModal);

const App: FC = () => {
  const auth = useAuth();
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<ReactElement>(<div />);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refreshUserToken());
    }
  }, []);

  useEffect(() => {
    setVisibleModal(false);
  }, [auth]);

  return (
    <>
      <Modal
        open={isVisibleModal}
        onClose={() => setVisibleModal(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative", outline: "none" }}>
          <Close
            onClick={() => setVisibleModal(false)}
            sx={{
              cursor: "pointer",
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
          />
          {contentModal}
        </Box>
      </Modal>
      <contextModal.Provider
        value={{
          setVisibleModal,
          setContentModal,
        }}
      >
        <Header />
      </contextModal.Provider>
      <Home />
    </>
  );
};

export default App;
