import React from 'react'
import beusMitchell from '../../Assets/masterSchedules/Beus Mitchell Half 2022 (2).pdf'
import buckMclean from '../../Assets/masterSchedules/Buck McLean Half 2022 (2).pdf'
import cristelliPenman from '../../Assets/masterSchedules/Cristelli Penman Half 2022 (1).pdf'
import danceCalderwood from '../../Assets/masterSchedules/Dance Calderwood Half 2022 (1).pdf'
import gibsonEast from '../../Assets/masterSchedules/Gibson East Half 2022.pdf'
import hooperMainTopZinie from '../../Assets/masterSchedules/Hooper Main Top Zinie Half 2022.pdf'
import mcfarlandHeslop from '../../Assets/masterSchedules/McFarland Heslop Half 2022.pdf'
import muskrat1Cox from '../../Assets/masterSchedules/Muskrat 1 Cox Half 2022.pdf'
import muskrat4Fowers from '../../Assets/masterSchedules/Muskrat 4 Fowers Half 2022.pdf'
import nsimpsonWsimpson from '../../Assets/masterSchedules/N Simpson W Simpson Half 2022 (2).pdf'
import naisbittMuskrat3 from '../../Assets/masterSchedules/Naisbitt Muskrat 3 Half 2022.pdf'
import south16 from '../../Assets/masterSchedules/South 1 & 6 Half 2022.pdf'
import south23 from '../../Assets/masterSchedules/South 2 & 3 Half 2022 (1).pdf'
import south45 from '../../Assets/masterSchedules/South 4 & 5 Half 2022.pdf'
import south78 from '../../Assets/masterSchedules/South 7 & 8 Half 2022 (1).pdf'
import south910 from '../../Assets/masterSchedules/South 9 & 10 Half 2022 (1).pdf'
import south1112 from '../../Assets/masterSchedules/South 11 & 12 Half 2022 (2).pdf'
import taylor1 from '../../Assets/masterSchedules/Taylor Half 1 2022 (1).pdf'
import taylor2 from '../../Assets/masterSchedules/Taylor Half 2 2022.pdf'
import taylor3 from '../../Assets/masterSchedules/Taylor Half 3 2022.pdf'
import westMoore from '../../Assets/masterSchedules/West Moore Half 2022.pdf'
import widdisonHull from '../../Assets/masterSchedules/Widdison Hull Half 2022 (1).pdf'
import ww8Surrage from '../../Assets/masterSchedules/WW8 Surrage Half 2022 (1).pdf'
import './Schedules.css'

function Schedules() {
    return (
        <div className='container'>
            <div className="content" id='schedules-content'>
                <h2>Water Schedules</h2>
                <h3 className='notice' id='narrow-notice'>Updated May 14, 2022</h3>
                <table className="schedule-table">
                    <tr>
                        <th>Ditch</th>
                        <th>View File</th>
                        <th>Download File</th>
                    </tr>
                    <tr>
                        <td><div>Beus Mitchell </div><p className='td-date'>May 14, 2022</p></td>
                        <td><a href={beusMitchell} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={beusMitchell} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Buck McLean <p className='td-date'>Apr 24, 2022</p></td>
                        <td><a href={buckMclean} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={buckMclean} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Cristelli Penman <p className='td-date'>Apr 19, 2022</p></td>
                        <td><a href={cristelliPenman} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={cristelliPenman} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Dance Calderwood <p className='td-date'>Apr 19, 2022</p></td>
                        <td><a href={danceCalderwood} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={danceCalderwood} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Gibson East <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={gibsonEast} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={gibsonEast} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Hooper Main Top Zinie <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={hooperMainTopZinie} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hooperMainTopZinie} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>McFarland Heslop <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={mcfarlandHeslop} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={mcfarlandHeslop} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 1 Cox <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={muskrat1Cox} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat1Cox} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 4 Fowers <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={muskrat4Fowers} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat4Fowers} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>N Simpson W Simpson <p className='td-date'>Apr 30, 2022</p></td>
                        <td><a href={nsimpsonWsimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={nsimpsonWsimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Naisbitt Muskrat 3 <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={naisbittMuskrat3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={naisbittMuskrat3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 1 &amp; 6 <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={south16} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south16} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 2 &amp; 3 <p className='td-date'>Apr 30, 2022</p></td>
                        <td><a href={south23} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south23} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 4 &amp; 5 <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={south45} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south45} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 7 &amp; 8 <p className='td-date'>Apr 30, 2022</p></td>
                        <td><a href={south78} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south78} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 9 &amp; 10 <p className='td-date'>May 14, 2022</p></td>
                        <td><a href={south910} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south910} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 11 &amp; 12 <p className='td-date'>Apr 30, 2022</p></td>
                        <td><a href={south1112} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south1112} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 1 <p className='td-date'>Apr 19, 2022</p></td>
                        <td><a href={taylor1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 2 <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={taylor2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor 3 <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={taylor3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>West Moore <p className='td-date'>Apr 17, 2022</p></td>
                        <td><a href={westMoore} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={westMoore} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Widdison Hull <p className='td-date'>Apr 19, 2022</p></td>
                        <td><a href={widdisonHull} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={widdisonHull} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW8 Surrage <p className='td-date'>Apr 18, 2022</p></td>
                        <td><a href={ww8Surrage} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww8Surrage} download>Download</a></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Schedules
