import * as Repositories from "./repositories-content";
import * as Starred from "./starred-content";
import PropTypes from "prop-types";

class TabsList extends PropTypes {
    constructor(props) {
        super(props);
        
    }
}

const props = () => {
    return [
        Repositories,
        Starred,
    ];
}

export default props;