import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  select: {
    display: "none",
  },
  input: {
    width: "100%",
    height: "40px",
    borderRadius: "15px",
    border: "1px solid rgb(0,0,255)",
    padding: "12px",
    cursor: "pointer",

    "&:focus": {
      outline: "4px solid rgba(0,0,255,0.2)",
    },
  },
  icon: {
    border: "solid rgb(128, 128, 128)",
    borderWidth: "0 2px 2px 0",
    display: "inline-block",
    padding: "4px",
    transform: "rotate(45deg)",
    position: "absolute",
    top: "13px",
    right: "20px",
    cursor: "pointer",
  },
  inputWrapper: {
    width: "350px",
    position: "relative",

    "&.open": {
      top: "16px",
      transform: "rotate(-135deg)",
    },
  },
  overlay: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  optionsList: {
    display: "none",
    position: "absolute",
    top: "50px",
    zIndex: 2,
    listStyle: "none",
    width: "100%",
    height: "300px",
    overflowY: "scroll",
    borderRadius: "15px",
    border: "1px solid rgb(128, 128, 128)",
    padding: "8px",
    flexDirection: "column",
    gap: "4px",
    boxShadow: "0px 0px 25px -15px rgba(0,0,0,1)",
    background: "#fff",

    "&::-webkit-scrollbar": {
      width: "4px",
      position: "absolute",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "10px",
      marginTop: "14px",
      marginBottom: "14px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgb(128, 128, 128)",
      borderRadius: "10px",
    },

    "&.show": {
      display: "flex",
    },
  },
  option: {
    cursor: "pointer",
    padding: "8px",
    borderRadius: "15px",

    "&:hover": {
      background: "rgba(0, 0, 255, 0.1)",
    },

    "&.focus": {
      background: "rgba(0, 0, 255, 0.1)",
    },

    "&.checked": {
      background: "rgba(0, 0, 255, 0.1)",
      color: "rgba(0, 0, 255, 0.5)",
    },
  },
});

export default useStyles;
