import React from 'react';
import {Link} from'react-router-dom'

export default function componentName() {
  return (
    <>
    <div className='table-conntainer'>
      <table className='project-table'>
        <tr>
          <td>S.No</td>
          <td>Name</td>
          <td>Deployment Link</td>
          <td>Repository Link</td>
        </tr>
        <tr>
          <th>1.</th>
          <th>Paragraph Word Counter</th>
          <th><Link to='p1'>Project 1</Link></th>
          <th><a href="https://github.com/Yaswanth1320/Reactjs">Project-1</a></th>
        </tr>
        <tr>
          <th>2.</th>
          <th>Calculator</th>
          <th><Link to='p2'>Project 2</Link></th>
          <th><a href="https://github.com/Yaswanth1320/Reactjs">Project-2</a></th>
        </tr>
        <tr>
          <th>3.</th>
          <th>Color Picker</th>
          <th><Link to='p3'>Project 3</Link></th>
          <th><a href="https://github.com/Yaswanth1320/Reactjs">Project-3</a></th>
        </tr>
        <tr>
          <th>4.</th>
          <th>Api fetch (Dummy data)</th>
          <th><Link to='p4'>Project 4</Link></th>
          <th><a href="https://github.com/Yaswanth1320/Reactjs">Project-4</a></th>
        </tr>
        <tr>
          <th>5.</th>
          <th>Age Calculator</th>
          <th><Link to='p5'>Project 5</Link></th>
          <th><a href="https://github.com/Yaswanth1320/Reactjs">Project-5</a></th>
        </tr>

      </table>
    </div>
    </>
  );
}

