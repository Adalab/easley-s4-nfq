import React, { Component, Fragment } from 'react';
import StatusTab from '../StatusTab';
import PRlist from '../PRlist';
import './DetailsContainer.scss';
import ButtonPagination from '../ButtonPagination';
import PropTypes from 'prop-types';

class DetailsContainer extends Component {
    render() {
      const {value, pullRequests, handleTab, isLoading, getNextPullRequests } = this.props;
        return (
            <Fragment>
            <h2 className="details__title">{value}</h2>
            <ButtonPagination
            getNextPullRequests={getNextPullRequests}
            />
            <select className="details__select">
                <option>OPEN</option>
                <option>MERGED</option>
                <option>DECLINED</option>
            </select>
            <div className="details__wrapper--tab">
            <StatusTab
            tab="OPEN"
            handleTab={handleTab}
            status="OPEN"
            />
            <StatusTab
            tab="MERGED"
            handleTab={handleTab}
            status="MERGED"
            />
            <StatusTab
            tab="DECLINED"
            handleTab={handleTab}
            status="DECLINED"
            />
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
