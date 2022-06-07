import { FC, useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
  Theme,
} from "@mui/material";
import { IButton } from "../../interfaces/button.interface.interface";
import { ILink } from "../../interfaces/link.interface.interface";
import { contextModal, IContextModal } from "../../App";
import { LoginForm, RegistrationForm } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { logout } from "../../store/thunks/authThunks";
import { useAppDispatch } from "../../store/hooks";

const HeaderStyled = styled(AppBar)({
  position: "static",
  backgroundColor: "#1e202a",
});

const ToolbarStyled = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  justifyContent: "space-between",
  padding: "20px 0",
  height: "87px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    height: "140px",
  },
}));

const Header: FC = () => {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const { setVisibleModal, setContentModal } =
    useContext<IContextModal>(contextModal);

  const userLinks: ILink[] = [
    { text: "Расписание", to: "/timetable" },
    { text: "Настройки", to: "/settings" },
  ];

  const userButtons: IButton[] = [
    { text: "Выйти", onClick: () => dispatch(logout()) },
  ];
  const guestButtons: IButton[] = [
    { text: "Регистрация", onClick: showModalWithRegistrationForm },
    {
      text: "Войти",
      onClick: showModalWithLoginForm,
    },
  ];

  function showModalWithLoginForm() {
    setContentModal(<LoginForm />);
    setVisibleModal(true);
  }

  function showModalWithRegistrationForm() {
    setContentModal(<RegistrationForm />);
    setVisibleModal(true);
  }

  return (
    <HeaderStyled>
      <Container maxWidth="lg">
        <ToolbarStyled disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              textShadow: "3px 3px 6px #5dddFF",
              boxShadow: "2px 2px 8px #000",
              padding: "0px 16px",
              fontFamily: "monospace",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "28px",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "inherit",
                fontStyle: "italic",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#00ffff",
              }}
            >
              T
            </Typography>
            ime
            <Typography
              sx={{
                fontSize: "inherit",
                fontStyle: "italic",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#00ffff",
              }}
            >
              T
            </Typography>
            able
          </Typography>
          {auth ? (
            <Box>
              {userLinks.map((link) => (
                <Button
                  key={link.text}
                  sx={{
                    color: "white",
                    boxShadow: "2px 2px 8px #000",
                    padding: "5px 20px",
                    ml: "10px",
                  }}
                >
                  {link.text}
                </Button>
              ))}
              {userButtons.map((button) => (
                <Button
                  key={button.text}
                  sx={{
                    color: "white",
                    boxShadow: "2px 2px 8px #000",
                    padding: "5px 20px",
                    ml: "10px",
                  }}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          ) : (
            <Box>
              {guestButtons.map((button) => (
                <Button
                  key={button.text}
                  sx={{
                    color: "white",
                    boxShadow: "2px 2px 8px #000",
                    padding: "5px 20px",
                    ml: "10px",
                  }}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          )}
        </ToolbarStyled>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
