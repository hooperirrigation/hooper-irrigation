import React from 'react'
import beusMitchell from '../../Assets/masterSchedules/Beus Mitchell 2020.pdf'
import cox from '../../Assets/masterSchedules/Cox 2020.pdf'
import fowers from '../../Assets/masterSchedules/Fowers 2020.pdf'
import hooperMain from '../../Assets/masterSchedules/Hooper Main 2020.pdf'
import hull from '../../Assets/masterSchedules/Hull 2020.pdf'
import moore from '../../Assets/masterSchedules/Moore 2020.pdf'
import muskrat1 from '../../Assets/masterSchedules/Muskrat 1 2020.pdf'
import muskrat3 from '../../Assets/masterSchedules/Muskrat 3 2020.pdf'
import muskrat4 from '../../Assets/masterSchedules/Muskrat 4 2020.pdf'
import nSimpson from '../../Assets/masterSchedules/N.Simpson 2020.pdf'
import naisbitt from '../../Assets/masterSchedules/Naisbitt 2020.pdf'
import south1 from '../../Assets/masterSchedules/South 1 2020.pdf'
import south2 from '../../Assets/masterSchedules/South 2 2020.pdf'
import south3 from '../../Assets/masterSchedules/South 3 Revised May 20 2019.pdf'
import south4 from '../../Assets/masterSchedules/South 4 2020.pdf'
import south5 from '../../Assets/masterSchedules/South 5 2020.pdf'
import south6 from '../../Assets/masterSchedules/South 6 2020.pdf'
import south7 from '../../Assets/masterSchedules/South 7 2020.pdf'
import south8 from '../../Assets/masterSchedules/South 8 2020.pdf'
import south9 from '../../Assets/masterSchedules/South 9 2020.pdf'
import south10 from '../../Assets/masterSchedules/South 10 2020.pdf'
import south11 from '../../Assets/masterSchedules/South 11 2020.pdf'
import south12 from '../../Assets/masterSchedules/South 12 2020.pdf'
import taylor1 from '../../Assets/masterSchedules/Taylor 1 2020.pdf'
import taylor2 from '../../Assets/masterSchedules/Taylor 2 2020.pdf'
import taylor3 from '../../Assets/masterSchedules/Taylor 3 2020.pdf'
import taylor4 from '../../Assets/masterSchedules/Taylor 4 2020.pdf'
import taylor5 from '../../Assets/masterSchedules/Taylor 5 2020.pdf'
import topZinie from '../../Assets/masterSchedules/Top Zinie 2020.pdf'
import wSimpson from '../../Assets/masterSchedules/W.Simpson 2020.pdf'
import west from '../../Assets/masterSchedules/West 2020.pdf'
import ww1Surrage from '../../Assets/masterSchedules/WW1 Surrage 2020.pdf'
import ww2Heslop from '../../Assets/masterSchedules/WW2 Heslop 2020.pdf'
import ww3Gibson from '../../Assets/masterSchedules/WW3 Gibson 2020.pdf'
import ww4Mclean from '../../Assets/masterSchedules/WW4 McLean 2020.pdf'
import ww5East from '../../Assets/masterSchedules/WW5 East 2020.pdf'
import ww6Penman from '../../Assets/masterSchedules/WW6 Penman 2020.pdf'
import ww7Cristelli from '../../Assets/masterSchedules/WW7 Cristelli 2020.pdf'
import ww8 from '../../Assets/masterSchedules/WW8 2020.pdf'
import ww9Dance from '../../Assets/masterSchedules/WW9 Dance 2020.pdf'
import ww10Buck from '../../Assets/masterSchedules/WW10 Buck 2020.pdf'
import ww11Mcfarland from '../../Assets/masterSchedules/WW11 McFarland 2020.pdf'
import ww12Calderwood from '../../Assets/masterSchedules/WW12 Calderwood 2020.pdf'
import './Schedules.css'

function Schedules() {
    return (
        <div className='container'>
            <div className="content" id='schedules-content'>
                <h2>Water Schedules</h2>
                <h3>Updated for 2020</h3>
                <table className="schedule-table">
                    <tr>
                        <th>Ditch</th>
                        <th>View File</th>
                        <th>Download File</th>
                    </tr>
                    <tr>
                        <td>Beus/Mitchell </td>
                        <td><a href={beusMitchell} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={beusMitchell} download>Download</a></td>
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
                        <td>WW1 Surrage </td>
                        <td><a href={ww1Surrage} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww1Surrage} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW2 Heslop </td>
                        <td><a href={ww2Heslop} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww2Heslop} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW3 Gibson </td>
                        <td><a href={ww3Gibson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww3Gibson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW4 McLean </td>
                        <td><a href={ww4Mclean} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww4Mclean} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW5 East </td>
                        <td><a href={ww5East} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww5East} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW6 Penman </td>
                        <td><a href={ww6Penman} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww6Penman} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW7 Cristelli </td>
                        <td><a href={ww7Cristelli} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww7Cristelli} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW8 </td>
                        <td><a href={ww8} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww8} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW9 Dance </td>
                        <td><a href={ww9Dance} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww9Dance} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW10 Buck </td>
                        <td><a href={ww10Buck} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww10Buck} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW11 McFarland </td>
                        <td><a href={ww11Mcfarland} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww11Mcfarland} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW12 Calderwood </td>
                        <td><a href={ww12Calderwood} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww12Calderwood} download>Download</a></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Schedules
