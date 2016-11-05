import React, { Component, PropTypes } from 'react';
// import ReactDOMServer from 'react-dom/server'
import { connect } from 'react-redux';
import ErrorDisplay from '../containers/error_container';
import * as actions from '../actions';
import PdfScoutSort from '../components/pdf_scout_sort';
import LoadingComponent from './loading_container';

class PdfContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePdfCreation = this.handlePdfCreation.bind(this);
  }
  componentWillMount() {
    this.props.getAllScouts();
  }
  handlePdfCreation() {
    const elem = document.getElementById('pdf-content');
    // const elemStr = ReactDOMServer.renderToString(elem);
    console.log(elem.innerHTML);
    this.props.createAPdf(elem.innerHTML);
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
        <div className="row" >
          <button type="button" onClick={this.handlePdfCreation} >Create PDF</button>
        </div>
        <div className="row">
          <div id="pdf-content" >
            <PdfScoutSort
              scouts={this.props.scouts.allScouts}
              handleClick={this.onHandleClick}
              filter={this.props.sortedBy}
            />
          </div>
        </div>
      </div>
    );
  }
}

PdfContainer.propTypes = {
  createAPdf: PropTypes.func,
  scouts: PropTypes.object,
  sortedBy: PropTypes.string,
  error: PropTypes.string,
  getAllScouts: PropTypes.func,
};


const mapStateToProps = ({ scouts, sortedBy, error }) => (
  { scouts, sortedBy, error }
);


export default connect(mapStateToProps, actions)(PdfContainer);
