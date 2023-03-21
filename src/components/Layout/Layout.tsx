import React, { PropsWithChildren } from "react";
import useStyles from "./styles";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Layout;
