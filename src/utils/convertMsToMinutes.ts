export function convertMsToMinutesAndSeconds(timeInMs: number): string {
  const minutes = Math.floor(timeInMs / 60000); 
  const seconds = Math.floor((timeInMs % 60000) / 1000);
  const secondsFormatted = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutes}:${secondsFormatted}`;
}