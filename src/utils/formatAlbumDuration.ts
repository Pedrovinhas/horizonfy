export function formatAlbumDuration(durationMs: number ): string {
  const totalSeconds = Math.floor(durationMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  let duration = '';
  
  if (hours > 0) {
    duration += hours + 'h ';
  }
  
  if (minutes > 0 || hours > 0) {
    duration += minutes + 'm ';
  }
  
  duration += seconds + 's';
  
  return duration;
}