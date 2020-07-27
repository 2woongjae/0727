import React from "react";
import styles from "./Button.module.css";

export default class Button extends React.Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <button className={styles.button} onClick={this.click}>
        버튼 {this.state.loading && "로딩 중.."}
      </button>
    );
  }
  click = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
}
