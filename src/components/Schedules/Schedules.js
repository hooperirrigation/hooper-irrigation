import React from 'react'
import beus from '../../Assets/masterSchedules/Beus Master 2019.pdf'
import cox from '../../Assets/masterSchedules/Cox Master 2019.pdf'
import fowers from '../../Assets/masterSchedules/Fowers Master 2019.pdf'
import hooperMain from '../../Assets/masterSchedules/Hooper Main Master 2019.pdf'
import hull from '../../Assets/masterSchedules/Hull Master 2019.pdf'
import mitchell from '../../Assets/masterSchedules/Mitchell Master 2019.pdf'
import moore from '../../Assets/masterSchedules/Moore Master 2019.pdf'
import muskrat1 from '../../Assets/masterSchedules/Muskrat 1 Master 2019.pdf'
//ask michell about muskrat 2
import muskrat3 from '../../Assets/masterSchedules/Muskrat 3 Master 2019.pdf'
import muskrat4 from '../../Assets/masterSchedules/Muskrat 4 Master 2019.pdf'
import nSimpson from '../../Assets/masterSchedules/N Simpson Master 2019.pdf'
import naisbitt from '../../Assets/masterSchedules/Naisbitt Master 2019.pdf'
import south1 from '../../Assets/masterSchedules/South 1 Master 2019.pdf'
import south2 from '../../Assets/masterSchedules/South 2 Master 2019.pdf'
import south3 from '../../Assets/masterSchedules/South 3 Revised May 20 2019.pdf'
import south4 from '../../Assets/masterSchedules/South 4 Master 2019.pdf'
import south5 from '../../Assets/masterSchedules/South 5 Master 2019.pdf'
import south6 from '../../Assets/masterSchedules/South 6 Master 2019.pdf'
import south7 from '../../Assets/masterSchedules/South 7 Master 2019.pdf'
import south8 from '../../Assets/masterSchedules/South 8 Master 2019.pdf'
import south9 from '../../Assets/masterSchedules/South 9 Master 2019.pdf'
import south10 from '../../Assets/masterSchedules/South 10 Master 2019.pdf'
import south11 from '../../Assets/masterSchedules/South 11 Master 2019.pdf'
import south12 from '../../Assets/masterSchedules/South 12 Master 2019.pdf'
import taylor1 from '../../Assets/masterSchedules/Taylor 1 Master 2019.pdf'
import taylor2 from '../../Assets/masterSchedules/Taylor 2 Master 2019.pdf'
import taylor3 from '../../Assets/masterSchedules/Taylor 3 Master 2019.pdf'
import taylor4 from '../../Assets/masterSchedules/Taylor 4 Master 2019.pdf'
import taylor5 from '../../Assets/masterSchedules/Taylor 5 Master 2019.pdf'
import topZinie from '../../Assets/masterSchedules/Top Zinie Master 2019.pdf'
import wSimpson from '../../Assets/masterSchedules/W Simpson Master 2019.pdf'
import west from '../../Assets/masterSchedules/West Master 2019.pdf'
import ww1Surrage from '../../Assets/masterSchedules/WW 1 Surrage Master 2019.pdf'
import ww2Heslop from '../../Assets/masterSchedules/WW 2 Heslop Master 2019.pdf'
import ww3Gibson from '../../Assets/masterSchedules/WW 3 Gibson Master 2019.pdf'
import ww4Mclean from '../../Assets/masterSchedules/WW 4 McLean Master 2019.pdf'
import ww5East from '../../Assets/masterSchedules/WW 5 East Master 2019.pdf'
import ww6Penman from '../../Assets/masterSchedules/WW 6 Penman Master 2019.pdf'
import ww7Cristelli from '../../Assets/masterSchedules/WW 7 Cristelli Master 2019.pdf'
import ww8 from '../../Assets/masterSchedules/WW 8 Master 2019.pdf'
import ww9Dance from '../../Assets/masterSchedules/WW 9 Dance Master 2019.pdf'
import ww10Buck from '../../Assets/masterSchedules/WW 10 Buck Master 2019.pdf'
import ww11Mcfarland from '../../Assets/masterSchedules/WW 11 McFarland Master 2019.pdf'
import './Schedules.css'

function Schedules() {
    return (
        <div className='container'>
            <div className="content" id='schedules-content'>
                <h2>Water Schedules</h2>
                <table className="schedule-table">
                    <tr>
                        <th>Ditch</th>
                        <th>View File</th>
                        <th>Download File</th>
                    </tr>
                    <tr>
                        <td>Beus </td>
                        <td><a href={beus} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={beus} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Cox </td>
                        <td><a href={cox} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={cox} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Fowers </td>
                        <td><a href={fowers} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={fowers} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Hooper Main </td>
                        <td><a href={hooperMain} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hooperMain} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Hull </td>
                        <td><a href={hull} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hull} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Mitchell </td>
                        <td><a href={mitchell} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={mitchell} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Moore </td>
                        <td><a href={moore} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={moore} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 1 </td>
                        <td><a href={muskrat1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 3 </td>
                        <td><a href={muskrat3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 4 </td>
                        <td><a href={muskrat4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>N. Simpson </td>
                        <td><a href={nSimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={nSimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Naisbitt </td>
                        <td><a href={naisbitt} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={naisbitt} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 1 </td>
                        <td><a href={south1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 2 </td>
                        <td><a href={south2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 3 </td>
                        <td><a href={south3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 4 </td>
                        <td><a href={south4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 5 </td>
                        <td><a href={south5} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south5} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 6 </td>
                        <td><a href={south6} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south6} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 7 </td>
                        <td><a href={south7} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south7} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 8 </td>
                        <td><a href={south8} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south8} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 9 </td>
                        <td><a href={south9} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south9} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 10 </td>
                        <td><a href={south10} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south10} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 11 </td>
                        <td><a href={south11} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south11} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 12 </td>
                        <td><a href={south12} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south12} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 1 </td>
                        <td><a href={taylor1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 2 </td>
                        <td><a href={taylor2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 3 </td>
                        <td><a href={taylor3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 4 </td>
                        <td><a href={taylor4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 5 </td>
                        <td><a href={taylor5} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor5} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Top Zinie </td>
                        <td><a href={topZinie} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={topZinie} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>W Simpson </td>
                        <td><a href={wSimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={wSimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>West </td>
                        <td><a href={west} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={west} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 1 Surrage </td>
                        <td><a href={ww1Surrage} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww1Surrage} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 2 Heslop </td>
                        <td><a href={ww2Heslop} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww2Heslop} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 3 Gibson </td>
                        <td><a href={ww3Gibson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww3Gibson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 4 McLean </td>
                        <td><a href={ww4Mclean} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww4Mclean} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 5 East </td>
                        <td><a href={ww5East} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww5East} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 6 Penman </td>
                        <td><a href={ww6Penman} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww6Penman} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 7 Cristelli </td>
                        <td><a href={ww7Cristelli} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww7Cristelli} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 8 </td>
                        <td><a href={ww8} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww8} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 9 Dance </td>
                        <td><a href={ww9Dance} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww9Dance} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 10 Buck </td>
                        <td><a href={ww10Buck} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww10Buck} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW 11 McFarland </td>
                        <td><a href={ww11Mcfarland} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww11Mcfarland} download>Download</a></td>
                    </tr>



                </table>
            </div>
        </div>
    )
}

export default Schedules
