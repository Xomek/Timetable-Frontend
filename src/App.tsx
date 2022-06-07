import { ThemeProvider } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { Box, Modal, styled } from "@mui/material";
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
import Footer from "./components/Footer";
import { useAuth } from "./hooks/useAuth";
import { Home } from "./pages";
import { theme } from "./scss/theme";
import { useAppDispatch } from "./store/hooks";
import { refreshUserToken } from "./store/thunks/authThunks";

export interface IContextModal {
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
  setContentModal: Dispatch<SetStateAction<ReactElement>>;
}

export const contextModal = createContext<IContextModal>({} as IContextModal);

const ModalStyled = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

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
    <ThemeProvider theme={theme}>
      <ModalStyled open={isVisibleModal} onClose={() => setVisibleModal(false)}>
        <Box
          sx={{
            maxWidth: 500,
            position: "absolute",
            outline: "none",
            width: "100%",
          }}
        >
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
      </ModalStyled>
      <contextModal.Provider
        value={{
          setVisibleModal,
          setContentModal,
        }}
      >
        <Header />
      </contextModal.Provider>
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
