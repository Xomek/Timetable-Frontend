import { Close } from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useState,
  ReactElement,
} from "react";
import { Header } from "./components";

export interface IContextModal {
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
  setContentModal: Dispatch<SetStateAction<ReactElement>>;
}

export const contextModal = createContext<IContextModal>({} as IContextModal);

const App: FC = () => {
  const [isVisibleModal, setVisibleModal] = useState<boolean>(false);
  const [contentModal, setContentModal] = useState<ReactElement>(<div />);

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
        <Box sx={{ position: "relative" }}>
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
    </>
  );
};

export default App;
