export function getGreeting(name = 'stranger') {
  if (name.toLowerCase() === 'jerry') {
    return 'Hello Coach'
  }
  return `hi ${name}!`
}
