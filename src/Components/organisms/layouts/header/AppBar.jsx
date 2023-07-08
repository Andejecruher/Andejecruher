import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import Stack from '@mui/material/Stack';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const pages = ['Inicio', 'Sobre mi', 'Portafolio', 'Blog'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters className='container-logo'>
          {/* Inicio de logo en desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <FontAwesomeIcon icon={faCode} className='logo'/>
          </Box>
          <Typography
            className='rotated-text logo-text'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Lobster',
              fontWeight: 500,
              fontSize: '1.5em',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Andejecruher
          </Typography>
          {/* Fin de logo en desktop */}
          {/* Menu desplegable en version mobile  */}
          <Box sx={{ color: 'white', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Fin de menu desplegable en version mobile  */}
          {/* logo en version mobile  */}
          <Box sx={{display: { xs: 'flex', md: 'none' }}}> 
            <FontAwesomeIcon icon={faCode} className='logo-mobile'/>
            <Typography
              className='rotated-text logo-text-mobile'
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Lobster',
                fontWeight: 500,
                fontSize: '1.5em',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Andejecruher
            </Typography>
          </Box>
          {/* Separador */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          {/* Fin de separador */}
          {/* Inicio de menu en desktop */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}

            <Search sx={{ my: 2, color: 'white', display: 'block' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar …"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Stack direction="row" spacing={2} sx={{ my: 2, color: 'white', display: 'block', ml: 4 }}>
              <Button variant="contained" startIcon={<CoffeeMakerIcon />} >
              buy Me a Coffee
              </Button>
            </Stack>
          </Box>
          {/* Fin de menu en desktop */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;