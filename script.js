const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const updateDateTime = () => {
    const now = new Date();
    const currentDayOfWeek = daysOfWeek[now.getUTCDay()];
    const currentUTCTime = now.getTime();
    currentDayElement.textContent = currentDayOfWeek;
    currentUTCTimeElement.textContent = currentUTCTime;
};
updateDateTime();
setInterval(updateDateTime, 1000);
    