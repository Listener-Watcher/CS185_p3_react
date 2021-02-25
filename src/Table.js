import React from 'react';
import './style.css';
class Tabledata extends React.Component {
  constructor(){
    super();
  }
  render()
  {
    return (
      <div>
        <h1>Projects</h1>
        <table>
          <tbody>
            <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Year</th>
            </tr>
            <tr>
                <td><a id = "table_a" href="https://github.com/Listener-Watcher/snakegame">snakegame</a></td>
                <td><p>a simple snakegame with simple AI, default mode is controlled by AI, to change to user mode, change the user name, Username AI is reserved for AI mode.</p></td>
                <td><p>2017</p></td>
            </tr>
            <tr>
                <td><a id = "table_a" href="https://github.com/Listener-Watcher/image_processing">imageprocessing</a></td>
                <td><p>a bunch of image processing projects collecting together, jpeg compression using matlab included.</p></td>
                <td><p>2018</p></td>
            </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Tabledata;