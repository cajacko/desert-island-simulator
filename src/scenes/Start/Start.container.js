import { connect } from "react-redux";
import { start } from "../../store/inProgress/actions";
import ScenesStart from "./Start.render";

const mapStateToProps = ({ inProgress }) => ({ inProgress });

const mapDispatchToProps = dispatch => ({
  start: () => dispatch(start())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenesStart);
