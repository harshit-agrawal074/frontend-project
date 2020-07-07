import React from "react";

class HomeBody extends React.Component {

  render() {
    return (<React.Fragment>
      <div align="center" style={{"marginTop":'100px'}}>
        <h1> <span className="badge badge-info">Hey Hostelers,</span></h1>
        <p className="lead"> <span className="badge badge-danger">Tell me, what is the most important thing in hostel life?</span>
          <br/> Some will say Food, some will say Relationships, some will say Internet. I know Internet is very important but
          <br/> the most important thing is <span className="badge badge-pill">Entertainment Content</span> because without content, internet is useless ;P
          <br/>and finding a place with all the content is reeeallly a mess. So, this website will help you with this.
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>
              <img src="https://picsum.photos/200" alt="" />
            </td>
            <td>
              <img src="https://picsum.photos/200?grayscale" alt="" />
            </td>
            <td>
              <img src="https://picsum.photos/200?blur" alt="" />
            </td>
            <td>
              <img src="https://picsum.photos/200?blur=2" alt="" />
            </td>
            <td>
              <img src="https://picsum.photos/id/237/200" alt="" />
            </td>
            <td>
              <img src="https://picsum.photos/200?" alt="" />
            </td>
          </tr>

        </table>
      </div>
    </React.Fragment>);
  }
}

export default HomeBody;
