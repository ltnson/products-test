import {createTheme} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Exo',
  },

  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: '0 12px',
          background: '#004744',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            background: 'rgba(4, 71, 68, 0.2)',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: '0 10px',
          boxShadow: 'none',
          borderBottom: '0.5px solid rgb(148 163 184)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          paddingLeft: '18px',
          paddingRight: '18px',
          height: '32px',
          '&.button-1': {
            backgroundColor: 'rgba(4, 71, 68, 0.2)',
            color: '#004744',
          },

          '&.button-2': {
            backgroundColor: '#004744',
            color: 'white',
          },
          '&.button-3': {
            backgroundColor: 'rgba(4, 71, 68, 0.2)',
            color: 'rgb(168 162 158)',
          },
          '&.button-4': {
            backgroundColor: 'rgb(255 247 237)',
            color: 'rgb(249 115 22)',
          },
          '&.button-5': {
            backgroundColor: '#004744',
            color: 'white',
            border: '1px black solid',
            with: '30px',
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
          marginRight: '10px',
          backgroundColor: 'rgba(4, 71, 68, 0.2)',
          color: '#004744',
          '&:active': {
            border: 'none',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 10px',
          margin: '0 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginRight: '12px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '32px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#E5E5E5',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgba(123, 123, 123, 0.05)',
          },
          '&:nth-chill(odd)': {
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'rgb(51 65 85)',
          fontSize: '14px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'rgb(51 65 85)',
          fontSize: '14px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&hover': 'red',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          margin: '0 20px',
          marginRight: '20px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '@media (max-width: 420px)': {
            padding: '8px',
          },
        },
      },
    },
  },
});

export default theme;
