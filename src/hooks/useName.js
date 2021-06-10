
export function useName({ names, languague = "es" }) {
  let result = '';

  if (names) {
    result = names.filter((data) => data.language.name === languague);
    result = result[0]
    
  
  }
  
  return { result };
}
