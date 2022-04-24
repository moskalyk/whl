const createClock = (context, offset = 0) => {

const numbers = Array(12)
  .fill(null)
  .map((_, i) => i)
  .map((index) => {
    const position = index / 12;
    const numberContainer = document.createElement("div");

    const text = document.createElement('div')
    text.textContent = (index + 2) % 12 + 1
    
    numberContainer.style.fontFamily = 'Gothic'
    numberContainer.style.fontWeight = 200
    numberContainer.style.fontSize = 'min(4vh, 48vw)'
    numberContainer.appendChild(text);
    numberContainer.style.width = '60px'
    numberContainer.style.height = '60px'
    numberContainer.style.display = 'flex'
    numberContainer.style.alignItems = 'center'
    numberContainer.style.justifyContent = 'center'
    numberContainer.style.color = '#444'
    // numberContainer.style.border = '1px solid white'
    numberContainer.style.position = "absolute";
    numberContainer.style.left = "calc(50%)";
    numberContainer.style.top = "calc(50%)";
    //numberContainer.style.transition = '1s';
    numberContainer.style.transform = 
      `translate(-30px, -30px)` +
      `rotate(${position}turn) ` +
      `translateX(min(24vh, 24vw)) ` + //;// +
      `rotate(-${position}turn) `;

    context.appendChild(numberContainer);

    return numberContainer
  });

const marks = Array(60)
  .fill(null)
  .map((_, i) => i)
  .map((index) => {
    const position = index / 60;
    const mark = document.createElement("div");
    mark.style.width = "8px";
    mark.style.height = "2px";
    mark.style.borderRadius = '2px'
    mark.style.background = index % 5 === 0 ? "white" : "#333";
    mark.style.position = "absolute";
    mark.style.left = "calc(50% - 4px)";
    mark.style.top = "calc(50% - 2px)";
    mark.style.transform = `rotate(${position}turn) translateX(min(20.25vh, 20.25vw))`;
    context.appendChild(mark);
    return mark;
  });

const hoursDial = document.createElement("div");
hoursDial.style.width = "min(13.5vh, 13.5vw)";
hoursDial.style.height = "3px";
hoursDial.style.background = "#888";
hoursDial.style.position = "absolute";
hoursDial.style.left = "calc(50% - min(6.75vh, 6.75vw))";
hoursDial.style.top = "calc(50% - 2.5px)";
hoursDial.style.borderRadius = '2px'
context.appendChild(hoursDial);

const minutesDial = document.createElement("div");
minutesDial.style.width = "min(20.25vh, 20.25vw)";
minutesDial.style.height = "2px";
minutesDial.style.background = "#444";
minutesDial.style.position = "absolute";
minutesDial.style.left = "calc(50% - min(10.125vh, 10.125vw))";
minutesDial.style.top = "calc(50% - 1.5px)";
minutesDial.style.borderRadius = '2px'
context.appendChild(minutesDial);

const secondsDial = document.createElement("div");
secondsDial.style.width = "min(22.5vh, 22.5vw)";
secondsDial.style.height = "1px";
secondsDial.style.background = "#900";
secondsDial.style.position = "absolute";
secondsDial.style.left = "calc(50% - min(11.25vh, 11.25vw))";
secondsDial.style.top = "calc(50% - .5px)";
context.appendChild(secondsDial);

const circle = document.createElement("div");
circle.style.borderRadius = "50%";
circle.style.background = "#900";
circle.style.width = "min(.9vh, .9vw)";
circle.style.height = "min(.9vh, .9vw)";
circle.style.position = "absolute";
circle.style.left = "calc(50% - min(.45vh, .45vw))";
circle.style.top = "calc(50% - min(.45vh, .45vw))"
context.appendChild(circle);

const update = () => {
  const element = document.getElementById("out");
  const date = new Date(Date.now() + offset * 60 * 60 * 1000);
  // console.log('offset', offset * 60 * 1000, Date.now())
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ms = date.getMilliseconds();
  const hours = date.getHours() % 12;

  const fractionalSeconds = (seconds + ms / 1000) / 60;
  const fractionalMinutes = (fractionalSeconds + minutes) / 60;
  const fractionalHours = (fractionalMinutes + hours) / 12

  numbers.forEach(number => {
    const isCurrentHour = number.textContent == hours
    number.style.color = isCurrentHour ? 'white' : '#333'
    number.style.fontWeight = isCurrentHour ? 700 : 100
  })

  marks.forEach((mark, index) => {
    const isCurrentHour = (index + 15) % 60 === hours * 5
    if (isCurrentHour) {
      mark.style.background = 'white'
      mark.style.width = '16px'
      mark.style.left = "calc(50% - 8px)";
      mark.style.top = "calc(50% - 2px)";
    } else {
      mark.style.width = '8px'
      mark.style.background = 
        index % 5 === 0 
          ? '#888' 
          : '#444'
      mark.style.left = "calc(50% - 4px)";
      mark.style.top = "calc(50% - 2px)";
    }
  })

  secondsDial.style.transform = `rotate(${
    fractionalSeconds - 1 / 4
  }turn) translateX(min(6vh, 6vw))`;

  minutesDial.style.transform = `rotate(${
    fractionalMinutes - 1 / 4
  }turn) translateX(min(6vh, 6vw))`;

  hoursDial.style.transform = `rotate(${
    fractionalHours - 1 / 4
  }turn) translateX(min(3.5vh, 3.5vw))`;

  requestAnimationFrame(update);
};

  return update
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  container.style.display = 'flex'
  container.setAttribute("id", "clock")
  container.style.width = '100%'
  container.style.top = '201px'
  container.style.margin = '0 auto'
  container.style.height = '100%'
  container.style.position = 'absolute'

  const one = document.createElement('div')
  one.style.flex = '1 1 100%'
  one.style.position = 'relative'
  one.style.transform = 'scale(1.5)'

  container.appendChild(one)

  const updateOne = createClock(one)

  requestAnimationFrame(updateOne)
});
