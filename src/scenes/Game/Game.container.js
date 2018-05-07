import { connect } from "react-redux";
import { stop } from "../../store/inProgress/actions";
import ScenesGame from "./Game.render";

const mapStateToProps = ({ inProgress }) => ({ inProgress });

const mapDispatchToProps = dispatch => ({
  stop: () => dispatch(stop())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScenesGame);
