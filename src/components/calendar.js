import React, {Fragment} from 'react';

import useCalendar from '../hook/useCalendar';

const Calendar =() => {
 const { CalendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth} = useCalendar();

 const dateClickHandler = date => {
  console.log(date )
 }

 return(
    <Fragment>
        <p>selected Month: {`${monthNames[selectedDate.getMonth()]}- ${selectedDate.getFullYear()}`}</p>
        <table className='table'>
            <thead>
                <tr>
                    {daysShort.map(day =>(
                       <th key={day}>{day}</th> 
                    ))}
                </tr>
            </thead>
            <tbody>
            {
                    Object.values(CalendarRows).map(cols => {
                        return <tr key={cols[0].date}>
                            {cols.map(col =>(
                                col.date ===todayFormatted
                                ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                    {col.value}
                                </td>
                                : <td key={col.date}className={col.classes} onClick={()=> dateClickHandler(col.date)}>{col.value}</td>
                            ))}
                        </tr>
                    })
            }
            </tbody>

        </table>
        <button className='button'onClick={getPrevMonth}>Prev</button>
        <button className='button' onClick={getNextMonth}>Next</button>
    </Fragment>
 )
  
}

export default Calendar