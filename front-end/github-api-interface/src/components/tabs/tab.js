import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "../bemi-tabs/tabs-styled";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "tab-item";

    if (activeTab === label) {
      className += " tab-active";
    }

    return (
      <S.TabName className={className} onClick={onClick}>
        {label}
      </S.TabName>
    );
  }
}

export default Tab;