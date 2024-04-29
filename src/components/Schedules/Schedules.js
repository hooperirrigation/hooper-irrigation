import React from 'react'
import beus from '../../Assets/masterSchedules/Beus.pdf'
import cox from '../../Assets/masterSchedules/Cox.pdf'
import fowers from '../../Assets/masterSchedules/Fowers.pdf'
import hooperMain from '../../Assets/masterSchedules/Hooper Main.pdf'
import hull from '../../Assets/masterSchedules/Hull.pdf'
import mitchellWiddison from '../../Assets/masterSchedules/Mitchell Widdison.pdf'
import moore from '../../Assets/masterSchedules/Moore.pdf'
import muskrat1 from '../../Assets/masterSchedules/Muskrat 1.pdf'
import muskrat3 from '../../Assets/masterSchedules/Muskrat 3.pdf'
import muskrat4 from '../../Assets/masterSchedules/Muskrat 4.pdf'
import naisbitt from '../../Assets/masterSchedules/Naisbitt.pdf'
import northSimpson from '../../Assets/masterSchedules/N. Simpson.pdf'
import south1 from '../../Assets/masterSchedules/South 1.pdf'
import south2 from '../../Assets/masterSchedules/South 2.pdf'
import south3 from '../../Assets/masterSchedules/South 3.pdf'
import south4 from '../../Assets/masterSchedules/South 4.pdf'
import south5 from '../../Assets/masterSchedules/South 5.pdf'
import south6 from '../../Assets/masterSchedules/South 6.pdf'
import south7 from '../../Assets/masterSchedules/South 7.pdf'
import south8 from '../../Assets/masterSchedules/South 8.pdf'
import south9 from '../../Assets/masterSchedules/South 9.pdf'
import south10 from '../../Assets/masterSchedules/South 10.pdf'
import south11 from '../../Assets/masterSchedules/South 11.pdf'
import south12 from '../../Assets/masterSchedules/South 12.pdf'
import taylor1 from '../../Assets/masterSchedules/Taylor 1.pdf'
import taylor2 from '../../Assets/masterSchedules/Taylor 2.pdf'
import taylor3 from '../../Assets/masterSchedules/Taylor 3.pdf'
import taylor4 from '../../Assets/masterSchedules/Taylor 4.pdf'
import taylor5 from '../../Assets/masterSchedules/Taylor 5.pdf'
import westSimpson from '../../Assets/masterSchedules/W. Simpson.pdf'
import west from '../../Assets/masterSchedules/West.pdf'
import ww1Surrage from '../../Assets/masterSchedules/WW 1 Surrage.pdf'
import ww2Heslop from '../../Assets/masterSchedules/WW 2 Heslop.pdf'
import ww3Gibson from '../../Assets/masterSchedules/WW 3 Gibson.pdf'
import ww4McLean from '../../Assets/masterSchedules/WW 4 McLean.pdf'
import ww5East from '../../Assets/masterSchedules/WW 5 East.pdf'
import ww6Penman from '../../Assets/masterSchedules/WW 6 Penman.pdf'
import ww7Cristelli from '../../Assets/masterSchedules/WW 7 Cristelli.pdf'
import ww8 from '../../Assets/masterSchedules/WW 8.pdf'
import ww9Dance from '../../Assets/masterSchedules/WW 9 Dance.pdf'
import ww10Buck from '../../Assets/masterSchedules/WW 10 Buck.pdf'
import ww11McFarland from '../../Assets/masterSchedules/WW 11 McFarland.pdf'
import ww12Calderwood from '../../Assets/masterSchedules/WW 12 Calderwood.pdf'
import zinie from '../../Assets/masterSchedules/Zinie.pdf'

import './Schedules.css'

function Schedules() {
    return (
        <div className='container'>
            <div className="content" id='schedules-content'>
                <h2>Water Schedules</h2>
                <h3 className='notice' id='narrow-notice'>Updated April 23, 2024</h3>
                <table className="schedule-table">
                    <tr>
                        <th>Ditch</th>
                        <th>View File</th>
                        <th>Download File</th>
                    </tr>
                    <tr>
                        <td><div>Beus </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={beus} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={beus} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Cox </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={cox} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={cox} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Fowers </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={fowers} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={fowers} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Hooper Main </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={hooperMain} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hooperMain} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Hull </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={hull} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hull} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Mitchell Widdison </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={mitchellWiddison} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={mitchellWiddison} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Moore </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={moore} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={moore} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Muskrat 1 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={muskrat1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Muskrat 3 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={muskrat3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Muskrat 4 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={muskrat4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Naisbitt </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={naisbitt} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={naisbitt} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>North Simpson </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={northSimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={northSimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 1 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 2 </div><p className='td-date'>April 23, 2024</p></td>
                        <td><a href={south2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 3 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 4 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 5 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south5} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south5} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 6 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south6} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south6} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 7 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south7} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south7} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 8 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south8} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south8} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 9 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south9} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south9} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 10 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south10} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south10} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 11 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south11} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south11} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>South 12 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={south12} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south12} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Taylor 1 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={taylor1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Taylor 2 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={taylor2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Taylor 3 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={taylor3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Taylor 4 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={taylor4} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor4} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Taylor 5 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={taylor5} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor5} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>West Simpson</div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={westSimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={westSimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>West </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={west} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={west} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 1 Surrage </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww1Surrage} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww1Surrage} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 2 Heslop </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww2Heslop} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww2Heslop} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 3 Gibson </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww3Gibson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww3Gibson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 4 McLean </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww4McLean} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww4McLean} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 5 East</div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww5East} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww5East} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 6 Penman </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww6Penman} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww6Penman} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 7 Cristelli </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww7Cristelli} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww7Cristelli} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 8 </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww8} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww8} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 9 Dance </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww9Dance} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww9Dance} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 10 Buck </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww10Buck} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww10Buck} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 11 McFarland </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww11McFarland} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww11McFarland} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>WW 12 Calderwood </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={ww12Calderwood} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww12Calderwood} download>Download</a></td>
                    </tr>
                    <tr>
                        <td><div>Zinie </div><p className='td-date'>April 18, 2024</p></td>
                        <td><a href={zinie} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={zinie} download>Download</a></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Schedules
