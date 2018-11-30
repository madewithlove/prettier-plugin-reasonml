open MomentRe;




let getMonthsRange = (start, monthsDuration) => {
                let months = ref([]);
                let lastMonth = start |> Moment.add(~duration=duration(monthsDuration, `months));




                let month =
                    ref(start |> Moment.subtract(~duration=duration(1, `months)) |> Moment.startOf(`month));



                    while ((month^)->(Moment.isBefore(lastMonth))) {
                    months := months^ @ [Moment.format("YYYY-MM", month^)];
                    month := month^ |> Moment.add(~duration=duration(1, `months));
                };

                months^;
};

let months = getMonthsRange(momentNow(), Configuration.get("months"));



let currentMonth = ()



=> momentNow() |>
 Moment.startOf(`month   );

let isDifferentYear = month => Moment.year(moment(month)) != Moment.year(momentNow());

let isCurrentMonth = month => Moment.format("YYYY-MM", momentNow()) == month;

let isInPast = month =>
  (moment(month) |> Moment.startOf(`month))->(Moment.isBefore(currentMonth()));

let isPastThisMonth = (month, day) => {
  let everyDate = Printf.sprintf("%s-%02d", month, day) |> moment;
  let isThisMonth = Moment.month(everyDate) == Moment.month(currentMonth());
  let isPast = Moment.isBefore(everyDate, momentNow());

  isThisMonth && isPast;
};