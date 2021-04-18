import React from 'react'
import beusMitchell from '../../Assets/masterSchedules/Beus Mitchell Master Half Turns 2021.pdf'
import buckMclean from '../../Assets/masterSchedules/Buck McLean Master Half Turns 2021.pdf'
import cristelliPenman from '../../Assets/masterSchedules/Cristelli Penman Master Half Turns 2021.pdf'
import danceCalderwood from '../../Assets/masterSchedules/Dance Calderwood Master Half Turns 2021.pdf'
import gibsonEast from '../../Assets/masterSchedules/Gibson East Master Half Turns 2021.pdf'
import hoopermainZinie from '../../Assets/masterSchedules/Hooper Main Zinie Master Half Turns 2021.pdf'
import mcfarlandHeslop from '../../Assets/masterSchedules/McFarland Heslop Master Half Turns 2021.pdf'
import muskrat13 from '../../Assets/masterSchedules/Muskrat 1 & 3 Master Half Turns 2021.pdf'
import muskrat4Fowers from '../../Assets/masterSchedules/Muskrat 4 Fowers Master Half Turns 2021.pdf'
import nsimpsonWsimpson from '../../Assets/masterSchedules/N Simpson W Simpson Master Half Turns 2021.pdf'
import naisbittCox from '../../Assets/masterSchedules/Naisbitt Cox Master Half Turns 2021.pdf'
import south16 from '../../Assets/masterSchedules/South 1 & 6 Master Half Turns 2021.pdf'
import south23 from '../../Assets/masterSchedules/South 2 & 3 Master Half Turns 2021.pdf'
import south45 from '../../Assets/masterSchedules/South 4 & 5 Master Half Turns 2021.pdf'
import south78 from '../../Assets/masterSchedules/South 7 & 8 Master Half Turns 2021.pdf'
import south910 from '../../Assets/masterSchedules/South 9 & 10 Master Half Turns 2021.pdf'
import south1112 from '../../Assets/masterSchedules/South 11 & 12 Master Half Turns 2021.pdf'
import taylor1 from '../../Assets/masterSchedules/Taylor Half 1 Master Half Turns 2021.pdf'
import taylor2 from '../../Assets/masterSchedules/Taylor Half 2 Master Half Turns 2021.pdf'
import taylor3 from '../../Assets/masterSchedules/Taylor Half 3 Master Half Turns 2021.pdf'
import westMoore from '../../Assets/masterSchedules/West Moore Master Half Turns 2021.pdf'
import widdisonHull from '../../Assets/masterSchedules/Widdison Hull Master Half Turns 2021.pdf'
import ww8Surrage from '../../Assets/masterSchedules/WW8 Surrage Master Half Turns 2021.pdf'
import './Schedules.css'

function Schedules() {
    return (
        <div className='container'>
            <div className="content" id='schedules-content'>
                <h2>Water Schedules</h2>
                <h3 className='update-notice'>2021 Half Turn Schedules</h3>
                <table className="schedule-table">
                    <tr>
                        <th>Ditch</th>
                        <th>View File</th>
                        <th>Download File</th>
                    </tr>
                    <tr>
                        <td>Beus Mitchell Half Turns 2021</td>
                        <td><a href={beusMitchell} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={beusMitchell} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Buck McLean Half Turns 2021</td>
                        <td><a href={buckMclean} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={buckMclean} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Cristelli Penman Half Turns 2021</td>
                        <td><a href={cristelliPenman} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={cristelliPenman} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Dance Calderwood Half Turns 2021 </td>
                        <td><a href={danceCalderwood} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={danceCalderwood} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Gibson East Half Turns 2021 </td>
                        <td><a href={gibsonEast} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={gibsonEast} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Hooper Main Zinie Half Turns 2021 </td>
                        <td><a href={hoopermainZinie} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={hoopermainZinie} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>McFarland Heslop Half Turns 2021</td>
                        <td><a href={mcfarlandHeslop} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={mcfarlandHeslop} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 1 &amp; 3 Half Turns 2021 </td>
                        <td><a href={muskrat13} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat13} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Muskrat 4 Fowers Half Turns 2021</td>
                        <td><a href={muskrat4Fowers} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={muskrat4Fowers} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>N Simpson W Simpson Half Turns 2021</td>
                        <td><a href={nsimpsonWsimpson} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={nsimpsonWsimpson} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Naisbitt Cox Half Turns 2021</td>
                        <td><a href={naisbittCox} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={naisbittCox} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 1 &amp; 6 Half Turns 2021</td>
                        <td><a href={south16} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south16} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 2 &amp; 3 Half Turns 2021</td>
                        <td><a href={south23} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south23} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 4 &amp; 5 Half Turns 2021</td>
                        <td><a href={south45} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south45} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 7 &amp; 8 Half Turns 2021</td>
                        <td><a href={south78} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south78} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 9 &amp; 10 Half Turns 2021</td>
                        <td><a href={south910} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south910} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>South 11 &amp; 12 Half Turns 2021</td>
                        <td><a href={south1112} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={south1112} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor Half 1 Turns 2021</td>
                        <td><a href={taylor1} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor1} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor Half 2 Turns 2021</td>
                        <td><a href={taylor2} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor2} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Taylor Half 3 Turns 2021</td>
                        <td><a href={taylor3} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={taylor3} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>West Moore Half Turns 2021</td>
                        <td><a href={westMoore} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={westMoore} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>Widdison Hull Half Turns 2021</td>
                        <td><a href={widdisonHull} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={widdisonHull} download>Download</a></td>
                    </tr>
                    <tr>
                        <td>WW8 Surrage Half Turns 2021</td>
                        <td><a href={ww8Surrage} target='_blank' rel="noopener noreferrer">View</a></td>
                        <td><a href={ww8Surrage} download>Download</a></td>
                    </tr>

                </table>
            </div>
        </div>
    )
}

export default Schedules
