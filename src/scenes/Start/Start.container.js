import { connect } from "react-redux";
import { start } from "../../store/inProgress/actions";
import Start from "./Start.render";

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(start())
});

export default connect(undefined, mapDispatchToProps)(Start);
