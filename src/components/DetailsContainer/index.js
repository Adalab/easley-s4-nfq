import React, { Component, Fragment } from 'react';
import StatusTab from '../StatusTab';
import PRlist from '../PRlist';
import './DetailsContainer.scss';
import PropTypes from 'prop-types';

class DetailsContainer extends Component {
    render() {
      const {value, pullRequests, isLoading, handleTabLine, addClassOPEN, addClassMERGED, addClassDECLINED} = this.props;
        return (
            <Fragment>
            <h2 className="details__title">{value}</h2>
            <select className="details__select">
                <option>OPEN</option>
                <option>MERGED</option>
                <option>DECLINED</option>
            </select>
            <div className="details__wrapper--tab">
            <StatusTab status="OPEN" addClass={addClassOPEN} selected="" handleTabLine={handleTabLine}/>
            <StatusTab status="MERGED" addClass={addClassMERGED} selected="" handleTabLine={handleTabLine}/>
            <StatusTab status="DECLINED" addClass={addClassDECLINED} selected="" handleTabLine={handleTabLine}/>
            </div>
            <PRlist
            pullRequests={pullRequests}
            isLoading={isLoading}
            />
            </Fragment>
        );
    }
}

DetailsContainer.propTypes = {
  pullRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default DetailsContainer;
