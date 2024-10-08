let date = new Date();

const renderCalender = () => {
  const viewY = date.getFullYear();
  const viewM = date.getMonth();

  document.querySelector(".year-month").textContent = `${viewY}년 ${
    viewM + 1
  }월`;

  const prevLast = new Date(viewY, viewM, 0);
  const thisLast = new Date(viewY, viewM + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

    dates[
      i
    ] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

  document.querySelector(".dates").innerHTML = dates.join("");

  const today = new Date();
  if (viewM === today.getMonth() && viewY === today.getFullYear()) {
    for (let dateElement of document.querySelectorAll(".this")) {
      if (+dateElement.innerText === today.getDate()) {
        dateElement.classList.add("today");
        break;
      }
    }
  }
};

renderCalender();

const preMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};
