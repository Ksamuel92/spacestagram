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

const Header = (props) => {
  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "#FFF5F5" }}>
            <Typography variant="h6" color="#4F070C" component="div">
              Spacestagram
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Fragment>
  );
};
export default Header;
