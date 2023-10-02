import React from 'react';
import {ClimbingBoxLoader} from "react-spinners";
import styles from './page.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <ClimbingBoxLoader color={'#36d7b7'}/>
    </div>
  );
};

export default Loading;