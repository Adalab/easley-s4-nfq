import React, { Component } from 'react';
import PRcard from '../PRcard';

class PRlist extends Component {
  render() {
    const { pullRequests } = this.props;
    return (
      <ul>
        {pullRequests.map((item, index) => {
          return (
            <li key={index}>
              <PRcard
              avatar={item.avatar}
              author={item.author}
              branch={item.branch}
              title={item.title}
              comments={item.comments_number} />
            </li>
          )
        })}
      </ul>


    );
  }
}

export default PRlist;
