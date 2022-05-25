import React, { memo } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import cn from "classnames";
import { INDEX_PATH } from "@constants/router-constants";
import styles from "./styles.module.scss";

const Logo = ({ className, black }) => (
  <Link href={INDEX_PATH}>
    <a className={cn(className, styles.wrapper)}>
      <img className={styles.logoImage} src="/images/logo1.png" alt="logo" />
    </a>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default memo(Logo);
