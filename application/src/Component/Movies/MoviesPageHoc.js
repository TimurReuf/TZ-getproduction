import {compose} from "recompose";
import {graphql} from "react-apollo";

import {moviesQuery} from "./query";



export default compose(graphql(moviesQuery))
