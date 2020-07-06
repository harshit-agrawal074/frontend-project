import React from "react";
import { connect } from "react-redux";

// class List extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [{}]
//     }
//   }
//
//   render() {
//     const { articles } = this.state;
//     return (
//         <div>
//           <ul>
//             {articles.map(el => (<li key={el.id}>{el.name}
//                   <ul>
//                     <li key={el.id}>{el.category}</li>
//                     <li key={el.id}>{el.genre}</li>
//                     <li key={el.id}>{el.duration}</li>
//                     <li key={el.id}>{el.description}</li>
//                     <li key={el.id}>{el.languages}</li>
//                     <li key={el.id}>{el.rating}</li>
//                     <li key={el.id}>{el.casting}</li>
//                   </ul>
//                 </li>))}
//           </ul>
//         </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <div>
      <ul>
        {articles.map(el => (
            <li key={el.id}>{el.name}
              <ul>
                <li key={el.id}>{el.category}</li>
                <li key={el.id}>{el.genre}</li>
                <li key={el.id}>{el.duration}</li>
                <li key={el.id}>{el.description}</li>
                <li key={el.id}>{el.languages}</li>
                <li key={el.id}>{el.rating}</li>
                <li key={el.id}>{el.casting}</li>
              </ul>
            </li>
        ))}
      </ul>
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
