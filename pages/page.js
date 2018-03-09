import React from 'react';
import { graphql } from "react-apollo";
import QUERY from '../graphql/getTranslations.graphql';

// class Page extends React.Component {

//   render() {
//     console.log(this.props);
//     return (
//       <div>Loading</div>
//     );
  
//   }
// }

const Page = graphql(QUERY, {
   options: {
     variables: {
      bucketSlug: "affiliates",
      readKey: "0JQVU6oFbQ48s8vyttNRTlY2vuGNtig13YnOT8843Wpp5uTlKW"
     }
   } 
  })(
  props =>  {
    if (!props.data.loading) {
    console.log(props.data)
    }
    return (
      <div>Loading</div>
      );
  })

// Page.defaultProps = {
//   bucketSlug: "commissions",
//   read_key: "0JQVU6oFbQ48s8vyttNRTlY2vuGNtig13YnOT8843Wpp5uTlKW"
// }

export default Page;