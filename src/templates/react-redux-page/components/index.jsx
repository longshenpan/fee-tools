import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withServerRender, BaseComponent } from 'kryfe-lib';
import * as actionsCreaters from '../actions';

class {{PageName}} extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = state => ({
  system: state.__system__,
  {{PageName}}: state.{{PageName}},
});

const mapDispatchToProps = actionsCreaters;

// inventoryManager.fetchData = () => [];

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withServerRender()
)(withRouter({{PageName}}));