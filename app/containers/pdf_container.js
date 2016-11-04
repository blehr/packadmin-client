import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ErrorDisplay from '../containers/error_container';
import * as actions from '../actions';
import PdfScoutSort from '../components/pdf_scout_sort';
import LoadingComponent from './loading_container';

class PdfContainer extends Component {
  componentWillMount() {
    this.props.getAllScouts();
  }
  render() {
    if (!this.props.scouts.allScouts || this.props.scouts.allScouts.length === 0) {
      if (this.props.error) {
        return <ErrorDisplay />;
      }
      return (
        <div style={{ position: 'relative' }}>
          <LoadingComponent />
          <div>No Scout</div>
        </div>
      );
    }
    return (
      <div>
        <div className="row">
          <PdfScoutSort
            scouts={this.props.scouts.allScouts}
            handleClick={this.onHandleClick}
            filter={this.props.sortedBy}
          />
        </div>
      </div>
    );
  }
}

PdfContainer.propTypes = {
  scouts: PropTypes.object,
  sortedBy: PropTypes.string,
  error: PropTypes.string,
  getAllScouts: PropTypes.func,
};


const mapStateToProps = ({ scouts, sortedBy, error }) => (
  { scouts, sortedBy, error }
);


export default connect(mapStateToProps, actions)(PdfContainer);
