import { Fragment, cloneElement } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, useScrollTrigger } from "@mui/material";

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = () => {
  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Spacestagram
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Fragment>
  );
};
export default Header;
