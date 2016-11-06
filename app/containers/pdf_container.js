import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ErrorDisplay from '../containers/error_container';
import * as actions from '../actions';
import PdfScoutSort from '../components/pdf_scout_sort';
import LoadingComponent from './loading_container';
import { ROOT_URL } from '../actions';

const style = {
  margin: 12,
};

class PdfContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePdfCreation = this.handlePdfCreation.bind(this);
  }
  componentWillMount() {
    this.props.getAllScouts();
  }
  handlePdfCreation() {
    const data = {};
    const elem = document.getElementById('pdf-content').innerHTML;
    const partial = `<html>
      <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">
      <style>
      body {
        font-size: 10px;
      }
      table {
        font-size: 9px;
      }
      td {
        padding-top: 0;
        padding-bottom: 0;
      }
      h3 {
        font-size: 16px;
      }
      .cell-2 {
        width: 135px;
      }
      p {
        margin-bottom: 0;
      }
      address {
        margin-bottom: 5px;
      }
      .pdf-container {
        width: 500px;
        page-break-after: always;
      }

      .pdf-col-div-1 {
        width: 300px;
        padding-left: 8px;
        display: inline-block;
      }
      .pdf-col-div-2 {
        width: 200px;
        padding-left: 8px;
        display: inline-block;
      }

      .pdf-notes {
        width: 500px;
        padding: 8px;
        margin-bottom: 8px;
        border-bottom: 1px solid #eee;
      }

      </style>

      </head>
      <body>
      ${elem}
      </body>
      </html>`;
    // data.elem = elem.innerHTML;
    data.elem = partial;
    data.title = this.props.sortedBy;
    this.props.createAPdf(data);
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
          <RaisedButton
            type="button"
            label="Create PDF"
            onClick={this.handlePdfCreation}
            style={style}
            labelColor={'#FFF'}
            primary
          />
          { this.props.pdf &&
            <RaisedButton
              type="button"
              label="Download PDF"
              href={`${ROOT_URL}/download/${this.props.pdf}`}
              onClick={() => { this.props.clearPdf(); }}
              style={style}
              labelColor={'#FFF'}
              secondary
            />
          }
          {this.props.loading && <LoadingComponent />}
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
  clearPdf: PropTypes.func,
  loading: PropTypes.bool,
  pdf: PropTypes.string,
  createAPdf: PropTypes.func,
  scouts: PropTypes.object,
  sortedBy: PropTypes.string,
  error: PropTypes.string,
  getAllScouts: PropTypes.func,
};


const mapStateToProps = ({ scouts, sortedBy, error, pdf, loading }) => (
  { scouts, sortedBy, error, pdf, loading }
);


export default connect(mapStateToProps, actions)(PdfContainer);
