import { FC, useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { IButton } from "../../interfaces/button.interface";
import { ILink } from "../../interfaces/link.interface";
import { contextModal, IContextModal } from "../../App";
import { LoginForm, RegistrationForm } from "../../components";

const Header: FC = () => {
  const auth: boolean = false;
  const { setVisibleModal, setContentModal } =
    useContext<IContextModal>(contextModal);

  const userLinks: ILink[] = [
    { text: "Расписание", to: "/timetable" },
    { text: "Настройки", to: "/settings" },
  ];

  const userButtons: IButton[] = [{ text: "Выйти", onClick: () => {} }];
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
    <AppBar position="static" sx={{ backgroundColor: "#1e202a" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            TT
          </Typography>
          {auth ? (
            <Box>
              {userLinks.map((link) => (
                <Button key={link.text} sx={{ color: "white" }}>
                  {link.text}
                </Button>
              ))}
              {userButtons.map((button) => (
                <Button key={button.text} sx={{ color: "white" }}>
                  {button.text}
                </Button>
              ))}
            </Box>
          ) : (
            <Box>
              {guestButtons.map((button) => (
                <Button
                  key={button.text}
                  sx={{ color: "white" }}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
