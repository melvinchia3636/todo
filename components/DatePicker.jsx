import React, { useState, useEffect } from "react";
import moment from "moment";
import { ChevronLeft, ChevronRight } from "../public/assets/icons";

function DatePicker() {
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month());
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const cal = [];

    const date = moment()
      .year(year)
      .month(month)
      .date(1)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0);

    const startDay = date.day();
    const daysInMonth = date.daysInMonth();

    let row = [];
    for (let j = 0; j < startDay; j++) {
      row.push(0);
    }

    for (let j = 1; j <= daysInMonth; j++) {
      row.push(j);
      if ((j + startDay) % 7 === 0) {
        cal.push(row);
        row = [];
      }
    }

    if (row.length > 0) {
      cal.push(row);
    }

    setCalendar(cal);
  }, [year, month]);

  return (
    <div className="w-full select-none flex items-start justify-center date-picker">
      <div className="rounded-2xl mx-8">
        <div className="flex w-full items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => {
              if (month === 0) {
                setYear(year - 1);
                setMonth(11);
              } else {
                setMonth(month - 1);
              }
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-center font-semibold text-lg">
            {moment().month(month).format("MMMM")} {year}
          </h2>
          <button
            type="button"
            onClick={() => {
              if (month === 11) {
                setYear(year + 1);
                setMonth(0);
              } else {
                setMonth(month + 1);
              }
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="font-bold">S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((row, i) => (
              <tr key={i}>
                {row.map((day, j) => (
                  <td className={`text-center ${!j && "font-bold"}`} key={j}>
                    {day || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DatePicker;
