'use client';

import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Page() {

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });

  const isDateDisabled = (date: Date) : boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getDay() === 0 || date.getDay() === 6 || date < today;
  };
  
  return (
    <div className="flex gap-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={isDateDisabled}
      />
      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
      </div>
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
        disabled={isDateDisabled}
      />
      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{multipleDates?.map((date) => date.toLocaleDateString()).join(',')}</p>
      </div>
    </div>
  );
}